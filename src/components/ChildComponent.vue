<template>
    <div class="card mt-3">
        <div class="card-body">
            <h5 class="card-title">
                Componente hijo
            </h5>

            <p class="card-text">{{ mensaje }}</p>

            <button class="btn-success btn" v-on:click="emitirEvento">
                Cambiar Mensaje
            </button>

            <p v-show="mensajeCambiado">El mensaje ha cambiado</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Hijo",
        props: ["mensaje"],
        data(){
            return {mensajeCambiado: false};
        },
        methods: {
            emitirEvento(){
                this.mensajeCambiado=true;
                this.$emit("actualizarMensaje","Mensaje del hijo");
            }
        }
    }
</script>