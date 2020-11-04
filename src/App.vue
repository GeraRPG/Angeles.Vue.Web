<template>
  <div id="app">
    <div>
      <Navbar /> 
    </div>
    <div :style="{marginTop: '70px'}">
      <router-view/>
    </div>
    <FooterAngeles/>
  </div>
</template>
<script>
import FooterAngeles from './components/global/Footer.vue'
import Navbar from '@/components/global/Navbar.vue'
export default {
  components: {
    FooterAngeles,
    Navbar
  }
}
</script>
<style>
:root{
  --bg-color: #f8d2d2;
  --bg-secundario: #7183b7;
  --color-primario: #9197a3;
  --color-secundario: #8aabde;
}
.bg-primario{
  background: var(--bg-color);
}
.nav-pink{
  background: rgb(235, 141, 196) !important;
}
.color-primario{
  color: #DDA6B6;
}
.bg-secundario{
  background: var(--bg-secundario) !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::selection{
    background: var(--bg-secundario) !important;
    color: #ffffff !important;
}
.nav-link {
  color: var(--color-primario) !important;
}
.nav-link:hover{
  color: var(--color-secundario) !important;
}
</style>
