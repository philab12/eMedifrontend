<template>
  <SideBarComp/>
  <main>
    <router-view/>  
  </main>
</template>

<script>
import SideBarComp from "./components/SideBarComp.vue"
export default {
  components: { SideBarComp }
}
</script>

<style>
@import "./style.css";
</style>
