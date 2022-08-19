<template>
  <v-container>
    <v-row>
        <v-col class="d-flex" cols="12">
            <h1 @click="Valor()" class="branco ml-2">Extrato Financeiro</h1> <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn class="mx-2" outlined color="primary" depressed @click="showReceita()">Cadastrar receita</v-btn>
            <v-btn class="mx-2" color="primary" depressed @click="showDespesa()" >Cadastrar despesa</v-btn>
        </v-col>

        <v-col class="px-5" cols="12" sm="12" md="6">
            <ListaReceita :Valor="Valor" :ExcluirReceita="ExcluirReceita" :formData="formData" :EditarReceita="EditarReceita" :lista="listaReceita" :dados="receita"/>
        </v-col>
    
        <v-col class="px-5" cols="12" sm="12" md="6">
            <ListaDespesa :excluirDespesa="excluirDespesa" :editarDespesa="editarDespesa" :lista="listaDespesa"  :dados="despesa"/>
        </v-col>
    </v-row>
    
    <CadastroReceita :enviarR="enviarR" :fecharModal="fecharModal" :showReceita="dialogReceita" />

    <CadastroDespesa :enviarD="enviarD" :fecharModal="fecharModal"  :showDespesa="dialogDespesa"/>

    <EditarReceita  :fecharEdit="fecharEdit" :SalvarEdit="SalvarEdit"  :formData="formEdit" :show="dialogEditR"/>

    <EditarDespesa :salvarEditD="salvarEditD" :formData="formEdit"  :fecharEdit="fecharEdit" :show="dialogEditD"/>


    <br> <br>
    <div><h2 :class="calculoSaldo() < 0 ? 'vermelho' : 'verde' ">Saldo: R${{calculoSaldo()}}</h2></div>

    
   
  </v-container>
</template>

<script>
import axios from 'axios'
import ListaReceita from '@/components/financeiro/ListaReceita.vue';
import ListaDespesa from '@/components/financeiro/ListaDespesa.vue';
import CadastroReceita from '../components/financeiro/CadastroReceita.vue';
import CadastroDespesa from '@/components/financeiro/CadastroDespesa.vue';
import EditarReceita from '../components/financeiro/EditarReceita.vue';
import EditarDespesa from '@/components/financeiro/EditarDespesa.vue';

export default {
    components: { ListaReceita, ListaDespesa, CadastroReceita, CadastroDespesa, EditarReceita, EditarDespesa },
    data() {
        return {

             formData: {
                id: null,
                nome: null,
                valor: null,
                data: null
              },
           
            formEdit: {
                id: null,
                nome: null,
                valor: null,
                data: null
            },
             formDataDespesa: {
                id: null,
                nome: null,
                valor: null,
                data: null
              },
              
            listaReceita: [],
            listaDespesa: [],
            dialogEditR: false,
            dialogEditD: false,
            dialogDespesa: false,
            dialogReceita: false,
            receita: {
                titulo: "Receita",
            },
            despesa: {
                titulo: "Despesa",
                total: 1000.033
            },

            total: 0,

        };
    },
    async mounted() {
        await this.ChamarReceita()
        await this.chamarDespesa()
        this.calculoSaldo()
    },

    methods: {
        calculoSaldo() {
            let totalR = this.listaReceita.reduce((total, item) => total + item.valor, 0)
            let totalD = this.listaDespesa.reduce((total, item) => total + item.valor, 0)


          return  totalR - totalD 
            
        },



        showReceita() {
            console.log('corsssss')
            this.dialogReceita = true
            
        },

        showDespesa() {
            this.dialogDespesa = true
            
        },

        async chamarDespesa() {
            await axios
            .get('http://localhost:3000/api/despesa/chamar')
            .then(response => (this.listaDespesa = response.data.result))
        },

         async ChamarReceita() {
             await axios
            .get('http://localhost:3000/api/receita/chamar')
            .then(response => (this.listaReceita = response.data.result))
        },

        

        enviarR(formData) {    
            formData.valor = Number(formData.valor)  
            axios
            .post(`http://localhost:3000/api/receita/enviar`, formData)
            .then(response => {
                    console.log('Arquivos enviados !',response)
                    this.ChamarReceita()
                    this.dialogReceita = false
             }).catch((erro) => {
                console.log("Não enviado", erro)
            })
        },

        enviarD(formDataDespesa) {      
            formDataDespesa.valor = Number(formDataDespesa.valor)
            axios
            .post(`http://localhost:3000/api/despesa/enviar`, formDataDespesa)
            .then(response => {
                    console.log('Arquivos enviados !',response)
                    this.chamarDespesa()
                    this.dialogDespesa = false
             }).catch((erro) => {
                console.log("Não enviado", erro)
            })
        },


        EditarReceita(item) {

            axios
            .get(`http://localhost:3000/api/receita/chamar/id/${item.id}`)
            .then(response => (console.log('olha',response)))

            this.formEdit.id = item.id
            this.formEdit.nome = item.nome
            this.formEdit.valor = item.valor
            this.formEdit.data = item.data

            console.log('problema')
            this.dialogEditR = true

        },

        editarDespesa(item) {

             axios
            .get(`http://localhost:3000/api/despesa/chamar/id/${item.id}`)
            .then(response => (console.log('olha',response)))

            this.formEdit.id = item.id
            this.formEdit.nome = item.nome
            this.formEdit.valor = item.valor
            this.formEdit.data = item.data

            this.dialogEditD = true

        },

        SalvarEdit(formEdit) {
            axios.put(`http://localhost:3000/api/receita/editar/${formEdit.id}`, formEdit)
            .then((res) => {
                console.log("Editado com secesso", res.data)
                this.ChamarReceita()
                this.dialogEdit = false
            })
        },

         salvarEditD(formEdit) {
            console.log('aqui', formEdit)
            axios.put(`http://localhost:3000/api/despesa/editar/${formEdit.id}`, formEdit)
            .then((res) => {
                console.log("Editado com secesso", res.data)
                this.chamarDespesa()
                this.dialogEditD = false
            })
        },

        ExcluirReceita(item) {

            axios.delete(`http://localhost:3000/api/receita/deletar/${item.id}`)
            .then((res) => {
            console.log("Removido com sucesso", res.data)
            this.ChamarReceita()
            })

        },

         excluirDespesa(item) {

            axios.delete(`http://localhost:3000/api/despesa/deletar/${item.id}`)
            .then((res) => {
            console.log("Removido com sucesso", res.data)
            this.chamarDespesa()
            })

        },

        
        fecharModal() {
           
            this.dialogDespesa = false
            this.dialogReceita = false  
           
        },

        fecharEdit() {
            console.log('fechado com sucesso')
             this.dialogEditR = false
             this.dialogEditD = false
        }

       
    }
}
</script>

<style>
.verde {
color: darkgreen;
}

.vermelho {
    color: brown;
}
</style>