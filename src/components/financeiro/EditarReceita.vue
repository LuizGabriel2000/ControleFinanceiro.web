<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialogEditR"
      persistent
      dark 
      hide-overlay
      max-width="490"
    >
      <v-card>
        <v-card-title class="text-h6 text-center">
          Edição Receita 
        </v-card-title>

        <v-card-text>
            <div class="text-center">

              <p class=" my-1 valores">Nome da Receita </p>
              <input v-model="formEdit.nome" class="inputs" type="text">

               <p class=" my-1 valores">Valor Receita</p>
              <input v-model="formEdit.valor" class="inputs" type="text">

               <p class="valores my-1 ">Data da Entrada</p>
              <input v-model="formEdit.data" class="inputs" type="date">
            </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="fecharEdit()"
          >
            Fechar
          </v-btn>
          <v-btn
            color="green darken-5"
            text
            @click="SalvarEdit(formEdit)"
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
    SalvarEdit: Function,
    formData: Object,
    show: Boolean,
    fecharEdit: Function,
  },

  data() {
    return {
      dialogEditR: false,

      formEdit: {
        id: null,
        nome: null,
        valor: null,
        data: null
      },
    }
  },

  mounted() {

  },
  watch: {
    show(bool) {
      console.log("chegando aqui")
      this.formEdit.id = this.formData.id
      this.formEdit.nome = this.formData.nome
      this.formEdit.valor = this.formData.valor
      this.formEdit.data = this.formData.data
      this.dialogEditR = bool
    },
  }
}
</script>

<style>

</style>