<template>
  <div>
    <section id="hero" class="hero hero-bg text-white">
      <div class="container">
        <div class="hero__content">
          <p v-if="hero.eyebrow" class="section-eyebrow section-eyebrow--light">
            {{ hero.eyebrow }}
          </p>
          <h1 class="hero__title">
            {{ hero.title }}
          </h1>
          <p v-if="hero.lead" class="hero__lead">
            {{ hero.lead }}
          </p>
          <ul v-if="heroBullets.length" class="hero__list">
            <li
              v-for="(item, index) in heroBullets"
              :key="`hero-${index}`"
              class="hero__list-item"
            >
              <span class="hero__check" aria-hidden="true">✔</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <div v-if="hero.ctaText || hero.note" class="hero__cta">
            <a v-if="hero.ctaText" href="#kontakt" class="btn hero__btn">
              {{ hero.ctaText }}
            </a>
            <p v-if="hero.note" class="hero__note">
              {{ hero.note }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="trust.title" id="trust" class="section section--muted">
      <div class="container">
        <div class="section-heading">
          <p v-if="trust.eyebrow" class="section-eyebrow">
            {{ trust.eyebrow }}
          </p>
          <h2 class="section-title">
            {{ trust.title }}
          </h2>
          <p v-if="trust.lead" class="section-lead">
            {{ trust.lead }}
          </p>
        </div>
        <div class="stat-grid">
          <div
            v-for="(signal, index) in trustStats"
            :key="`trust-${index}`"
            class="stat-card"
          >
            {{ signal }}
          </div>
        </div>
      </div>
    </section>

    <section id="leistungen" class="section">
      <div class="container">
        <div class="section-heading">
          <p v-if="services.eyebrow" class="section-eyebrow">
            {{ services.eyebrow }}
          </p>
          <h2 class="section-title">
            {{ services.title }}
          </h2>
          <p v-if="services.lead" class="section-lead">
            {{ services.lead }}
          </p>
        </div>
        <div class="services-grid">
          <article
            v-for="(service, index) in serviceCards"
            :key="`service-${index}`"
            class="card service-card"
          >
            <span v-if="service.tag" class="service-card__tag">{{ service.tag }}</span>
            <h3 class="service-card__title">
              {{ service.title }}
            </h3>
            <p v-if="service.description" class="service-card__description">
              {{ service.description }}
            </p>
            <ul v-if="service.features && service.features.length" class="check-list">
              <li v-for="(feature, featureIndex) in service.features" :key="`feature-${index}-${featureIndex}`">
                {{ feature }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section v-if="why.title" id="warum" class="section section--muted">
      <div class="container">
        <div class="section-heading">
          <p v-if="why.eyebrow" class="section-eyebrow">
            {{ why.eyebrow }}
          </p>
          <h2 class="section-title">
            {{ why.title }}
          </h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="(item, index) in whyCards"
            :key="`why-${index}`"
            class="card why-card"
          >
            <p class="why-card__title">
              {{ item.title }}
            </p>
            <p class="why-card__text">
              {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="process.title" id="ablauf" class="section">
      <div class="container">
        <div class="section-heading">
          <p v-if="process.eyebrow" class="section-eyebrow">
            {{ process.eyebrow }}
          </p>
          <h2 class="section-title">
            {{ process.title }}
          </h2>
        </div>
        <ol class="process-list">
          <li
            v-for="(step, index) in processSteps"
            :key="`step-${index}`"
            class="card process-card"
          >
            <span class="process-card__number">
              {{ formatStepNumber(index) }}
            </span>
            <div>
              <p class="process-card__title">
                {{ step.title }}
              </p>
              <p class="process-card__text">
                {{ step.body }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section v-if="filterConfig.title" id="filter" class="section section--muted">
      <div class="container">
        <div class="section-heading">
          <p v-if="filterConfig.eyebrow" class="section-eyebrow">
            {{ filterConfig.eyebrow }}
          </p>
          <h2 class="section-title">
            {{ filterConfig.title }}
          </h2>
          <p v-if="filterConfig.lead" class="section-lead">
            {{ filterConfig.lead }}
          </p>
        </div>
        <div class="filter-grid">
          <div class="card filter-card">
            <h3 class="filter-card__title text-green-600">
              {{ filterConfig.suitableTitle }}
            </h3>
            <ul class="check-list">
              <li v-for="(item, index) in suitableList" :key="`suitable-${index}`">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="card filter-card">
            <h3 class="filter-card__title text-red-600">
              {{ filterConfig.notSuitableTitle }}
            </h3>
            <ul class="check-list check-list--muted">
              <li v-for="(item, index) in notSuitableList" :key="`not-suitable-${index}`">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section v-if="gallerySection.title" id="galerie" class="section">
      <div class="container">
        <div class="section-heading">
          <p v-if="gallerySection.eyebrow" class="section-eyebrow">
            {{ gallerySection.eyebrow }}
          </p>
          <h2 class="section-title">
            {{ gallerySection.title }}
          </h2>
          <p v-if="gallerySection.lead" class="section-lead">
            {{ gallerySection.lead }}
          </p>
        </div>
        <Gallery />
      </div>
    </section>

    <section v-if="contact.title" id="kontakt" class="section section--dark">
      <div class="container">
        <div class="contact-card">
          <div class="contact-card__intro">
            <p v-if="contact.eyebrow" class="section-eyebrow">
              {{ contact.eyebrow }}
            </p>
            <h2 class="section-title">
              {{ contact.title }}
            </h2>
            <p v-if="contact.lead" class="section-lead contact-card__lead">
              {{ contact.lead }}
            </p>
          </div>
          <div class="contact-card__grid">
            <div>
              <h3 class="contact-card__subtitle">
                {{ contact.fieldsTitle }}
              </h3>
              <ul class="check-list">
                <li v-for="(field, index) in contactFields" :key="`field-${index}`">
                  {{ field }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="contact-card__subtitle">
                {{ contact.contactTitle }}
              </h3>
              <ul class="contact-card__details">
                <li
                  v-for="(detail, index) in contactDetails"
                  :key="`detail-${index}`"
                >
                  <template v-if="detail.href">
                    <span v-if="detail.prefix">{{ detail.prefix }} </span>
                    <a :href="detail.href">{{ detail.text }}</a>
                  </template>
                  <template v-else>
                    {{ detail.text }}
                  </template>
                </li>
              </ul>
            </div>
          </div>
          <div class="contact-card__actions">
            <a
              v-if="contact.primaryCta"
              class="btn"
              :href="contact.primaryCta.href"
            >
              {{ contact.primaryCta.text }}
            </a>
            <a
              v-if="contact.secondaryCta"
              class="btn btn--outline"
              :href="contact.secondaryCta.href"
            >
              {{ contact.secondaryCta.text }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Gallery from '~/components/Gallery.vue'

export default {
  components: {
    Gallery
  },
  props: {
    config: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    hero () {
      return this.config.hero || {}
    },
    heroBullets () {
      return this.hero.bullets || []
    },
    trust () {
      return this.config.trust || {}
    },
    trustStats () {
      return this.trust.stats || []
    },
    services () {
      return this.config.services || {}
    },
    serviceCards () {
      return this.services.cards || []
    },
    notOfferedItems () {
      return (this.services.disclaimer && this.services.disclaimer.items) || []
    },
    why () {
      return this.config.why || {}
    },
    whyCards () {
      return this.why.cards || []
    },
    process () {
      return this.config.process || {}
    },
    processSteps () {
      return this.process.steps || []
    },
    filterConfig () {
      return this.config.filter || {}
    },
    suitableList () {
      return this.filterConfig.suitableList || []
    },
    notSuitableList () {
      return this.filterConfig.notSuitableList || []
    },
    gallerySection () {
      return this.config.gallery || {}
    },
    contact () {
      return this.config.contact || {}
    },
    contactFields () {
      return this.contact.fields || []
    },
    contactDetails () {
      return this.contact.details || []
    }
  },
  methods: {
    formatStepNumber (index) {
      return (index + 1).toString().padStart(2, '0')
    }
  }
}
</script>

<style lang="scss" scoped>

.section {
  padding: 5.5rem 0;
  @media (min-width: 768px) {
    padding: 7rem 0;
  }
}
.section--muted {
  background: #f5f7fb;
}
.section--dark {
  background: linear-gradient(135deg, #050c1b, #111f35);
}
.hero {
  padding: 10rem 0 8rem;
}
.hero__content {
  max-width: 720px;
}
.hero__title {
  font-size: 3.4rem;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  color: #fff;
  text-shadow: 0 10px 30px rgba(3, 7, 18, 0.55);
  @media (min-width: 768px) {
    font-size: 4.6rem;
  }
}
.hero__lead {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 2.4rem;
}
.hero__list {
  list-style: none;
  margin: 0 0 2.4rem;
  padding: 2rem 2.4rem;
  border-radius: 16px;
  background: rgba(6, 14, 30, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
}
.hero__list-item {
  display: flex;
  align-items: flex-start;
  font-size: 1.6rem;
}
.hero__list-item + .hero__list-item {
  margin-top: 1.2rem;
}
.hero__check {
  color: #6ff3a6;
  margin-right: 1rem;
  font-size: 2.2rem;
  line-height: 1;
}
.hero__cta {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
@media (min-width: 640px) {
  .hero__cta {
    flex-direction: row;
    align-items: center;
  }
}
.hero__btn {
  margin: 0;
  max-width: 260px;
}
.hero__note {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
}
.section-heading {
  text-align: center;
  margin: 0 auto 4rem;
  max-width: 760px;
}
.section-eyebrow {
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.2em;
  font-weight: 600;
  color: #1a9cfc;
  margin-bottom: 1rem;
}
.section-eyebrow--light {
  color: rgba(255, 255, 255, 0.7);
}
.section-title {
  font-size: 2.8rem;
  line-height: 1.25;
  margin-bottom: 1.6rem;
  color: #0b1b2b;
  font-weight: 700;
  letter-spacing: -0.01em;
  @media (min-width: 768px) {
    font-size: 3.8rem;
  }
}
.section-lead {
  font-size: 1.8rem;
  color: #4a5369;
  margin: 0;
}
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.6rem;
}
.stat-card {
  padding: 2.4rem;
  text-align: center;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 25px 60px rgba(12, 25, 39, 0.08);
  font-weight: 600;
  color: #0f1b2b;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.4rem;
  margin-bottom: 3rem;
}
.card {
  border-radius: 24px;
  padding: 3rem;
  background: #fff;
  border: 1px solid rgba(12, 25, 39, 0.05);
  box-shadow: 0 25px 45px rgba(12, 25, 39, 0.08);
}
.service-card__tag {
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.2em;
  color: #1a9cfc;
  margin-bottom: 1rem;
}
.service-card__title {
  font-size: 2.4rem;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: #0b1b2b;
}
.service-card__description {
  color: #4a5369;
  margin-bottom: 1.8rem;
  line-height: 1.6;
}
.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.check-list li {
  position: relative;
  padding-left: 2.4rem;
  margin-bottom: 1rem;
  color: #2f3b54;
  line-height: 1.5;
}
.check-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 999px;
  background: #1a9cfc;
}
.check-list--muted li::before {
  background: #a7b4c7;
}
.muted-card {
  background: #edf4ff;
  box-shadow: none;
  border: none;
}
.not-offered-card {
  margin-top: 3rem;
  text-align: center;
}
.not-offered-card__title {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #0b1b2b;
}
.not-offered-card__description {
  color: #4a5369;
  margin-bottom: 1.8rem;
}
.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}
.chip {
  padding: 0.7rem 1.8rem;
  border-radius: 999px;
  background: #fff;
  font-weight: 600;
  color: #1a3353;
  border: 1px solid rgba(12, 25, 39, 0.1);
}
.why-card__title {
  font-size: 2rem;
  margin-bottom: 0.8rem;
  color: #0b1b2b;
}
.why-card__text {
  color: #4a5369;
  line-height: 1.6;
}
.process-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.5rem;
}
.process-card {
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  box-shadow: 0 20px 45px rgba(12, 25, 39, 0.07);
}
.process-card__number {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 12px;
  background: #edf4ff;
  color: #1a9cfc;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}
.process-card__title {
  font-size: 2rem;
  margin-bottom: 0.6rem;
  color: #0b1b2b;
}
.process-card__text {
  color: #4a5369;
  line-height: 1.6;
}
.filter-grid {
  display: grid;
  gap: 2rem;
}
@media (min-width: 768px) {
  .filter-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.filter-card__title {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}
.gallery-cta {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
.gallery-cta .btn {
  margin: 0;
}
.contact-card {
  background: #fff;
  border-radius: 30px;
  padding: 3.5rem;
  box-shadow: 0 40px 70px rgba(3, 7, 18, 0.45);
  color: #0b1b2b;
}
@media (min-width: 768px) {
  .contact-card {
    padding: 4.5rem;
  }
}
.contact-card__intro {
  margin-bottom: 2.5rem;
}
.contact-card__lead {
  margin-top: 0.5rem;
}
.contact-card__grid {
  display: grid;
  gap: 2.4rem;
  margin-bottom: 2.5rem;
}
@media (min-width: 768px) {
  .contact-card__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.contact-card__subtitle {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.4rem;
  color: #0b1b2b;
}
.contact-card__details {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #4a5369;
  line-height: 1.8;
}
.contact-card__details a {
  color: #1a9cfc;
  text-decoration: none;
}
.contact-card__details a:hover {
  text-decoration: underline;
}
.contact-card__actions {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
}
@media (min-width: 640px) {
  .contact-card__actions {
    flex-direction: row;
    align-items: center;
  }
}
.contact-card__actions .btn {
  margin: 0;
  max-width: none;
  width: auto;
  min-width: 230px;
}
.hero-bg {
  background-image: linear-gradient(115deg, rgba(5, 10, 22, 0.5), rgba(12, 34, 64, 0.3)),
    url('~assets/img/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
:deep(.btn) {
  height: auto;
  padding: 1.5rem 2.6rem;
  max-width: max-content;
  border-radius: 14px;
  background: linear-gradient(120deg, #2cc4ff, #1a72ff);
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0 15px 35px rgba(9, 16, 34, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
:deep(.btn:hover) {
  transform: translateY(-2px);
  box-shadow: 0 18px 35px rgba(9, 16, 34, 0.45);
}
:deep(.btn.btn--outline) {
  background: transparent;
  border: 1px solid #1a9cfc;
  color: #1a9cfc;
  box-shadow: none;
}
:deep(.btn.btn--outline:hover) {
  background: rgba(26, 156, 252, 0.12);
  box-shadow: none;
}
</style>
