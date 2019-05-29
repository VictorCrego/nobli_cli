<template>
  <q-layout>
      <q-page-container>
        <q-page class="page row justify-center">
            <div class="q-pt-md">
                <img alt="Quasar logo" src="~assets/nobli-logo-mini.png">
            </div>
            <div class="q-pb-md col-11">
                <br>
                <q-input v-model="name" inverted-light color="white" float-label="Nome Completo"/>
                <br>
                <q-datetime v-model="birthday" inverted-light color="white" type="date" format="DD-MM-YYYY" float-label="Data de Nascimento"/>
                <br>
                <q-input v-model="doc" type="number" inverted-light color="white" float-label="CPF" />
                <br>
                <q-input v-model="pcode" inverted-light color="white" float-label="CEP" />
                <br>
                <q-input v-model="state" inverted-light color="white" float-label="Estado" />
                <br>
                <q-input v-model="city" inverted-light color="white" float-label="Cidade"/>
                <br>
                <q-input v-model="address" inverted-light color="white" float-label="Endereço" />
                <br>
                <q-input v-model="number" inverted-light color="white" float-label="Número" />
                <br>
                <q-input v-model="address2" inverted-light color="white" float-label="Complemento" />
                <br>
                <q-input v-model="email" :error="$v.email.$error" @blur="$v.email.$touch" inverted-light color="white" float-label="E-mail" />
                <br>
                <q-input v-model="password" type="password" inverted-light color="white" float-label="Senha" />
                <br>
                <q-input v-model="pwconfirm" type="password" inverted-light color="white" float-label="Confirme a senha" />
            </div>
            <div class="q-pb-md">
                <q-btn v-on:click="register" color="primary" label="Cadastrar" />
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
var today = new Date();
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'PageRegister',
  data: function() {
    return {
        name: "",
        birthday: new Date(today.getFullYear()-25, today.getMonth(), today.getDate()),
        doc: "",
        pcode: "",
        state: "",
        city: "",
        address: "",
        number: "",
        address2:"",
        email: "",
        password: "",
        pwconfirm: ""
    }
  },
  validations: {
    email: { required, email }
  },
  mounted: function(){
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
          window.location.href = "/#/QrCodeScreen";
        }
    });
  },
  methods: {
    register(event){
      if (this.pwconfirm === this.password){
        var db = firebase.firestore();
        var $this = this;
  
        event.stopPropagation();
        event.preventDefault();
        
        var target = event.target;
        var email = this.email;
        var password = this.password;
        var name = this.name;
        var doc = this.doc;
        var pcode = this.pcode;
        var address = this.address;
        var number = this.number;
        var address2 = this.address2;
        var state = this.state;
        var city = this.city;

        target.disabled = true;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){

          firebase.auth().signInWithEmailAndPassword(email, password).then(function(response){
              var user = response.user;
              var user_id = user.uid;

              user.updateProfile({
                displayName: name,
              });              
              
              db.collection("userProfileData").doc(user_id).set({
                name: name,
                doc: doc,
                pcode: pcode,
                address: address,
                number: number,
                address2: address2,
                state: state,
                city: city,
                email: email
              }).catch(function(error){
                handleRegistrationErrorAfterUserCreation(error);
              });
            }).catch(function(error) {
              handleRegistrationErrorAfterUserCreation(error);
            });
        }).catch(function(error) {
          handleRegistrationErrorBeforeUserCreation(error);
        });
      }
    },  
    handleRegistrationErrorAfterUserCreation(error){     
      user.delete();
      handleRegistrationErrorBeforeUserCreation(error);
    },
    handleRegistrationErrorBeforeUserCreation(error){
      var errorCode = error.code;
      var errorMessage = error.message;

      target.disabled = false;      
      window.alert("Error " + errorCode + " \n" + errorMessage);
    }
  }
}
</script>