<template>
<q-layout view="hHr lpr lFf" class="page row items-center justify-center">
  <q-layout-header class="no-shadow q-pa-lg">
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
    <div @click="clickShowEvents">
      <img class="q-pa-md" src="../assets/showfestas.png">
    </div>
    <div @click="clickBarsRestaurants">
      <img class="q-pa-md" src="../assets/baresrestaurantes.png">
    </div>
  </q-page-container>

  <!-- Footer -->
  <q-layout-footer class="no-shadow">
    
    <q-toolbar-title class="row items-center justify-center">

      <div class="q-ml-md fixed-bottom-left column">
        <q-btn flat size="15pt" dense icon="mdi-home" class="no-shadow" color="secondary" to='QrCodeScreen'/>
        <p class="ButtonTitle" align="center">Início</p>
      </div>

      <q-btn size="45pt" dense icon="mdi-qrcode-scan" class="no-shadow" to=''/>

      <div class="q-mr-md fixed-bottom-right column">
        <q-btn disable flat size="15pt" dense icon="mdi-map-marker" class="no-shadow" color="light" to=''/>
        <p class="ButtonTitle" align="center">Local</p>
      </div>

    </q-toolbar-title>

  </q-layout-footer>
</q-layout>
</template>


<style>
  .page{
    background-color: #D9D9D9;
  }
  .ButtonTitle{
    font-size: 10px;
  }

</style>

<script>
export default {
  name: 'PageLocalMenu',
  data: function() {
    return {
      showLeft: false
    }
  },
  methods:{
    clickShowEvents() {
       window.location.href = "/#/";
    },
    clickBarsRestaurants() {
       window.location.href = "/#/";
    },
    signOut: function(){
      firebase.auth().signOut();
      firebase.app().delete();
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(function(user){
      if(!user){
        window.location.href = "/#/";
      }
    });
  }
}

</script>