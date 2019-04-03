<template>
  <q-layout>
      <q-page-container>
        <q-page class="page row justify-center">
            <div class="q-pt-md">
                <img alt="Quasar logo" src="~assets/nobli-logo-mini.png">
            </div>
            <div class="q-pb-md col-11">
                <br>
                <q-input v-model="nome" inverted-light color="white" float-label="Nome Completo"/>
                <br>
                <q-datetime v-model="nascimento" inverted-light color="white" type="date" format="DD-MM-YYYY" float-label="Data de Nascimento"/>
                <br>
                <q-input v-model="cpf" type="number" inverted-light color="white" float-label="CPF" />
                <br>
                <q-input v-model="cep" type="number" inverted-light color="white" float-label="CEP" />
                <br>
                <q-input v-model="estado" inverted-light color="white" float-label="Estado" />
                <br>
                <q-input v-model="cidade" inverted-light color="white" float-label="Cidade"/>
                <br>
                <q-input v-model="endereco" inverted-light color="white" float-label="Endereço" />
                <br>
                <q-input v-model="numero" inverted-light color="white" float-label="Número" />
                <br>
                <q-input v-model="complemento" inverted-light color="white" float-label="Complemento" />
                <br>
                <q-input v-model="email" :error="$v.email.$error" @blur="$v.email.$touch" inverted-light color="white" float-label="E-mail" />
                <br>
                <q-input v-model="password" inverted-light color="white" float-label="Senha" />
            </div>
            <div class="q-pb-md">
                <q-btn color="primary" label="Cadastrar" />
            </div>
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<style>
    .page{
        background-color: #D9D9D9;
    }
</style>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'PageRegister',
  data: function() {
    return {
        nome: "",
        nascimento: "",
        cpf: "",
        cep: "",
        estado: "",
        cidade: "",
        endereco: "",
        numero: "",
        complemento:"",
        email: "",
        password: ""
    }
  },
  validations: {
    email: { required, email }
  }
}
</script>