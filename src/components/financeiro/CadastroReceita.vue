<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialogReceita" 
      persistent
      dark
      hide-overlay
      max-width="490"
    >
      <v-card>
        <v-card-title class="text-h6 text-center">
          Cadastrar Receita 
        </v-card-title>

        <v-card-text>
            <div class="text-center">
              
              <p class=" my-1 valores">Nome da Receita</p>
              <input v-model="formData.nome" class="inputs" type="text">

               <p class=" my-1 valores">Valor da Receita</p>
              <input v-model="formData.valor" class="inputs" type="text">

               <p class="valores my-1 ">Data da Entrada</p>
              <input v-model="formData.data" class="inputs" type="date">
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
            @click="enviarR(formData)"
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
        enviarR: Function,
        fecharModal: Function,
        showReceita: Boolean,
       
    },
    data() {
          return {
              dialogReceita: false,
              formData: {
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
        showReceita(bool) {
            this.dialogReceita = bool
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