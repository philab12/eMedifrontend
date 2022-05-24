<template>
  <div class="row">
      <div class="col-lg-8 p-r-0 title-margin-right">
          <div class="page-header">
              <div class="page-title">
                  <h1>{{ page }},
                      <span>{{ pageDesc }}</span>
                  </h1>
              </div>
          </div>
      </div>
      <!-- /# column -->
      <div class="col-lg-4 p-l-0 title-margin-left">
          <div class="page-header">
              <div class="page-title">
                  <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                          <router-link to="/">Home</router-link>
                      </li>
                      <li class="breadcrumb-item active">{{ page }}</li>
                  </ol>
              </div>
          </div>
      </div>
      <!-- /# column -->
  </div>
  <!-- /# row-->
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    page: String,
    pageDesc: String
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>