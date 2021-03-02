<template>
  <div class="container">
    <div class="nav" :class="{change_color: scrollPosition > 50}">
      <div class="nav__logo">
        <div class="nav__logo--top">
        <img class="nav__logo--top-img" src="../../assets/logo.gif" alt="" srcset="">
        </div>
        <div class="nav__logo--bottom">
        <img class="nav__logo--bottom-img" src="../../assets/jcb-logo.png" alt="" srcset="">
        </div>
      </div>
      <ul class="nav__list">
          <li class="nav__list-item" v-scroll-to="'#home'">Home</li>
          <li class="nav__list-item" v-scroll-to="'#service'">Service</li>
          <li class="nav__list-item" v-scroll-to="'#third'">About us</li>
          <li class="nav__list-item" v-scroll-to="'#map'">Contacts</li>
        </ul>        
      <div class="nav__lang">
        <a-radio-group default-value="a" button-style="solid">
        <a-radio-button value="a">
          RU
        </a-radio-button>
        <a-radio-button value="b">
          UA
        </a-radio-button>
        <a-radio-button value="c">
          ENG
        </a-radio-button>        
      </a-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default{
data () {
  return{
    scrollPosition: null
  };
},
methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
},
mounted() {
    window.addEventListener('scroll', this.updateScroll);
},
}
</script>

<style lang="scss" scoped>
@import "../../styles/NavBar.scss";
.change_color {
      opacity: .7;
      transition: all .7s ease;
   }
</style>
