<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialogDespesa"
      persistent
      dark
      hide-overlay
      max-width="490"
    >
      <v-card>
        <v-card-title class="text-h6 text-center">
          Cadastrar Despesa
        </v-card-title>

        <v-card-text>
            <div class="text-center"> 

              <p class=" my-1 valores">Nome da Despesa</p>
              <input v-model="formDataDespesa.nome" class="inputs" type="text">

               <p class=" my-1 valores">Valor da Despesa</p>
              <input v-model="formDataDespesa.valor" class="inputs" type="text">

               <p class="valores my-1 ">Data da Entrada</p>
              <input v-model="formDataDespesa.data" class="inputs" type="date">
            </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="fecharModal()"
          >
            Fechar
          </v-btn>
          <v-btn
            color="green darken-5"
            text
            @click="enviarD(formDataDespesa)"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  
</template>

<script>
export default {
    props: {
        enviarD: Function,
        fecharModal: Function,   
        showDespesa: Boolean,
       
    },
    data() {
          return {
              dialogDespesa: false,
              formDataDespesa: {
                id: null,
                nome: null,
                valor: null,
                data: null
              }

          }
        },

      methods: {

        
        
        
      },

      watch: {
        showDespesa(bool) {
            this.dialogDespesa = bool
        }
    }
}
</script>

<style>

.inputs {
  background-color: rgba(147, 237, 181, 0.336);
  border-radius: 3px;
  color: aliceblue;
}

.valores {
  color: rgb(255, 255, 255);
  font-family: ui-serif;
  font-size: 17px;
}


</style>