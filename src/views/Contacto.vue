<template> 
    <div class="container p-3">
        <div class="row mt-5">
            <div class="col-sm-12">
                <Titulo titulo="Contacto"></Titulo>
            </div>
            <div class="col-sm-6">
                <img src="" alt="" />
            </div>
            <div class="col-sm-6 p-5">
                <FormContacto />
            </div>
        </div>
    </div>
</template>
<script>
import FormContacto from "@/components/FormContacto"
import Titulo from "@/components/global/Titulo"
export default {
    components: {
        Titulo,
        FormContacto
    }
}
</script>