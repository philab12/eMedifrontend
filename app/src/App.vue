<template>
  <main>
    <SideBarComp/>
    <NavBarComp/>
    <router-view/>
  </main>
</template>

<script>
import SideBarComp from "./components/SideBarComp.vue"
import NavBarComp from "./components/NavBarComp.vue"
import jQuery from "jquery"

const $ = jQuery;
window.$ = $;

export default {
  components: { 
    SideBarComp, 
    NavBarComp,
  },
  /*data:  function() {
        return {
            isActive: false
        };
    },
  methods: {
   toggleHamburger: function() {
       alert("Clicked");
        this.isActive = !this.isActive;
    }
  },*/
}
</script>

<style>
@import "./style.css";

.modal-dialog{
   top:100px;
}
</style>
