<template>
    <div>
        <h1>Cake´s</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cakes: [],
        };
    },
    created(){
        this.listaCakes();
    },
    methods: {
        listaCakes(){
            this.axios.get('cakes')
            .then((resposne) => {
                this.cakes = resposne.data;
            })
            .catch((e) => {
                console.log('Error' + e);
            })
        },
        obtenerCakes(){
        
        }
    }
}
</script>