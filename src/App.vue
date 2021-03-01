<template>
  <div>
    <nav-bar />
    <first-section />
    <second-section />
    <quick-stats />
    <third-section />
    <map-section />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import FirstSection from "./components/FirstSection";
import SecondSection from './components/SecondSection';
import QuickStats from "./components/QuickStats";
import ThirdSection from './components/ThirdSection';
import MapSection from "./components/MapSection";

export default {
  components: {
    NavBar,
    FirstSection,
    SecondSection,
    QuickStats,
    ThirdSection,
    MapSection
  },
};
</script>

    ThirdSection