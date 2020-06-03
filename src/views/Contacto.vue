<template> 
    <div class="row">
        <div class="col-sm-12">
            <Title titulo="Contacto"></Title>
        </div>
        <div class="col-sm-6">
            <img src="" alt="" />
        </div>
        <div class="col-sm-6 p-5">
            <FormContacto />
        </div>
    </div>
</template>
<script>
import FormContacto from "@/components/FormContacto"
import Title from "@/components/global/Title"
export default {
    components: {
        Title,
        FormContacto
    }
}
</script>