<script setup>
import ChildComponent from './ChildComponent.vue';
import {useAppStore} from "../stores/index.js";
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

        <h2 v-if="mensaje"> {{ mensaje }} </h2>
        <!--<h3>{{ appStore.dato }}</h3>-->
        <div class="mt-5">
            <h2>Lista de tareas</h2>
            
            <div v-for="(tarea,index) in tareas" :key="index" class="form-check">
                <input type="checkbox" v-model="tarea.completada" :id="'tarea.id'+index"
                class="form-check-input" @change="actualizarTarea(index)">

                <label :for="'tarea'+index" class="form-check-label" :class="{crossed: tarea.completada}"> {{ tarea.nombre }}</label>

                <p v-if="tarea.completada" class="text-success"> Tarea completada!</p>

            </div>
        </div>
    </div>
</template>

<script>
let appStore;
export default {
    components:{
        ChildComponent
    },
    name: "Base",
    data() {
        return {
            mensajePadre: "Hola desde el padre",
            tareas: [
                
            ],
            mensaje:'',
        }
    },
    methods: {
        resetearMensaje(){
            this.mensajePadre="Hola desde el padre";
        },
        obtenerMensaje() {
            fetch('http://localhost:3000/hello')
            .then(response => response.text())
            .then(data => {
                this.mensaje = data;
            });
        },

        actualizarTarea(index) {
            fetch('http://localhost:3000/tareas', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                index: index,
                completada: this.tareas[index].completada
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(`Tarea ${index} actualizada:
                ${data.completada}`);
            });
        },
        fetchTareas() {
            fetch('http://localhost:3000/tareas')
            .then(response => response.json())
            .then(data => {
                this.tareas = data;
            }); 
        }

    },
    created(){
        this.obtenerMensaje();
        this.fetchTareas();
        

    },
    mounted(){
        appStore=useAppStore();
    }
    
}

</script>

<style scoped>
.crossed{
    text-decoration: line-through;
}
</style>