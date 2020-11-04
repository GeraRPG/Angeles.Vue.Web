<template>
    <div>
      <b-navbar toggleable="lg" type="dark" class="bg-primario" fixed="top">
        <b-navbar-brand :to="'/'"><img height="auto" width="50" src="@/assets/cake.gif" alt=""></b-navbar-brand>

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
              <b-form-input size="sm" class="mr-sm-2" placeholder="Pasteleitos"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0 bg-secundario" type="submit">Buscar</b-button>
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
</template>
<script>
export default {
    name: 'Navbar'
}
</script>