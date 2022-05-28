<template>
  <div class="dropdown dib">
      <li class="header-icon" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="user-avatar">John
              <i class="ti-angle-down f-s-10"></i>
          </span>
      </li>
      <div class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
          <ul class="p-0 mb-0">
              <li>
                  <router-link to="/">
                    <div class="p-2 user-drop-item">
                      <i class="fa-regular fa-user"></i>
                       Profile
                    </div> 
                  </router-link>
              </li>
              <li>
                  <router-link to="/">
                    <div class="p-2 user-drop-item">
                      <i class="fa-solid fa-screwdriver-wrench"></i>
                       Settings
                    </div> 
                  </router-link>
              </li>
              <li>
                  <router-link to="/">
                    <div class="p-2 user-drop-item">
                      <i class="fa-solid fa-key"></i>
                       Logout
                    </div> 
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "UserDropDownComp",
  props: {},
  methods: {},
};
</script>

<style scoped>
.dropdown-menu{
    width: 150px;
    padding: 0;
}

.dropdown-menu li:last-child{
    border-bottom: 0;
}

.user-drop-item{
  color: #444;
}

.user-drop-item:hover{
  color: #6b51df;
}
</style>