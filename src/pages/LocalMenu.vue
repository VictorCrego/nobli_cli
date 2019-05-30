<template>
<q-layout view="hHr lPr lFf" class="page row justify-center">
  <q-layout-header class="no-shadow q-pa-lg">
    <q-toolbar color="#D9D9D9">
      <q-toolbar-title>
        <q-btn size="15pt" class="absolute-left" flat round dense @click="showLeft = !showLeft" icon="menu" color="grey-10"/>
        <img class="absolute-center" alt="Quasar logo" src="~assets/nobli-logo-mini.png">
        <q-btn size="15pt" class="absolute-right" flat round dense @click="signOut" icon="logout" color="grey-10"/>
      </q-toolbar-title>
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
    <div class="justify-center">
      <div @click="clickShowEvents">
        <img class="q-pa-md" src="../assets/showfestas.png">
      </div>
      <div @click="clickBarsRestaurants">
        <img class="q-pa-md" src="../assets/baresrestaurantes.png">
      </div>
    </div>
  </q-page-container>

  <!-- Footer -->
  <q-layout-footer class="no-shadow">
      <q-toolbar color="light">
          <q-toolbar-title>
              <q-btn flat size="15pt" dense icon="mdi-home" class="no-shadow float-left" color="green-10" @click='clickGoToHomePage()'/>
          </q-toolbar-title>
      </q-toolbar>
  </q-layout-footer>
</q-layout>
</template>


<style>
  .page{
    background-color: #D9D9D9;
  }
</style>

<script>
import PageChanger from '../plugins/PageChanger'

export default {
  name: 'PageLocalMenu',
  data: function() {
    return {
      showLeft: false
    }
  },
  methods:{
    clickGoToHomePage(){
      new PageChanger(this).changeToQRCodePage();
    },
    clickShowEvents() {
      new PageChanger(this).changeToShowsAndEvents();
    },
    clickBarsRestaurants() {
      new PageChanger(this).changeToBarsAndRestaurantsPage();
    },
    signOut: function(){
      firebase.auth().signOut();
      firebase.app().delete();
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(function(user){
      if(!user){
        new PageChanger(this).changeToMainPage();
      }
    });
  }
}

</script>