<template>
  <div class="sidebar d-flex flex-column flex-shrink-0 text-white position-fixed">
    <div class="shadow-lg text-center p-2 mb-4" style="height:80px;">      
      <img src="@/assets/eMedipay-logo-white.png" alt="eMedipay Logo">
    </div>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">
          <i class="fa-solid fa-gauge me-1"></i>
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/providers" class="nav-link">
          <i class="fa-solid fa-hospital me-1"></i>
          Providers
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/support-members" class="nav-link">
          <i class="fa-solid fa-coins me-1"></i>
          Support Members
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dependants" class="nav-link">
          <i class="fa-solid fa-hospital-user me-1"></i>
          Dependants
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link" data-bs-toggle="collapse" data-bs-target="#users-collapse" aria-expanded="false">
          <i class="fa-solid fa-users me-1"></i>
          Manage Users
        </router-link>
        <div class="collapse" id="users-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li class="nav-item">
              <router-link to="/users" class="nav-link ps-5">
                <i class="fa-solid fa-users-line me-1"></i>
                Users
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/link-users-to-providers" class="nav-link ps-5">
                <i class="fa-solid fa-chain me-1"></i>
                Link Users to Providers
              </router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <router-link to="/form" class="nav-link">
          <i class="fas fa-chart-column me-1"></i>
          Reports
        </router-link>
      </li>
    </ul>
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

.nav-link.router-link-active, .nav-link:hover{  
    background-color: #6b51df !important;
    color: #fff;
}
</style>