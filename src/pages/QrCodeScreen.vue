<template>
<q-layout view="hHr lPr lFf" class="page row items-center justify-center">
  <q-layout-header class="no-shadow">
    <q-toolbar color="#D9D9D9">
      <q-btn flat round dense @click="showLeft = !showLeft" icon="menu" color="grey-8"/>
      <q-toolbar-title class="q-pa-md row absolute-center">
        <img alt="Quasar logo" src="~assets/nobli-logo-mini.png">
      </q-toolbar-title>
      <q-btn class="absolute-right" flat round dense @click="signOut" icon="logout" color="grey-8"/>
    </q-toolbar>
  </q-layout-header>

  <!-- Left Side Drawer -->
  <q-layout-drawer side="left" v-model="showLeft">
    <q-list no-border link inset-separator>
      <q-list-header>Essential Links</q-list-header>
      <q-item to="/docs">
        <q-item-side icon="school" />
        <q-item-main label="Docs" sublabel="quasar-framework.org" />
      </q-item>
      <q-item to="/forum">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
      </q-item>
      <q-item to="/chat">
        <q-item-side icon="chat" />
        <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
      </q-item>
      <q-item to="/twitter">
        <q-item-side icon="rss feed" />
        <q-item-main label="Twitter" sublabel="@quasarframework" />
      </q-item>
    </q-list>
  </q-layout-drawer>

  <!-- sub-routes get injected here: -->
  <q-page-container>
      <p id="textoConecte">Conecte-se!</p>
      <q-btn size="105pt" dense icon="mdi-qrcode-scan" class="no-shadow"/>
  </q-page-container>

  <!-- Footer -->
  <q-layout-footer class="no-shadow">
    <q-toolbar-title class="q-pa-md row justify-center">
      <q-btn flat size="45pt" dense icon="mdi-map-marker" class="no-shadow" color="deep-purple-10"/>
    </q-toolbar-title>
  </q-layout-footer>
</q-layout>
</template>

<style>
  .page{
    background-color: #D9D9D9;
  }
  #textoConecte{
    text-align: center;
    font-size: 20pt;
    color:#2f5597;
    font-weight: bold;
  }
</style>

<script>
export default {
  name: 'PageQrCode',
  data: function() {
    return {
      showLeft: false
    }
  },
  methods:{
    signOut: function(){
      firebase.auth().signOut();
      firebase.app().delete();
    }
  },
  created(){
    this.$nextTick(function(){
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          console.log("User");
        }else{
          console.log("no user!");
          window.location.href = "/#/";
        }
        console.log("after if");
      });
    });
  }
}

</script>