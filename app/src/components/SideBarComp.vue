<template>
  <div class="sidebar d-flex flex-column flex-shrink-0 text-white position-fixed" style="width: 280px; height: 100vh">
    <a href="/" class="d-flex text-center mb-md-0 me-md-auto text-white text-decoration-none">
      <img src="@/assets/eMedipay-logo-white.png" class="mt-3 ms-3" alt="">
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <i class="fas fa-cogs me-1"></i>
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/components" class="nav-link">
          <i class="fas fa-home me-1"></i>
          UI Components
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/table" class="nav-link">
          <i class="fas fa-list me-1"></i>
          Sample Table
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/form" class="nav-link">
          <i class="fas fa-pen me-1"></i>
          Sample Form
        </router-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <router-link to="/" class="d-flex align-items-center text-decoration-none dropdown-toggle text-white mb-3 ms-3" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>Philip</strong>
      </router-link>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
        <li><router-link class="dropdown-item" to="/">Notifications</router-link></li>
        <li><router-link class="dropdown-item" to="/">Settings</router-link></li>
        <li><router-link class="dropdown-item" to="/">Profile</router-link></li>
        <li><hr class="dropdown-divider"></li>
        <li><router-link class="dropdown-item" to="/">Sign out</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarComp"
};
</script>

<style scoped>
.sidebar{
  background: #343957;
}

.nav-link{
  color: #bdbdc7;
  border-radius: 0 !important;
  padding: 1em 1.5em;
}

.nav-link.active, .nav-link:hover{  
    background-color: #6b51df !important;
    color: #fff;
}
</style>