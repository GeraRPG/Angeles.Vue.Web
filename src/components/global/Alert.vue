<template>
    <div>
        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown = 0"
            @dismissed-count-down="countDownChanged"
        >
        {{mensaje.text}}
        </b-alert>
    </div>
</template>
<script>
export default {
    name: 'Alert',
    data(){
        return { 
            mensaje: {color:'success', text: 'Hola'},
            dismissSecs: 5,
            dismissCountDown: 0
        };
    },
    methods: {
        countDownChanged(dismissCountDown){
            this.dismissCountDown = dismissCountDown
        },
        showAlert(){
            this.dismissCountDown = this.dismissSecs
        }
    }
}
</script>