<template>
  <div class="container p-3">
      <b-row :class="'mt-5'">
        <div class="col-lg-12">
          <Titulo titulo="Manifiesto" />
        </div>
        <div class="col-lg-12 text-left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, non magnam fuga beatae minus vero molestias quis eveniet quas? Sint quod maxime voluptas qui blanditiis quam esse porro nulla quis.</p>
        </div>
        <div class="col-lg-12 ">
          <img src="@/assets/cake.gif" alt="">
        </div>
      </b-row>
   </div>
</template>
<script>
import Titulo from "@/components/global/Titulo.vue"
export default {
  name: 'About',
  components: {
    Titulo
  }
}
</script>