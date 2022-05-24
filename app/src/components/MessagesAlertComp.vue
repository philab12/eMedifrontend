<template>
  <div class="dropdown dib">
      <li class="header-icon" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-regular fa-envelope"></i>
      </li>
      <div class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
          <ul class="p-0 mb-0">
              <div class="notification-header">3 New Messages</div>
              <li>
                  <router-link to="/">
                      <div class="notification-content">
                          <div class="notification-heading">Mr. John</div>
                          <div class="notification-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                          <div class="notification-timestamp text-end">02:34 PM</div>
                      </div>
                  </router-link>
              </li>
              <li>
                  <router-link to="/">
                      <div class="notification-content">
                          <div class="notification-heading">Mr. John</div>
                          <div class="notification-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                          <div class="notification-timestamp text-end">02:34 PM</div>
                      </div>
                  </router-link>
              </li>
              <li>
                  <router-link to="/">
                      <div class="notification-content">
                          <div class="notification-heading">Mr. John</div>
                          <div class="notification-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                          <div class="notification-timestamp text-end">02:34 PM</div>
                      </div>
                  </router-link>
              </li>
              <div class="notification-footer">
                  <router-link to="/">
                      See All
                  </router-link>
              </div>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "MessagesAlertComp",
  props: {},
  methods: {},
};
</script>

<style scoped></style>