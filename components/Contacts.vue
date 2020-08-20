<template>
  <div>
    <div class="md:flex justify-between">
      <div class="md:max-w-2xl w-full md:mr-16 mb-10 md:mb-0">
        <h3 class="font-semibold text-4xl mb-8">
          Susisiekite!
        </h3>
        <form class="" action="">
          <div class="mb-8">
            <label class="block text-2xl mb-2" for="name">Jūsų vardas</label>
            <input id="name" v-model.trim="$v.name.$model" class="block h-16 rounded-lg bg-gray-200 w-full px-4" type="text">
            <div v-if="$v.name.$error" class="text-red-600 py-2">
              Privalomas laukelis
            </div>
          </div>
          <div class="mb-8">
            <label class="block text-2xl mb-2" for="email">Jūsų el. pašto</label>
            <input id="email" v-model.trim="$v.email.$model" class="block h-16 rounded-lg bg-gray-200 w-full px-4" type="text">
            <div v-if="$v.email.$error" class="text-red-600 py-2">
              <span v-if="$v.email.email === false">Neteisingas el. paštas</span>
              <span else>Privalomas laukelis</span>
            </div>
          </div>
          <div class="mb-8">
            <label class="block text-2xl mb-2" for="message"> Jūsų žinutė </label>
            <textarea id="message" v-model.trim="$v.message.$model" rows="10" class="block h-16 rounded-lg bg-gray-200 w-full px-4" />
            <div v-if="$v.message.$error" class="text-red-600 py-2">
              Privalomas laukelis
            </div>
          </div>
          <div class="max-w-xs">
            <div class="btn max-w-xs" @click="submit">
              <div v-if="loading === true" class="loader">
                <div class="lds-ellipsis">
                  <div /><div /><div /><div />
                </div>
              </div>
              <div v-if="loading === false">
                Siųsti žinutę »
              </div>
            </div>
          </div>
          <div class="mt-2" v-if="sent.length > 0">
            {{ sent }}
          </div>
        </form>
      </div>
      <div class="md:w-1/2">
        <div class="mb-8">
          <h3 class="font-semibold text-4xl mb-4">
            Kontaktai
          </h3>
          <p class="text-2xl">
            <a href="tel:+37067619114" class="flex items-center text-2xl mb-2">
              <img class="w-8 mr-4" src="~/assets/img/phone-dark.svg" alt="phone">
              +370 6 7619 114
            </a>
            <a href="tel:+37060736036" class="flex items-center text-2xl mb-2">
              <img class="w-8 mr-4" src="~/assets/img/phone-dark.svg" alt="phone">
              +370 6 0736 036
            </a>
            <a href="mailto:info@emortakiuvalymas.lt" class="flex items-center text-2xl mb-2">
              <img class="w-8 mr-4" src="~/assets/img/mail-dark.svg" alt="mail">
              info@emortakiuvalymas.lt
            </a>
            <a href="https://www.facebook.com/emortakiuvalymas" target="_blank" class="flex items-center text-2xl mb-2">
              <img class="w-8 mr-4" src="~/assets/img/fb-dark.svg" alt="fb">
              Sekite mus facebook'e!
            </a>
          </p>
        </div>
        <div class="mb-8">
          <h3 class="font-semibold text-4xl mb-4">
            Darbo Laikas
          </h3>
          <p class="text-2xl">
            I-IV: 08:00 - 19:00 <br>
            V: 08:00 - 19:00
          </p>
        </div>
        <div class="mb-8">
          <h3 class="font-semibold text-4xl mb-4">
            Mus Rasite
          </h3>
          <div>
            <iframe
              class="w-full max-w-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177021.9384924115!2d24.45228749008207!3d54.81738306946088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dda20290a4821f%3A0x300d18c70e9d8b0!2sVilnius%20County!5e0!3m2!1sen!2slt!4v1588749413169!5m2!1sen!2slt"
              width="400"
              height="300"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
      sent: ''
    }
  },
  methods: {
    submit () {
      this.loading = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.loading = false
      } else {
        setTimeout(() => {
          this.loading = false
          this.sent = 'Išsiųsta!'
          this.name = ''
          this.email = ''
          this.message = ''
          this.$v.$reset()
        }, 1000)
      }
    }
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    message: {
      required
    }
  }
}
</script>

<style scoped lang="scss">
  textarea {
    max-height: 16rem;
    height: auto;
  }
  input, textarea {
    outline: none;
    transition: all .2s;
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.04);
    &:hover {
      box-shadow: 0 0 0 1px #1A9CFC;
    }
    &:focus {
      box-shadow: 0 0 0 2px #1A9CFC;
      background: #fff;
    }
  }
  a {
    &:hover {
      padding-left: 0.2rem;
    }
  }
  //loader
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

</style>
