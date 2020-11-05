<template>
  <v-row class="flex-column" no-gutters>
    <h1>Programação de Operações (Navios)</h1>

    <v-btn @click.stop="loadNavio()">Carregar Dados</v-btn>

    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              OS
            </th>
            <th class="text-left">
              Navio
            </th>
            <th class="text-left">
              Cliente
            </th>
            <th class="text-left">
              Mercadoria
            </th>
            <th class="text-left">
              Terminal
            </th>
            <th class="text-left">
              Quantia
            </th>
            <th class="text-left">
              Tipo de Tratamento
            </th>
            <th class="text-left">
              Marca Comercial
            </th>
            <th class="text-left">
              Responsavel
            </th>
            <th class="text-left">
              Dosagem
            </th>
            <th class="text-left">
              Metodo
            </th>
            <th class="text-left">
              Tempo
            </th>
            <th class="text-left">
              Destino
            </th>
            <th class="text-left">
              Agencia
            </th>
            <th class="text-left">
              ETA
            </th>
            <th class="text-left">
              ETB
            </th>
            <th class="text-left">
              Inspetora
            </th>
            <th class="text-left">
              Despachante
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(operation, index) in operations"
            :key="index"
            class="operacao"
            @dblclick="updOperacao(index)"
            :style="
              operation.completed
                ? 'background-color: green'
                : 'background-color: red'
            "
          >
            <td>{{ operation.os }}</td>
            <td>{{ operation.navio }}</td>
            <td>{{ operation.cliente }}</td>
            <td>{{ operation.mercadoria }}</td>
            <td>{{ operation.terminal }}</td>
            <td>{{ operation.quantia }}</td>
            <td>{{ operation.tipo }}</td>
            <td>{{ operation.produto }}</td>
            <td>{{ operation.responsavel }}</td>
            <td>{{ operation.marca }}</td>
            <td>{{ operation.dosagem }}</td>
            <td>{{ operation.metodo }}</td>
            <td>{{ operation.tempo }}</td>
            <td>{{ operation.destino }}</td>
            <td>{{ operation.agencia }}</td>
            <td>{{ operation.eta }}</td>
            <td>{{ operation.etb }}</td>
            <td>{{ operation.inspetora }}</td>
            <td>{{ operation.despachante }}</td>
            <td>
              <v-icon color="white" @click="delOperacao(index)"
                >mdi-trash-can</v-icon
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      operation: [],
      //   operations: [
      //     { navio: "eu", terminal: "ele", responsavel: "tu", completed: false },
      //     { navio: "ela", terminal: "eu", responsavel: "voce", completed: false },
      //     { navio: "tu", terminal: "ele", responsavel: "cade", completed: false },
      //   ],
    };
  },

  methods: {
    ...mapActions("operations", ["delOperacao", "updOperacao", "loadNavio"]),
    // carregarDados() {
    //     this.$http.get('operacaoNavio.json').then(res => {
    //         this.operation = res.data
    //         console.log(this.operation)
    //     })
    // }
    loadNavio() {
      this.loadNavio();
    },
  },

  computed: {
    ...mapState("operations", ["operations"]),
  },
};
</script>

<style lang="scss">
.operacao {
  border-bottom: 2px solid black;
}
</style>
