<template>
    <div class="unix-login">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="login-content">
                        <div class="login-logo">
                            <img src="@/assets/eMedipay-logo-small.png" alt="" style="height: 55px;"/>
                        </div>
                        <div class="card">
                            <h3 class="text-center mb-5">Select Portal</h3>
                            <span>
                                <div class="row mb-5">
                                    <div class="col">
                                        <div class="card m-1 p-5">
                                            <router-link to="/dashboard" class="btn p-5 bg-emedipay text-white btn-light shadow">
                                                <i class="fa-solid fa-hospital fa-4x mb-3"></i><br/>
                                                Provider
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card m-1 p-5">
                                            <router-link to="/dashboard" class="btn p-5 bg-emedipay text-white btn-light shadow">
                                                <i class="fa-solid fa-users fa-4x mb-3"></i><br/>
                                                User
                                            </router-link>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card m-1 p-5">
                                            <router-link to="/dashboard" class="btn p-5 bg-emedipay text-white btn-light shadow">
                                                <i class="fa-solid fa-coins fa-4x mb-3"></i><br/>
                                                Support
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {    
  name: "SelectPortalView",
  data:  function() {
    return {
    };
  },
  methods: {
  },
  components: {

  }
}
</script>