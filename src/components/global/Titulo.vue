<template>
    <h1 class="text-left color-primario">{{ titulo }}</h1>
</template>
<script>
export default {
    name: 'Titulo',
    props: {
        titulo: String
    }
}
</script>