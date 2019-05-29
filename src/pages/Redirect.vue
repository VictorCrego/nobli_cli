<template>
  <q-layout>
    <q-page-container>
        <q-page class="principal column items-center justify-center">
            <div>
                <q-spinner-mat size="150" style="color: #027BE3FF"/>
            </div>
            <p>Loading...</p>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>
export default {
  name: 'PageRedirect',
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
        var db = firebase.firestore();

        firebase.auth().getRedirectResult().then(function(result) {
            var user = result.user;

            if(user == null){
                var provider = new firebase.auth.GoogleAuthProvider();                
                firebase.auth().signInWithRedirect(provider);
            }else{            
                user.isNewUser = result.additionalUserInfo.isNewUser;
            }
            return user;

        }).then(function (user){
            if(user == null) return;
            window.location.href="/#/QrCodeScreen";
        });
  },
  methods: {
    logingg: function(event){      
      event.stopPropagation();
      event.preventDefault();
    }
  }
};
</script>