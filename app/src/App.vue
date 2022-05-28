<template>
  <main>
    <router-view v-slot="{Component, route}">
      <transition name="effect" mode="out-in">
        <component :is="Component" :key="route.path"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import jQuery from "jquery"

const $ = jQuery;
window.$ = $;

export default {
  components: { 
  },
  mounted () {
    document.body.classList.add('pace-done');
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

/* route transitions */
.effect-enter-active, .effect-leave-active {
  transition: 0.3s
}

.effect-leave-to {
  opacity: 0;
}

.effect-enter-from {
  opacity: 0;
}
</style>
