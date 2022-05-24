<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row" style="max-height: 72px;">
        <div class="col-md-1">
          <div class="hamburger sidebar-toggle">
            <i class="fa-solid fa-bars-staggered fa-2x fa-flip-horizontal m-2 ms-4" style="font-size: 25px;"></i>
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
  methods: {
      /*clicked: function(){
        $(this).toggleClass("is-active");
      }*/
  }
}
</script>

<style scoped>
</style>