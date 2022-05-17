<template>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <p class="h2">Components</p>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div class="col m-2">
              <p class="h4">Alerts</p>
            </div>
          </div>
          <div class="row">
            <AlertsComp/>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col m-2">
              <p class="h4 text-center">Buttons</p>
            </div>
          </div>
          <div class="row">
            <ButtonsComp/>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col m-2">
              <p class="h4 text-center">Buttons</p>
            </div>
          </div>
          <div class="row">
            <ListsComp/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertsComp from "./AlertsComp.vue";
import ButtonsComp from "./ButtonsComp.vue";
import ListsComp from "./ListsComp.vue";

export default {
  name: "UIComponents",
  components: {
    AlertsComp,
    ButtonsComp,
    ListsComp
}
};
</script>

<style scoped></style>