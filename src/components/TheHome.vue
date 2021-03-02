<template>
  <div class="app">
    <login-button />
    <a-back-top />
    <nav-bar />
    <first-section />
    <second-section />
    <quick-stats />
    <third-section />
    <map-section />
    <the-footer />
   
  </div>
</template>

<script>
import NavBar from "./home_component/NavBar";
import FirstSection from "./home_component/FirstSection";
import SecondSection from './home_component/SecondSection';
import QuickStats from "./home_component/QuickStats";
import ThirdSection from './home_component/ThirdSection';
import MapSection from "./home_component/MapSection";
import TheFooter from './home_component/TheFooter';
import LoginButton from "./home_component/LoginButton"

export default {
  components: {
    NavBar,
    FirstSection,
    SecondSection,
    QuickStats,
    ThirdSection,
    MapSection,
    TheFooter,
    LoginButton
  },
};
</script>

<style lang="scss" scoped>
.app{
  position: relative;
  max-width: 100vw;
}
</style>