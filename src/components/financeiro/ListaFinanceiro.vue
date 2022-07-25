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
                    Name
                </th>
                <th class="text-left">
                    Valor
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in desserts"
                :key="item.Nome"
                >
                <td>{{ item.Nome }}</td>
                <td>{{ item.Valor }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        <v-divider></v-divider>
        <div class="d-flex mt-2">
            <strong class="branco">Total:</strong>
            <v-spacer></v-spacer>
            <strong class="branco">R${{dados.total}}</strong>
        </div>
    </v-card>
</template>

<script>
export default {
    props: {
        dados: Object
    },
    data () {
      return {
        desserts: [
          {
            Nome: 'Trabalho Frelancer',
            Valor: 1900,
          },
          {
            Nome: 'pagamento',
            Valor: 237,
          },
          {
            Nome: 'venda livros',
            Valor: 262,
          },
          {
            Nome: 'venda',
            Valor: 305,
          },
          {
            Nome: 'Gingerbread',
            Valor: 356,
          },
          {
            Nome: 'Jelly bean',
            Valor: 375,
          }
        ],
      }
    }
}
</script>

<style>
.branco {
    color: #fff;
}
</style>