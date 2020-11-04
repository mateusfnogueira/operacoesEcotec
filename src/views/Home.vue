<template>
  <div class="home">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.os"
              :rules="osRules"
              type="text"
              label="Ordem de serviço"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.navio"
              :rules="shipRules"
              type="text"
              label="Navio"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.cliente"
              :rules="clientRules"
              label="Cliente"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.mercadoria"
              :rules="merchandiseRules"
              label="Mercadoria"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.terminal"
              :rules="terminalRules"
              label="Terminal"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.quantia"
              :rules="qtdRules"
              label="Quantia"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.tipo"
              :rules="typeRules"
              label="Tipo de tratamento"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.marca"
              :rules="brandRules"
              label="Marca comercial"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.responsavel"
              :rules="responsibleRules"
              label="Responsavel"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.dosagem"
              :rules="dosageRules"
              label="Dosagem"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.metodo"
              :rules="methodRules"
              label="Método"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.tempo"
              :rules="timeRules"
              label="Tempo"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.destino"
              :rules="destinyRules"
              label="Destino"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.agencia"
              :rules="agencyRules"
              label="Agencia"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.eta"
              :rules="etaRules"
              type="date"
              label="ETA"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.etb"
              :rules="etbRules"
              type="date"
              label="ETB"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.inspetora"
              :rules="inspectorRules"
              label="Inspetora"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="operation.despachante"
              :rules="faRules"
              label="Despachante"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-btn class="ma-2" color="info" @click.stop="cadastrarOperacao()">
      Cadastrar Operação
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  data: () => ({
    valid: false,
    operation: {
      os: "",
      navio: "",
      cliente: "",
      mercadoria: "",
      terminal: "",
      quantia: "",
      tipo: "",
      marca: "",
      responsavel: "",
      dosagem: "",
      metodo: "",
      tempo: "",
      destino: "",
      agencia: "",
      eta: "",
      etb: "",
      inspetora: "",
      despachante: "",
      completed: false,
    },
    osRules: [(v) => !!v || "Ordem de serviço é obirgatória"],
    shipRules: [(v) => !!v || "Nome do Navio é Obrigatório"],
    clientRules: [(v) => !!v || "Especificação do cliente é obrigatório"],
    merchandiseRules: [
      (v) => !!v || "Especificação da mercadoria é obrigatória",
    ],
    terminalRules: [(v) => !!v || "Especificação do Terminal é obrigatório"],
    qtdRules: [(v) => !!v || "Especifique a quantidade"],
    typeRules: [(v) => !!v || "Especifique o tipo de tratamento"],
    brandRules: [(v) => !!v || "Especifique a marca comercial"],
    responsibleRules: [(v) => !!v || "Especifique o resposável pela operação"],
    dosageRules: [(v) => !!v || "Especifique a dosagem a ser utilizada"],
    methodRules: [(v) => !!v || "Especifique o método a ser utilizado"],
    timeRules: [(v) => !!v || "Especifique o tempo de efeito para o produto"],
    destinyRules: [(v) => !!v || "Especifique o destino da mercadoria"],
    agencyRules: [(v) => !!v || "Especifique a agencia responsável"],
    etaRules: [(v) => !!v || "Especfique a data de chegada do navio"],
    etbRules: [(v) => !!v || "Especifique a data de atracação"],
    etcRules: [(v) => !!v || "Especifique a data de saída do navio"],
    inspectorRules: [(v) => !!v || "Especifique o inspetor responsável"],
    faRules: [(v) => !!v || "Especifique o despachante responsável"],
  }),
  computed: {
    ...mapState("operations", ["operations"]),
  },
  methods: {
    ...mapActions("operations", ["addOperacao"]),
    cadastrarOperacao() {
      this.addOperacao({
        id: this.operations.length,
        os: this.operation.os,
        navio: this.operation.navio,
        cliente: this.operation.cliente,
        mercadoria: this.operation.mercadoria,
        terminal: this.operation.terminal,
        quantia: this.operation.quantia,
        tipo: this.operation.tipo,
        marca: this.operation.marca,
        responsavel: this.operation.responsavel,
        dosagem: this.operation.dosagem,
        metodo: this.operation.metodo,
        tempo: this.operation.tempo,
        destino: this.operation.destino,
        agencia: this.operation.agencia,
        eta: this.operation.eta,
        inspetora: this.operation.inspetora,
        despachante: this.operation.despachante,
        completed: this.operation.completed,
      });
      this.operation = {
        os: "",
        navio: "",
        cliente: "",
        mercadoria: "",
        terminal: "",
        quantia: "",
        tipo: "",
        marca: "",
        responsavel: "",
        dosagem: "",
        metodo: "",
        tempo: "",
        destino: "",
        agencia: "",
        eta: "",
        inspetora: "",
        despachante: "",
        completed: false,
      };
    },
  },
};
</script>
