<template>
    <div class="bg-primario">
        <footer class="container-footer">
            <b-row>
                <b-col class="col-6">
                    <div class="p-3 text-left">
                        <h2>+ Pastelitos</h2>
                        <ul class="lista-cake">
                            <li><a href="#!">Chocolate</a></li>
                            <li><a href="#!">Vainilla</a></li>
                            <li><a href="#!">Tres leches</a></li>
                        </ul>
                    </div>
                </b-col>
                <b-col class="col-6">
                    <div class="p-3 text-left">
                        <h2>Contacto</h2>
                        <ul class="lista-cake">
                            <li><a href="#!">Facebook</a></li>
                            <li><a href="#!">Instagram</a></li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'FooterAngeles',
}
</script>
<style>
.container-footer{
    width: 100%;
    height: auto;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
}
.lista-cake{
    list-style: none;
    margin: 0;
    padding: 0;
}
.lista-cake li a {
    color: var(--color-primario);
}
.lista-cake li a:hover{
    color: var(--color-secundario);
}
</style>