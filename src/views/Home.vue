<template>
  <div class="home" :class="'mt-5'">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Nombre del poder"/>
    <Alert></Alert>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Alert from '@/components/global/Alert.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Alert
  }
}
</script>
