<template>

    <div class="unix-login">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="login-content">
                        <div class="login-logo">
                            <img src="@/assets/eMedipay-logo-small.png" alt="" style="height: 55px;"/>
                        </div>
                        <div class="card login-form">
                            <h4>Forgot Password</h4>
                            <form> 
                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" placeholder="Email">
                                </div>
                                <router-link to="/reset-password" class="btn btn-primary btn-flat m-b-15">Submit</router-link>
                                <div class="register-link text-center">
                                    <p>Back to <router-link to="/"> Home</router-link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {    
  name: "ForgotPasswordView",
  components: {

  }
}
</script>