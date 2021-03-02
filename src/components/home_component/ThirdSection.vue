<template>
  <div id="third" class="info">
    <div
      class="info-wrapper-top"
      data-aos="fade-right"
      data-aos-duration="2500"
    >
      <div class="circle circle-top"><engineer-icon /></div>
      <div class="text-start">
        <h3 class="text-header">About Us</h3>
        <p class="text-p">
          Compressors International is the official dealer of JCB generators on
          the territory of Ukraine. We offer a full range of services - from
          choosing a generator to warranty and post-warranty service. Our
          regional offices and service centers are located in 5 major cities of
          Ukraine, thus covering the entire territory of the country. Our highly
          qualified specialists will help you choose a diesel generator
          according to your requirements, carry out the commissioning of the
          generator, as well as perform service at a professional level.
        </p>
      </div>
    </div>
    <div class="info-wrapper-bottom info-wrapper-bottom-third" data-aos="fade-left">
      <div class="circle circle-bottom"><gallery-icon /></div>
      <div class="text-end gallery-end" >
        <h3 class="text-header">Gallery</h3>
        <a-carousel
          class="gallery-slider"
          :after-change="onChange"
          :slidesToShow="3"
        >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </a-carousel>
      </div>
    </div>
    <div class="info-wrapper-button">
      <button class="button-gallery">full gallery</button>
    </div>
  </div>
</template>

<script>
import EngineerIcon from "./EngineerIcon";
import GalleryIcon from "./GalleryIcon";

export default {
  components: {
    EngineerIcon,
    GalleryIcon,
  },
};
</script>

<style lang="scss" scope>
@import "../../styles/ThirdSection.scss";
</style>
