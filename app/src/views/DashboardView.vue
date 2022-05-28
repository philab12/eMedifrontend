<template>
    <div>
        <SideBarComp/>
        <NavBarComp/>
        <div class="content-wrap">
            <div class="main">
                <div class="container-fluid">
                    <HeaderComp page="Dashboard" pageDesc="visual display of all of your data"/>
                    
                    <section id="main-content">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="ti-money color-success border-success"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Total Profit</div>
                                            <div class="stat-digit">1,012</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="ti-user color-primary border-primary"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">New Patients</div>
                                            <div class="stat-digit">961</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="ti-layout-grid2 color-pink border-pink"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Active Projects</div>
                                            <div class="stat-digit">770</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="ti-link color-danger border-danger"></i></div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Referral</div>
                                            <div class="stat-digit">2,781</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterComp/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "@/components/HeaderComp.vue"
import FooterComp from "@/components/FooterComp.vue"
import SideBarComp from "@/components/SideBarComp.vue"
import NavBarComp from "@/components/NavBarComp.vue"

export default {
    name: "DashboardView",
    data:  function() {
    },
    components: {
        HeaderComp,
        FooterComp,
        SideBarComp, 
        NavBarComp,
    },
    props: {
  }
};
</script>