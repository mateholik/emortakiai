<template>
  <div>
    <CoolLightBox :items="pictures" :index="index" @close="index = null" />

    <div class="flex-wrap w-full mt-10 md:flex md:-mx-6">
      <div
        v-for="(image, i) in pictures"
        :key="i"
        class="pb-10 md:w-1/2 md:px-6"
      >
        <img
          :src="image"
          alt="image"
          class="block w-full h-full cursor-pointer"
          @click="index = i"
        />
      </div>
    </div>
  </div>
</template>

<script>
import work1 from "./../assets/img/works/work1.jpg";
import work2 from "./../assets/img/works/work2.jpg";
import work3 from "./../assets/img/works/work3.jpg";
import work4 from "./../assets/img/works/work4.jpg";
import work5 from "./../assets/img/works/work5.jpg";
import work6 from "./../assets/img/works/work6.jpg";
import work7 from "./../assets/img/works/work7.jpg";
import work8 from "./../assets/img/works/work8.jpg";
import work9 from "./../assets/img/works/work9.jpg";
import work10 from "./../assets/img/works/work10.jpg";
import work11 from "./../assets/img/works/work11.jpg";
import work12 from "./../assets/img/works/work12.jpg";
import work13 from "./../assets/img/works/work13.jpeg";
import work14 from "./../assets/img/works/work14.jpeg";
import work15 from "./../assets/img/works/work15.jpeg";
import work16 from "./../assets/img/works/work16.jpeg";
import work17 from "./../assets/img/works/work17.jpeg";
import work18 from "./../assets/img/works/work18.jpeg";
import work19 from "./../assets/img/works/work19.jpeg";

export default {
  props: {
    where: {
      type: String,
      default: ""
    },
    paveiksliukai: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      index: null,
      pictures: []
    };
  },
  mounted() {
    if (this.where === "homepage") {
      this.pictures = [work1, work2];
    } else if (this.paveiksliukai.length > 0) {
      this.pictures = this.paveiksliukai;
    } else {
      this.pictures = [
        work1,
        work2,
        work3,
        work4,
        work5,
        work6,
        work7,
        work8,
        work9,
        work10,
        work11,
        work12,
        work13,
        work14,
        work15,
        work16,
        work17,
        work18,
        work19
      ];
    }
  }
};
</script>

<style lang="scss">
.image {
  cursor: pointer;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100%;
}
.cool-lightbox {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  transition: all 0.3s ease;
}
.cool-lightbox .cool-lightbox-thumbs {
  position: absolute;
  height: 100vh;
  overflow-y: auto;
  width: 102px;
  right: -102px;
  top: 0;
  overflow-x: hidden;
  transition: none;
  background-color: #ddd;
  scrollbar-width: thin;
  scrollbar-color: #fa4242 rgba(175, 175, 175, 0.9);
}
@media (min-width: 767px) {
  .cool-lightbox .cool-lightbox-thumbs {
    transition: all 0.3s ease;
  }
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb {
  background: #fa4242;
  border: 0 none #fff;
  border-radius: 50px;
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:hover {
  background: #fff;
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:active {
  background: #000;
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track {
  background: #e1e1e1;
  border: 0 none #fff;
  border-radius: 8px;
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:hover {
  background: #666;
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:active {
  background: #333;
}
.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-corner {
  background: 0 0;
}
@media (min-width: 767px) {
  .cool-lightbox .cool-lightbox-thumbs {
    width: 212px;
    right: -212px;
  }
}
.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list {
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
  padding-right: 0;
}
.cool-lightbox
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb {
  background-color: #000;
  width: 100%;
  margin-right: 2px;
  margin-bottom: 2px;
  display: block;
  height: 75px;
  position: relative;
}
@media (min-width: 767px) {
  .cool-lightbox
    .cool-lightbox-thumbs
    .cool-lightbox-thumbs__list
    .cool-lightbox__thumb {
    width: calc(100% / 2 - 2px);
  }
}
.cool-lightbox
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  content: "";
  z-index: 150;
  transition: all 0.3s ease;
  position: absolute;
  visibility: hidden;
  border: 3px solid #fa4242;
}
.cool-lightbox
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cool-lightbox
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb.is-video
  .cool-lightbox__thumb__icon {
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  transform: translate(-50%, -50%);
}
.cool-lightbox
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb.is-video
  .cool-lightbox__thumb__icon
  path {
  fill: #fff;
}
.cool-lightbox
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb.is-video:after {
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
}
.cool-lightbox
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb.active:before,
.cool-lightbox
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb:hover:before {
  opacity: 1;
  visibility: visible;
}
.cool-lightbox .cool-lightbox__inner {
  padding: 60px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  transition: none;
}
@media (min-width: 767px) {
  .cool-lightbox .cool-lightbox__inner {
    transition: all 0.3s ease;
  }
}
.cool-lightbox .cool-lightbox__progressbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 500;
  transform-origin: 0;
  transform: scaleX(0);
  transition: transform 3s linear;
  display: block;
}
.cool-lightbox.cool-lightbox--is-swipping {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
.cool-lightbox.cool-lightbox--is-swipping iframe {
  pointer-events: none;
}
.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide {
  transition: none;
}
.cool-lightbox.cool-lightbox--is-swipping
  .cool-lightbox__slide.cool-lightbox__slide--hide {
  display: flex;
  z-index: 50;
}
.cool-lightbox.cool-lightbox--can-zoom .cool-lightbox__slide img {
  cursor: zoom-in;
}
.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox__slide img {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox-caption {
  opacity: 0;
}
.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs
  .cool-lightbox__inner {
  right: 102px;
}
@media (min-width: 767px) {
  .cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs
    .cool-lightbox__inner {
    right: 212px;
  }
}
.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs
  .cool-lightbox-thumbs {
  right: 0;
}
.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs {
  width: 100%;
  left: 0;
  right: 0;
  top: auto;
  height: 70px;
  bottom: -70px;
  overflow: auto;
}
@media (min-width: 767px) {
  .cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs {
    bottom: -79px;
    height: 79px;
  }
}
.cool-lightbox.cool-lightbox--thumbs-bottom
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list {
  width: 100%;
  flex-wrap: nowrap;
  justify-content: center;
}
.cool-lightbox.cool-lightbox--thumbs-bottom
  .cool-lightbox-thumbs
  .cool-lightbox-thumbs__list
  .cool-lightbox__thumb {
  width: 100px;
  flex-shrink: 0;
  margin-bottom: 0;
  height: 65px;
}
@media (min-width: 767px) {
  .cool-lightbox.cool-lightbox--thumbs-bottom
    .cool-lightbox-thumbs
    .cool-lightbox-thumbs__list
    .cool-lightbox__thumb {
    height: 75px;
  }
}
.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs
  .cool-lightbox__inner {
  bottom: 70px;
}
@media (min-width: 767px) {
  .cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs
    .cool-lightbox__inner {
    bottom: 79px;
  }
}
.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs
  .cool-lightbox-thumbs {
  bottom: 0;
}
.cool-lightbox * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.cool-lightbox button {
  background: 0 0;
  border: none;
  cursor: pointer;
  outline: 0;
}
.cool-lightbox svg path,
.cool-lightbox svg rect {
  fill: currentColor;
}
.cool-lightbox .cool-lightbox-button {
  padding: 21px 16px 21px 4px;
  height: 100px;
  opacity: 1;
  z-index: 800;
  color: #ccc;
  transition: all 0.3s ease;
  position: absolute;
  top: calc(50% - 50px);
  width: 54px;
  transition: all 0.3s ease;
  visibility: visible;
}
@media (min-width: 767px) {
  .cool-lightbox .cool-lightbox-button {
    width: 70px;
    padding: 31px 26px 31px 6px;
  }
}
.cool-lightbox .cool-lightbox-button.hidden {
  opacity: 0;
  visibility: hidden;
}
.cool-lightbox .cool-lightbox-button:hover {
  color: #fff;
}
.cool-lightbox .cool-lightbox-button > .cool-lightbox-button__icon {
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(30, 30, 30, 0.6);
}
.cool-lightbox .cool-lightbox-button > .cool-lightbox-button__icon > svg {
  width: 100%;
  height: 100%;
}
.cool-lightbox .cool-lightbox-button.cool-lightbox-button--prev {
  left: 0;
}
.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next {
  right: 0;
  padding: 21px 4px 21px 16px;
}
@media (min-width: 767px) {
  .cool-lightbox .cool-lightbox-button.cool-lightbox-button--next {
    padding: 31px 6px 31px 26px;
  }
}
.cool-lightbox .cool-lightbox__iframe {
  width: 100%;
  display: flex;
  top: 50%;
  left: 50%;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
}
.cool-lightbox .cool-lightbox__iframe iframe {
  width: 100%;
  height: 100%;
}
@media (min-width: 767px) {
  .cool-lightbox .cool-lightbox__iframe iframe {
    max-width: 80vw;
    max-height: 80vh;
  }
}
.cool-lightbox .cool-lightbox__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe {
  display: flex;
  align-items: center;
}
.cool-lightbox
  .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe
  .cool-lightbox__slide {
  flex-shrink: 0;
  display: flex;
  position: relative;
  height: 100%;
  opacity: 0.4;
  transition: opacity 0.3s linear;
}
.cool-lightbox
  .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe
  .cool-lightbox__slide.cool-lightbox__slide--current {
  opacity: 1;
}
.cool-lightbox .cool-lightbox__slide {
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: none;
  position: absolute;
  margin-right: 30px;
  transition: transform 0.3s ease;
}
.cool-lightbox .cool-lightbox__slide:last-of-type {
  margin-right: 0;
}
.cool-lightbox .cool-lightbox__slide.cool-lightbox__slide--current {
  display: flex;
}
.cool-lightbox .cool-lightbox__slide .cool-lightbox__slide__img {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
  transition: all 0.3s ease;
  display: flex;
}
.cool-lightbox .cool-lightbox__slide img {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  z-index: 9999;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.45);
}
.cool-lightbox-toolbar {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
  display: flex;
  transition: all 0.3s ease;
  visibility: visible;
}
.cool-lightbox-toolbar.hidden {
  opacity: 0;
  visibility: hidden;
}
.cool-lightbox-toolbar .cool-lightbox-toolbar__btn {
  background: rgba(30, 30, 30, 0.6);
  border: 0;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  margin: 0;
  padding: 9px;
  position: relative;
  transition: color 0.2s;
  vertical-align: top;
  visibility: inherit;
  width: 40px;
  height: 40px;
  color: #ccc;
}
@media (min-width: 767px) {
  .cool-lightbox-toolbar .cool-lightbox-toolbar__btn {
    width: 44px;
    height: 44px;
    padding: 10px;
  }
}
.cool-lightbox-toolbar .cool-lightbox-toolbar__btn > svg {
  width: 100%;
  height: 100%;
}
.cool-lightbox-toolbar .cool-lightbox-toolbar__btn:hover {
  color: #fff;
}
.cool-lightbox-caption {
  bottom: 0;
  color: #eee;
  font-size: 14px;
  font-weight: 400;
  left: 0;
  opacity: 1;
  line-height: 1.5;
  padding: 18px 28px 16px 24px;
  right: 0;
  text-align: center;
  direction: ltr;
  position: absolute;
  transition: opacity 0.25s ease, visibility 0s ease 0.25s;
  z-index: 99997;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.15) 65%,
    rgba(0, 0, 0, 0.075) 75.5%,
    rgba(0, 0, 0, 0.037) 82.85%,
    rgba(0, 0, 0, 0.019) 88%,
    transparent
  );
}
@media (min-width: 767px) {
  .cool-lightbox-caption {
    padding: 22px 30px 23px 30px;
  }
}
.cool-lightbox-caption a {
  color: #eee;
  text-decoration: underline;
}
.cool-lightbox-caption h6 {
  font-size: 14px;
  margin: 0 0 6px 0;
  line-height: 130%;
}
@media (min-width: 767px) {
  .cool-lightbox-caption h6 {
    font-size: 16px;
    margin: 0 0 6px 0;
  }
}
.cool-lightbox-caption p {
  font-size: 13px;
  line-height: 130%;
  color: #ccc;
}
@media (min-width: 767px) {
  .cool-lightbox-caption p {
    font-size: 15px;
  }
}
.cool-lightbox-caption p a {
  color: #ccc;
}
.cool-lightbox-caption p a:hover {
  color: #eee;
}
.cool-lightbox-modal-enter-active,
.cool-lightbox-modal-leave-active {
  transition: opacity 0.35s;
}
.cool-lightbox-modal-enter,
.cool-lightbox-modal-leave-to {
  opacity: 0;
}
.cool-lightbox-slide-change-enter-active,
.cool-lightbox-slide-change-leave-active {
  transition: opacity 0.27s;
}
.cool-lightbox-slide-change-enter,
.cool-lightbox-slide-change-leave-to {
  opacity: 0;
}
.cool-lightbox-loading-wrapper {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
.cool-lightbox-loading-wrapper .cool-lightbox-loading {
  animation: cool-lightbox-rotate 1s linear infinite;
  background: 0 0;
  border: 4px solid #888;
  border-bottom-color: #fff;
  border-radius: 50%;
  height: 50px;
  opacity: 0.7;
  padding: 0;
  width: 50px;
  z-index: 500;
}
@keyframes cool-lightbox-rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
