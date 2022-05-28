<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row" style="max-height: 72px;">
        <div class="col-md-1">
          <div class="hamburger sidebar-toggle" :class="{ 'is-active' : isActive }" @click="toggleHamburger()">
            <!--<i v-if="isActive" class="fa-solid fa-arrow-right fa-2x m-2 ms-4" style="font-size: 25px;"></i>
            <i v-else class="fa-solid fa-bars-staggered fa-2x fa-flip-horizontal m-2 ms-4" style="font-size: 25px;"></i> -->
            
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
        <div class="col-md-8 h6 d-flex justify-content-end align-items-center" style="height: 72px;">
            The name you were talking about
        </div>
        <div class="col-md-3">
            <div class="text-end">
                <NotificationsComp/>
                <MessagesAlertComp/>
                <UserDropDownComp/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery"
import NotificationsComp from "@/components/NotificationsComp.vue"
import MessagesAlertComp from "@/components/MessagesAlertComp.vue"
import UserDropDownComp from "@/components/UserDropDownComp.vue"

const $ = jQuery;
window.$ = $;

export default {
  name: "NavBarComp",
  components: {
      NotificationsComp, MessagesAlertComp, UserDropDownComp
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
   toggleHamburger: function() {
      this.isActive = !this.isActive;
      if(this.isActive == true){
        document.body.classList.add('sidebar-hide');
      } else {
        document.body.classList.remove('sidebar-hide');
      }
    }
  },
  mounted () {
  },
}
</script>

<style scoped>
</style>