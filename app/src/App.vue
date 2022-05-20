<template>
  <SideBarComp/>
  <NavBarComp/>
  <main>
    <router-view/>  
  </main>
</template>

<script>
import SideBarComp from "./components/SideBarComp.vue"
import NavBarComp from "./components/NavBarComp.vue"

export default {
  components: { SideBarComp, NavBarComp }
}
</script>

<style>
@import "./style.css";
</style>
