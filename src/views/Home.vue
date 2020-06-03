<template>
  <div class="home" :class="'mt-5'">
    <Carrucel></Carrucel>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <GaleriaCard></GaleriaCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Alert from '@/components/global/Alert.vue'
import Carrucel from '@/components/home/Carrucel'
import GaleriaCard from '@/components/home/GaleriaCard.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Alert,
    Carrucel,
    GaleriaCard
  }
}
</script>
