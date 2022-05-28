<template>
    <div class="unix-login">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="login-content">
                        <div class="login-logo">
                            <img src="@/assets/eMedipay-logo-small.png" alt="" style="height: 55px;"/>
                        </div>
                        <div class="card login-form">
                            <h4>Register</h4>
                            <form class="register-form" action="">
                                <span v-if="type == 'user'">
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>first name</label>
                                                <input type="text" class="form-control" placeholder="First Name" v-model="user.fname">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>last name</label>
                                                <input type="text" class="form-control" placeholder="Last Name" v-model="user.lname">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>other names</label>
                                                <input type="text" class="form-control" placeholder="Other Names" v-model="user.oname">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>country</label>
                                                <select class="form-control">
                                                    <option>--Choose a Country--</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>address</label>
                                                <input type="text" class="form-control" placeholder="Address" v-model="user.address">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>state</label>
                                                <input type="text" class="form-control" placeholder="State" v-model="user.state">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>city</label>
                                                <input type="text" class="form-control" placeholder="City" v-model="user.city">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>contact</label>
                                                <input type="text" class="form-control" placeholder="Contact" v-model="user.contact">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>email</label>
                                                <input type="email" class="form-control" placeholder="Email" v-model="user.email">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>password</label>
                                                <input type="password" class="form-control" placeholder="Password" v-model="user.password">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group"> 
                                                <label>confirm password</label>
                                                <input type="password" class="form-control" placeholder="Confirm Password" v-model="user.password">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox"> Agree the terms and policy 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span v-else-if="type == 'provider'">
                                    <div class="form-group">
                                        <label>User Name</label>
                                        <input type="email" class="form-control" placeholder="User Name">
                                    </div>
                                    <div class="form-group">
                                        <label>Email address</label>
                                        <input type="email" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> Agree the terms and policy 
                                        </label>
                                    </div>
                                </span>
                                <span v-else-if="type == 'support'">
                                    <div class="form-group">
                                        <label>User Name</label>
                                        <input type="email" class="form-control" placeholder="User Name">
                                    </div>
                                    <div class="form-group">
                                        <label>Email address</label>
                                        <input type="email" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox"> Agree the terms and policy 
                                        </label>
                                    </div>
                                </span>                                
                                <span action="" v-else>
                                    <div class="row mb-5">
                                        <div class="col">
                                            <div class="card m-1 p-5">
                                                <div class="btn bg-emedipay text-white btn-light shadow" @click="setType('provider')">
                                                    Provider
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card m-1 p-5">
                                                <div class="btn bg-emedipay text-white btn-light shadow" @click="setType('user')">
                                                    User
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card m-1 p-5">
                                                <div class="btn bg-emedipay text-white btn-light shadow" @click="setType('support')">
                                                    Support
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span class="buttons" :class="{ 'show-buttons' : showButtons }">
                                    <button type="submit" class="btn btn-primary btn-flat m-b-30 m-t-30">Register</button>
                                    <div class="social-login-content">
                                        <div class="social-button">
                                            <button type="button" class="btn btn-primary bg-google-plus btn-flat btn-addon m-b-10"><i class="ti-google"></i>Register with google</button>
                                            <button type="button" class="btn btn-primary bg-facebook btn-flat btn-addon m-t-10"><i class="ti-facebook"></i>Register with facebook</button>
                                            <button type="button" class="btn btn-primary bg-linkedin btn-flat btn-addon m-t-10"><i class="ti-linkedin"></i>Register with linkedin</button>
                                            <button type="button" class="btn btn-primary bg-twitter btn-flat btn-addon m-t-10"><i class="ti-twitter"></i>Register with twitter</button>
                                        </div>
                                    </div>
                                    <div class="register-link m-t-15 text-center">
                                        <p>Already have account ? <router-link to="/"> Login</router-link></p>
                                    </div>
                                </span>
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
  name: "RegisterView",
  data:  function() {
    return {
        type : "",
        showButtons: false,
        support: {
            fname: "",
            lname: "",
            oname: "",
            country: "",
            address: "",
            state: "",
            city: "",
            contact: "",
            email: "",
            password: ""
        },
        provider: {
            name: "",
            country: "",
            address: "",
            city: "",
            zip: "",
            email: "",
            contact: "",
            healthCare: ""
        },
        user: {
            fname: "",
            lname: "",
            oname: "",
            country: "",
            address: "",
            state: "",
            city: "",
            contact: "",
            email: "",
            password: ""
        }
    };
  },
  methods: {
    setType: function(text) {
        this.type = text;
        this.showButtons = true;
    }
  },
  components: {

  }
}
</script>