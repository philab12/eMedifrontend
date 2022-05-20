<template>
  <ul class="nav justify-content-end main-nav shadow-sm">
    <li>
      <router-link to="/" class="d-flex align-items-center text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-solid fa-bell fa-2x mt-4 ms-4 me-4 text-black-50 position-relative"></i>
        <span class="position-absolute ms-5 mt-3 translate-middle badge rounded-pill bg-danger">
          3
        </span>
      </router-link>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
        <li class="dropdown-item">You have 3 new Notifications</li>
        <li><hr class="dropdown-divider"></li>
        <li><router-link class="dropdown-item" to="/">First One</router-link></li>
        <li><router-link class="dropdown-item" to="/">Second One</router-link></li>
        <li><router-link class="dropdown-item" to="/">Third One</router-link></li>
        <li><hr class="dropdown-divider"></li>
        <li><router-link class="dropdown-item" to="/">All Notifications</router-link></li>
      </ul>
    </li>
    <div class="dropdown">
      <router-link to="/" class="d-flex align-items-center text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-solid fa-user fa-2x mt-4 ms-4 me-4 text-black-50"></i>
      </router-link>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
        <li class="dropdown-item">Philip Gyamfi</li>
        <li><hr class="dropdown-divider"></li>
        <li><router-link class="dropdown-item" to="/">Settings</router-link></li>
        <li><router-link class="dropdown-item" to="/">Profile</router-link></li>
        <li><hr class="dropdown-divider"></li>
        <li><router-link class="dropdown-item" to="/">Sign out</router-link></li>
      </ul>
    </div>
  </ul>
  <div style="height: 80px;"></div>
</template>

<script>
export default {
  name: "NavBarComp"
};
</script>

<style scoped></style>