<template>
    <div>
        <alert></alert>
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
                        <textarea class="form-control" :style="{height: '150px'}" placeholder="Mensaje" v-model="Mensaje.mensaje"></textarea>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-9">
                    <b-button class="btn btn-block btn-primary"  type="submit">Enviar</b-button>
                </div>
            </div>
        </form>
        <div v-for="(item, index) in Mensajes" :key="index">
            <h1>{{console.log(item)}}</h1>
        </div>
    </div>
</template>
<script>
import Alert from "./global/Alert";
export default {
    name: 'FormContacto',
    components: {
        "alert":Alert
    }, 
    data() {
        return {
            Mensajes: [{}]
        }
    },
    methods:{
        enviar(Mensaje) {
            this.Mensajes.push(Mensaje)
            console.log(Mensaje);
            //this.showAlert()
            //this.mensaje.color = 'success'
            //this.mensaje.text = 'Hola'
        }
    }
}
</script>