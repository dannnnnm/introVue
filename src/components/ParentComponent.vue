<script setup>
import ChildComponent from './ChildComponent.vue';
</script>
<template>
    <div class="container">
        <h1 class="text-center my-4">
            Componente padre
        </h1>

        <ChildComponent :mensaje="mensajePadre" @actualizarMensaje="mensajePadre=$event">


        </ChildComponent>

        <button class="btn btn-primary mt-3" v-on:click="resetearMensaje">
            Resetear Mensaje

        </button>

        <p v-if="mensajePadre==='Hola desde el padre'">
            El mensaje está en su estado original
        </p>
        <p v-else class="mt-3 text-warning">
            El mensaje ha sido cambiado por el hijo
        </p>

        <div class="mt-5">
            <h2>Lista de tareas</h2>
            <div v-for="(tarea,index) in tareas" :key="index" class="form-check">
                <input type="checkbox" v-model="tarea.completada" :id="'tarea.id'+index"
                class="form-check-input">

                <label :for="'tarea'+index" class="form-check-label"> {{ tarea.nombre }}</label>

                <p v-if="tarea.completada" class="text-success"> Tarea completada!</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        ChildComponent
    },
    name: "Base",
    data() {
        return {
            mensajePadre: "Hola desde el padre",
            tareas: [
                {nombre:"Tarea 1",completada:false},
                {nombre:"Tarea 2",completada:false},
                {nombre:"Tarea 3",completada:false},
            ]
        }
    },
    methods: {
        resetearMensaje(){
            this.mensajePadre="Hola desde el padre";
        }
    }
}

</script>