<template>
    <div class="d-flex align-items-center emedipay-modal">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card shadow-lg">
                        <div class="card-header">
                            <div class="row">
                                <div class="col h2">Modal Header</div>
                                <div class="col text-end">
                                    <div class="btn" v-on:click="goBack()"><i class="fa-solid fa-close fa-2x"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">                            
                            <form class="row g-3">
                                <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4">
                                </div>
                                <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4">
                                </div>
                                <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                                </div>
                                <div class="col-12">
                                <label for="inputAddress2" class="form-label">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                                </div>
                                <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity">
                                </div>
                                <div class="col-md-4">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                                <div class="col-md-2">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip">
                                </div>
                                <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                    Check me out
                                    </label>
                                </div>
                                </div>
                                <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ModalView",
  /* data:  function() {
        return {
            user: {
                name: "Hello",
                email: "hello@gmail.com",
                password: ""
            }
        };
    }, */
  methods: {
    goBack: function() {
        this.$router.go(-1); 
    }
  },
  components: {
  },
};
</script>

<style scoped>
.emedipay-modal{
    width: 100%; height: 100vh; position: absolute; background: rgba(0, 0, 0, 0.80); top:0; position: fixed; z-index: 300;
}
</style>