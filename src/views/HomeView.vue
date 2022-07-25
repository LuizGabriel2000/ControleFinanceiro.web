<template>
  <v-container>
    <v-row>
        <v-col class="d-flex" cols="12">
            <h1 class="branco ml-2">Extrato financeiro</h1>
            <v-spacer></v-spacer>
            <v-btn class="mx-2" outlined color="primary" depressed @click="showCadastro(true)">Cadastrar receita</v-btn>
            <v-btn class="mx-2" color="primary" depressed @click="showCadastro(true)">Cadastrar despesa</v-btn>
        </v-col>

        <v-col class="px-5" cols="12" sm="12" md="6">
            <ListaFinanceiro :dados="receita"/>
        </v-col>

        <v-col class="px-5" cols="12" sm="12" md="6">
            <ListaFinanceiro :dados="despesa"/>
        </v-col>
    </v-row>
    <CadastroModal :show="dialog" :send="() => showCadastro(false)"/>
  </v-container>
</template>

<script>
import CadastroModal from '@/components/financeiro/CadastroModal.vue'
import ListaFinanceiro from '../components/financeiro/ListaFinanceiro.vue'
export default {
    components: { CadastroModal, ListaFinanceiro },
    data() {
        return {
            dialog: false,
            receita: {
                titulo: "Receita",
                total: 23430.03
            },
            despesa: {
                titulo: "Despesa",
                total: 1000.03
            }
        };
    },
    methods: {
        showCadastro(bool) {
            this.dialog = bool
        }
    }
}
</script>

<style>

</style>