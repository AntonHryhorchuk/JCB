<template>
  <div class="wrapper">
    <a-carousel
      dot-position="right"
      effect="fade"
      autoplay
      :autoplaySpeed="6000"
    >
      <div class="wrapper__image">
        <img
          class="wrapper__image-img"
          src="../assets/jcb-slider1.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div class="wrapper__image">
        <div class="wrapper__text">
          <div class="wrapper__text-header">Workplace Safety</div>
          <div class="wrapper__text-text">
            Safety of work is very important for us.
          </div>
        </div>
        <img
          class="wrapper__image-img"
          src="../assets/jcb-slider2.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div class="wrapper__image">
        <div class="wrapper__text">
          <div class="wrapper__text-header">Original spare parts</div>
          <div class="wrapper__text-text">Warranty of reliability</div>
        </div>
        <img
          class="wrapper__image-img"
          src="../assets/jcb-slider3.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div class="wrapper__image">
        <div class="wrapper__text">
          <div class="wrapper__text-header">qualified personnel</div>
          <div class="wrapper__text-text">Fast and high quality service</div>
        </div>
        <img
          class="wrapper__image-img"
          src="../assets/jcb-slider4.jpg"
          alt=""
          srcset=""
        />
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/FirstSection.scss";
</style>
