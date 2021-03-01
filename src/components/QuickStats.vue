<template>
  <div class="stats-wrapper" >
    <div class="stats-container">
      <ul class="stats__list">
        <li class="stats__list-item">
          <div class="icon-circle"><light-bulb /></div>
          <div class="stats__list-text">More than 10 year of experice</div>
        </li>
        <li class="stats__list-item">
          <div class="icon-circle"><the-helmet /></div>
          <div class="stats__list-text">500+ products in our e-shop</div>
        </li>
        <li class="stats__list-item">
          <div class="icon-circle"><loader-icon /></div>
          <div class="stats__list-text">Dozens of finished projects</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import lightBulb from "./LightBulb";
import TheHelmet from "./TheHelmet";
import LoaderIcon from "./LoaderIcon";
export default {
  components: {
    lightBulb,
    TheHelmet,
    LoaderIcon,
  },
};
</script>

<style lang="scss">
@import "../styles/QuickStats.scss";
</style>
