

<template>
    <div>
        <h1>{{ titulo }}</h1>
        <button @click="incrementar">Incrementar</button>
        <br>
        <br>
        <button @click="restar">Restar</button>
        <p>Contador: {{ contador }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';



    const titulo="Componente con setup"
    const contador=ref(0)

    function incrementar() {
        contador.value++
    }

    function restar(){
        contador.value--
    }

</script>

<style scoped>
    h1{
        color: blue;

    }
    p{
        color: green;
    }
</style>