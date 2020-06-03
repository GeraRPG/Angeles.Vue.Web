<template>
    <div>
        <Alert></Alert>
        <form @submit.prevent="enviar(Mensaje)">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group">
                        <input class="form-control" placeholder="Nombre" type="text" v-model="Mensaje.nombre">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group">
                        <input class="form-control" placeholder="Telefono" type="text" v-model="Mensaje.telefono">
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <input class="form-control" placeholder="Correo" type="text" v-model="Mensaje.correo">
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Descripcion" v-model="Mensaje.mensaje"></textarea>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-9">
                    <b-button class="btn btn-block btn-primary" type="submit">Enviar</b-button>
                </div>
            </div>
        </form>
        <div v-for="(item, index) in Mensaje" :key="index">
            <h1>{{item.nombre}}</h1>
        </div>
    </div>
</template>
<script>
import Alert from "./global/Alert"
export default {
    name: 'FormContacto',
    components: {
        Alert
    },
    data() {
        return {
            Mensaje: {}
        }
    },
    methods:{
        enviar(item) {
            console.log(item)
            console.log("Nombre")
            //this.showAlert()
            //this.mensaje.color = 'success'
            //this.mensaje.text = 'Hola'
        }
    }
}
</script>