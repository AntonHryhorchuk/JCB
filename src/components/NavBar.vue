<template>
  <div class="container">
    <div class="nav">
      <div class="nav__logo">
        <div class="nav__logo--top">
        <img class="nav__logo--top-img" src="../assets/logo.gif" alt="" srcset="">
        </div>
        <div class="nav__logo--bottom">
        <img class="nav__logo--bottom-img" src="../assets/jcb-logo.png" alt="" srcset="">
        </div>
      </div>
      <ul class="nav__list">
          <li class="nav__list-item">Home</li>
          <li class="nav__list-item">Service</li>
          <li class="nav__list-item">About us</li>
          <li class="nav__list-item">Contacts</li>
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


</script>

<style lang="scss" scoped>
@import "../styles/NavBar.scss"
</style>
