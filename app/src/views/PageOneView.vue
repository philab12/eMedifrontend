<template>
  <div class="content-wrap">
    <div class="main">
      <div class="container-fluid">
        <BreadCrumbDetails page="Page One" pageDesc="description goes here"/>
        <!-- /# row -->
        <section id="main-content">
          <div class="row">
            <div class="col-lg-12">
              <div id="extra-area-chart"></div>
              <div id="morris-line-chart"></div>
              <FooterDetails/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbDetails from '@/components/BreadCrumbDetails.vue'
import FooterDetails from '@/components/FooterDetails.vue'

export default {
  name: 'page-one',
  components: {
    BreadCrumbDetails,
    FooterDetails
  }
}
</script>