<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" class="nav-pink" fixed="top">
        <b-navbar-brand :to="'/'"><img height="auto" width="50" src="./assets/logo.png" alt=""></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="'/about'">Nosotros</b-nav-item>
            <b-nav-item :to="'/cakes'">Pasteles</b-nav-item>
            <b-nav-item :to="'/pedido'">Pedido</b-nav-item>
            <b-nav-item :to="'/contacto'">Contacto</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div :style="{marginTop: '70px'}">
      <router-view/>
    </div>
    <FooterAngeles/>
  </div>
</template>
<script>
import FooterAngeles from './components/global/Footer.vue'
export default {
  components: {
    FooterAngeles
  }
}
</script>
<style>
.bg-primario{
  background: #D38399;
}
.bg-secundario{
  background: #DDA6B6;
}
.nav-pink{
  background: rgb(235, 141, 196) !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
