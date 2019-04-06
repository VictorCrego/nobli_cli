<template>
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
            
            if(user.isNewUser){
                var db = firebase.firestore();
                var user_id = user.uid;
                var email = user.email;
                var name = user.displayName

                db.collection("userData").doc(user_id).set({
                    name: name,
                    email: email
                }).then(function(){
                    window.location.href="/#/QrCodeScreen";
                }).catch(function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    user.delete();
                    window.alert(errorCode + " " + errorMessage);
                    window.location.href = "/#/";
                });
            }else{
                window.location.href = "/#/QrCodeScreen";
            }
        });
  },
  methods: {
    logingg: function(event){      
      event.stopPropagation();
      event.preventDefault();

      var target = event.target;
    }
  }
};
</script>