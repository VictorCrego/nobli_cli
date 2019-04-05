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
              <q-btn color="primary" label="Cadastre-se" to='register'/>
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
    
      this.$nextTick(function(){
        var db = firebase.firestore();

        firebase.auth().getRedirectResult().then(function(result) {
          var user = firebase.auth().currentUser;
          var login_creation = user.metadata.creationTime;
          var last_login = user.metadata.lastSignInTime;
          var is_first_login = login_creation === last_login;
          
          if(is_first_login === true){

              var user_id = user.uid;
              var email = user.email;
              var name = user.displayName

              db.collection("userData").doc(user_id).set({
                  name: name,
                  email: email
              }).catch(function(error){
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  user.delete();
                  window.alert(errorCode + " " + errorMessage);
              });
          }
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            var user = firebase.auth().currentUser;
            var login_creation = user.metadata.creationTime;
            var last_login = user.metadata.lastSignInTime;
            var is_first_login = login_creation === last_login;

            if(is_first_login === true){
              user.delete();
            }

            window.alert(errorCode + " " + errorMessage + " " + error.credential);
        });
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
        window.location.href = "/#/QrCodeScreen";
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error " + errorCode + " \n" + errorMessage);
        target.disabled = false;
      });
    },
    logingg: function(event){      
      event.stopPropagation();
      event.preventDefault();

      var target = event.target;
      var provider = new firebase.auth.GoogleAuthProvider();

      target.disabled = true;
      
      firebase.auth().signInWithRedirect(provider);
    }
  }
};
</script>