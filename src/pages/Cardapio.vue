<template>
<q-layout view="hHr lPr lFf" class="page row justify-center">
  <q-layout-header class="no-shadow">
    <q-toolbar color="black">
      <q-toolbar-title>
        <q-btn size="15pt" class="absolute-left" flat round dense @click="showLeft = !showLeft" icon="menu" color="grey-5"/>
        <p class="absolute-center">Cardápio</p>
        <q-btn size="15pt" class="absolute-right" flat round dense @click="signOut" icon="logout" color="grey-5"/>
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

    </q-page-container>

    <!-- Footer -->
    <q-layout-footer class="no-shadow">
        <q-toolbar color="light">
            <q-toolbar-title>
                <q-btn flat size="15pt" dense icon="mdi-home" class="no-shadow float-left" color="green-10" to='QrCodeScreen'/>
                <q-btn flat size="15pt" dense icon="mdi-map-marker" class="no-shadow float-right" color="deep-purple-10" to='LocalMenu'/>
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
export default {
  name: 'PageCardapio',
  data: function() {
    return {
      showLeft: false,
    }
  },
  methods:{
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
  },
}

</script>