<template>
  <q-layout>
      <q-page-container>
        <q-page class="principal column items-center justify-center">
          <img alt="Quasar logo" src="~assets/nobli-logo-mini.png">
          <div class="q-gutter-y-md column">
              <br>
              <q-input v-model="user.email" type="email" inverted-light color="white" float-label="Email"/>
              <br>
              <q-input v-model="user.password" type="password" inverted-light color="white" float-label="Password" />
              <br>
              <q-btn v-on:click="login" color="indigo-10" label="Entrar"/>
              <br>
              <q-btn color="primary" label="Cadastre-se" to='Register'/>
              <br>
              <div class="separator">ou</div>
              <br>
              <q-btn color="primary" icon="mdi-facebook-box" label="Entrar com Facebook" />
              <br>
              <q-btn v-on:click="logingg" color="red-5" icon="mdi-google" label="Entrar com Google" />
          </div>
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<style>
  .principal{
    background-color: #D9D9D9;
  }
  .separator {
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  }
  .separator::before,
  .separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #fff;
  }
  .separator::before {
    margin-right: .25em;
  }
  .separator::after {
    margin-left: .25em;
  }
</style>

<script>
import {firebase, config} from '../plugins/firebaseLoader'
import PageChanger from '../plugins/PageChanger'

export default {
  name: 'PageIndex',
  data: function() {
    return {
      loading: false,
      user: {
          email: '',
          password: ''
      }
    }
  },
  mounted(){
    var PageChangerInst = new PageChanger(this);

    if(!firebase.apps.length){
      firebase.initializeApp(config);
    }

    firebase.auth().onAuthStateChanged(function(user){
      if(user == null){
        PageChangerInst.changeToMainPage();
      }else{
        PageChangerInst.changeToQRCodePage();
      }
    });
  },
  methods: {
    login: function(event){
      
      event.stopPropagation();
      event.preventDefault();
      
      var target = event.target;  
      var email = this.user.email;
      var password = this.user.password;

      target.disabled = true;

      firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        new PageChanger(this).changeToQRCodePage();
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error " + errorCode + " \n" + errorMessage);
        target.disabled = false;
      });
    },
    logingg: function(event){
      new PageChanger(this).changeToRedirectPage();
    }
  }
};
</script>