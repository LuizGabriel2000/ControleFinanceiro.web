<template>
    <v-card color="rgb(0 0 0 / 9%)" class="px-4 py-2">
        <h2 class="branco">{{dados.titulo}}</h2>
        <v-simple-table
            dark
            fixed-header
            height="450px"
        >
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Nome
                </th>
                <th class="text-left">
                    Valor
                </th>
                 <th class="text-left">
                    data 
                </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in lista" :key="item">
                    <td>{{item.nome}}</td>
                    <td>{{item.valor}}</td>
                    <td>{{item.data | formatDate}}</td> 
                    <v-icon @click="EditarReceita(item)"  class="my-3 ma-2" color="primary">mdi-wrench</v-icon> 
                    <v-icon @click="ExcluirReceita(item)" color="red">mdi-close</v-icon>
                </tr>
                   
            </tbody>
             </template>
        </v-simple-table>
        
        <v-divider></v-divider>
        <div class="d-flex mt-2">
            <strong class="branco">Total:</strong>
            <v-spacer></v-spacer>
            <strong @click="Valor(item)" class="branco">R${{lista.reduce((total, item) => total + item.valor, 0)}}</strong>
        </div>

       
    </v-card>
</template>

<script>
export default {
    props: {
        Valor: Function,
        ExcluirReceita: Function,
        EditarReceita: Function,
        dados: Object,
        lista: Array
    },
    data () {
      return {
      }
    },

}
</script>

<style>
.branco {
    color: #fff;
}
</style>