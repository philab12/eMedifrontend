<template>
    <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
        <div class="nano">
            <div class="nano-content">
                <div class="logo shadow-lg" style="max-height: 72px;">
                    <router-link to="/dashboard">
                        <img src="@/assets/eMedipay-logo-all-white-icon.png" style="height: 45px;"/>
                        <span class="font-white">eMedipay</span>
                    </router-link>
                </div>
                <ul class="nav nav-pills flex-column mb-auto mt-3">
                    <li class="label">Main</li>
                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link">
                            <i class="ti-home"></i> Dashboard
                            <!--<span class="badge badge-primary">2</span>-->
                        </router-link>
                    </li>

                    <li class="label">Apps</li>

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
                        <span class="sidebar-collapse-icon ti-angle-down"></span>
                        </router-link>
                        <div class="collapse" id="users-collapse" style="">
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li class="nav-item">
                            <router-link to="/users" class="nav-link ps-5">
                                Users
                            </router-link>
                            </li>
                            <li class="nav-item">
                            <router-link to="/link-users-to-providers" class="nav-link ps-5">
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
        </div>
    </div>
</template>

<script>
export default {
  name: "SideBarComp"
};
</script>

<style scoped>
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