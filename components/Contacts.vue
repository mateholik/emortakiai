<template>
  <div>
    <div class="justify-between md:flex">
      <div class="md:w-1/2">
        <div class="mb-8">
          <h3 class="mb-4 text-4xl font-semibold">
            Kontaktai
          </h3>
          <p class="text-2xl">
            <a href="tel:+37067619114" class="flex items-center mb-2 text-2xl">
              <img
                class="w-8 mr-4"
                src="~/assets/img/phone-dark.svg"
                alt="phone"
              >
              +370 6 7619 114
            </a>
            <a href="tel:+37060736036" class="flex items-center mb-2 text-2xl">
              <img
                class="w-8 mr-4"
                src="~/assets/img/phone-dark.svg"
                alt="phone"
              >
              +370 6 0736 036
            </a>
            <a
              href="mailto:info@emortakiuvalymas.lt"
              class="flex items-center mb-2 text-2xl"
            >
              <img
                class="w-8 mr-4"
                src="~/assets/img/mail-dark.svg"
                alt="mail"
              >
              info@emortakiuvalymas.lt
            </a>
            <a
              href="https://www.facebook.com/emortakiuvalymas"
              target="_blank"
              class="flex items-center mb-2 text-2xl"
            >
              <img class="w-8 mr-4" src="~/assets/img/fb-dark.svg" alt="fb">
              Sekite mus facebook'e!
            </a>
          </p>
        </div>
        <div class="mb-8">
          <h3 class="mb-4 text-4xl font-semibold">
            Darbo Laikas
          </h3>
          <p class="text-2xl">
            I-IV: 08:00 - 19:00 <br>
            V: 08:00 - 19:00
          </p>
        </div>
        <img
          src="~/assets/img/sertifikatas.png"
          alt="sertifikatas"
          class="max-w-xs mx-auto mt-16 md:mx-0"
          width="320"
          height="317"
        >
      </div>
      <div class="my-16 md:my-0 md:w-1/2">
        <img
          width="616"
          height="877"
          src="~/assets/img/sertifikatas-pilnas.jpeg"
          alt="sertifikatas"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped lang="scss"></style>
