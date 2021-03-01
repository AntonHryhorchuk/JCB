<template>
  <div id="map" class="map__wrapper">
    <iframe
      class="map-holder"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.6933543363634!2d30.45817729902315!3d50.48405216181452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdbfd8daf853%3A0xeffc3d1e9a451e66!2z0J_QtdGC0YDQvtC_0LDQstC70L7QstGB0LrQsNGPINGD0LvQuNGG0LAgNTQt0JAsINCy0YPQu9C40YbRjyDQn9C10YLRgNC-0L_QsNCy0LvRltCy0YHRjNC60LAsIDU00LAsINCa0LjRl9CyLCAwNDA4Ng!5e0!3m2!1sru!2sua!4v1614588708018!5m2!1sru!2sua"
      width="1920"
      height="1080"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <div class="map__contacts" data-aos="fade-down">
      <ul class="map__contacts-list">
        <li class="map__contacts-item">
          <div class="map__contacts-icon">
            <div class="circle circle-top map-circle">
              <engineer-icon-yellow />
            </div>
          </div>
          <div class="map__contacts-description">Contact</div>
        </li>
        <li class="map__contacts-item">
          <div class="map__contacts-icon"><telephone-icon /></div>
          <a class="map__contacts-description" href='tel:+380444672601'>(044) 467-26-01 (03)</a>
        </li>
        <li class="map__contacts-item">
          <div class="map__contacts-icon"><marker-icon /></div>
          <div class="map__contacts-description">
            Kiev City, st. Petropavlovskaya, 54 a
          </div>
        </li>
        <li class="map__contacts-item">
          <div class="map__contacts-icon"><icon-mail /></div>
          <div class="map__contacts-description">service@compressors.ua</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EngineerIconYellow from "./EngineerIconYellow";
import TelephoneIcon from "./TelephonIcon";
import MarkerIcon from "./MarkerIcon";
import IconMail from "./IconMail";
export default {
  components: {
    EngineerIconYellow,
    TelephoneIcon,
    MarkerIcon,
    IconMail,
  },
};
</script>
<style lang="scss">
@import "../styles/MapSection.scss";
</style>
