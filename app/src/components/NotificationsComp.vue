<template>
  <div class="dropdown dib">
      <li class="header-icon" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-regular fa-bell"></i>
      </li>
      <div class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
          <ul class="p-0 mb-0">
              <div class="notification-header">Recent Notifications</div>
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
  name: "NotificationsComp",
  props: {},
  methods: {},
};
</script>

<style>

.dropdown-menu{
    width: 250px;
    padding: 0;
}

.dropdown-menu li{
    padding: 10px 15px;
    border-bottom: 1px solid #efefef;
}

.notification-text,
.notification-timestamp {
    color: #555 !important;
}

.notification-header{
    font-weight: bold;
    padding: 15px;
    border-bottom: 1px solid #efefef;
}

.notification-footer{
    text-align: center;
    padding: 10px;
}

.dropdown-menu li:hover{
  background: #f1f1f1;
}
</style>