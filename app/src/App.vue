<template>
  <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
    <div class="nano">
      <div class="nano-content">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/eMedipay-logo-white.png" alt=""  style="height: 45px;"/>
          </router-link>
        </div>
        <ul>
          <li class="label">Main</li>
          <li>
            <router-link to="/">
              <i class="ti-calendar"></i> Dashboard
            </router-link>
          </li>
          <li class="label">Apps</li>
          <li>
            <router-link to="/page-one">
              <i class="ti-calendar"></i> Page One
            </router-link>
          </li>
          <li>
            <router-link to="/page-two">
              <i class="ti-calendar"></i> Page Two
            </router-link>
          </li>
          <li>
            <router-link to="/page-three">
              <i class="ti-calendar"></i> Page Three
            </router-link>
          </li>
          <li>
            <router-link to="/page-four">
              <i class="ti-calendar"></i> Page Four
            </router-link>
          </li>
          <li>
            <router-link to="/page-five">
              <i class="ti-calendar"></i> Page Five
            </router-link>
          </li>
          <!--<li>
            <a class="sidebar-sub-toggle">
              <i class="ti-bar-chart-alt"></i> Dropdown Menu
              <span class="sidebar-collapse-icon ti-angle-down"></span>
            </a>
            <ul>
              <li>
                <router-link to="/page-one">Menu One</router-link>
              </li>
              <li>
                <router-link to="/page-two">Menu Two</router-link>
              </li>
              <li>
                <router-link to="/page-three">Menu Three</router-link>
              </li>
              <li>
                <router-link to="/page-four">Menu Four</router-link>
              </li>
              <li>
                <router-link to="/page-five">Menu Five</router-link>
              </li>
            </ul>
          </li>-->
        </ul>
      </div>
    </div>
  </div>
  <!-- /# sidebar -->
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="float-left">
            <div class="hamburger sidebar-toggle">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </div>
          </div>
          <div class="float-right">
            <div class="dropdown dib">
              <div class="header-icon" data-toggle="dropdown">
                <i class="ti-bell"></i>
                <div class="drop-down dropdown-menu dropdown-menu-right">
                  <div class="dropdown-content-heading">
                    <span class="text-left">Recent Notifications</span>
                  </div>
                  <div class="dropdown-content-body">
                    <ul>
                      <li>
                        <router-link to="#">
                          <img
                            class="pull-left m-r-10 avatar-img"
                            src="@/assets/avatar.jpg"
                            alt=""
                          />
                          <div class="notification-content">
                            <small class="notification-timestamp pull-right"
                              >02:34 PM</small
                            >
                            <div class="notification-heading">Mr. John</div>
                            <div class="notification-text">
                              5 members joined today
                            </div>
                          </div>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="#">
                          <img
                            class="pull-left m-r-10 avatar-img"
                            src="@/assets/avatar.jpg"
                            alt=""
                          />
                          <div class="notification-content">
                            <small class="notification-timestamp pull-right"
                              >02:34 PM</small
                            >
                            <div class="notification-heading">Mariam</div>
                            <div class="notification-text">
                              likes a photo of you
                            </div>
                          </div>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="#">
                          <img
                            class="pull-left m-r-10 avatar-img"
                            src="@/assets/avatar.jpg"
                            alt=""
                          />
                          <div class="notification-content">
                            <small class="notification-timestamp pull-right"
                              >02:34 PM</small
                            >
                            <div class="notification-heading">Tasnim</div>
                            <div class="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="#">
                          <img
                            class="pull-left m-r-10 avatar-img"
                            src="@/assets/avatar.jpg"
                            alt=""
                          />
                          <div class="notification-content">
                            <small class="notification-timestamp pull-right"
                              >02:34 PM</small
                            >
                            <div class="notification-heading">Mr. John</div>
                            <div class="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </router-link>
                      </li>
                      <li class="text-center">
                        <router-link to="#" class="more-link"
                          >See All</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown dib">
              <div class="header-icon" data-toggle="dropdown">
                <i class="ti-email"></i>
                <div class="drop-down dropdown-menu dropdown-menu-right">
                  <div class="dropdown-content-heading">
                    <span class="text-left">2 New Messages</span>
                    <router-link to="email.html">
                      <i class="ti-pencil-alt pull-right"></i>
                    </router-link>
                  </div>
                  <div class="dropdown-content-body">
                    <ul>
                      <li class="notification-unread">
                        <router-link to="#">
                          <img
                            class="pull-left m-r-10 avatar-img"
                            src="@/assets/avatar.jpg"
                            alt=""
                          />
                          <div class="notification-content">
                            <small class="notification-timestamp pull-right"
                              >02:34 PM</small
                            >
                            <div class="notification-heading">Michael Qin</div>
                            <div class="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </router-link>
                      </li>
                      <li class="notification-unread">
                        <router-link to="#">
                          <img
                            class="pull-left m-r-10 avatar-img"
                            src="@/assets/avatar.jpg"
                            alt=""
                          />
                          <div class="notification-content">
                            <small class="notification-timestamp pull-right"
                              >02:34 PM</small
                            >
                            <div class="notification-heading">Mr. John</div>
                            <div class="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="#">
                          <img
                            class="pull-left m-r-10 avatar-img"
                            src="@/assets/avatar.jpg"
                            alt=""
                          />
                          <div class="notification-content">
                            <small class="notification-timestamp pull-right"
                              >02:34 PM</small
                            >
                            <div class="notification-heading">Michael Qin</div>
                            <div class="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="#">
                          <img
                            class="pull-left m-r-10 avatar-img"
                            src="@/assets/avatar.jpg"
                            alt=""
                          />
                          <div class="notification-content">
                            <small class="notification-timestamp pull-right"
                              >02:34 PM</small
                            >
                            <div class="notification-heading">Mr. John</div>
                            <div class="notification-text">
                              Hi Teddy, Just wanted to let you ...
                            </div>
                          </div>
                        </router-link>
                      </li>
                      <li class="text-center">
                        <router-link to="#" class="more-link"
                          >See All</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown dib">
              <div class="header-icon" data-toggle="dropdown">
                <span class="user-avatar"
                  >John
                  <i class="ti-angle-down f-s-10"></i>
                </span>
                <div
                  class="
                    drop-down
                    dropdown-profile dropdown-menu dropdown-menu-right
                  "
                >
                  <div class="dropdown-content-heading">
                    <span class="text-left">Upgrade Now</span>
                    <p class="trial-day">30 Days Trail</p>
                  </div>
                  <div class="dropdown-content-body">
                    <ul>
                      <li>
                        <router-link to="#">
                          <i class="ti-user"></i>
                          <span>Profile</span>
                        </router-link>
                      </li>

                      <li>
                        <router-link to="#">
                          <i class="ti-email"></i>
                          <span>Inbox</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="#">
                          <i class="ti-settings"></i>
                          <span>Setting</span>
                        </router-link>
                      </li>

                      <li>
                        <router-link to="#">
                          <i class="ti-lock"></i>
                          <span>Lock Screen</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link to="#">
                          <i class="ti-power-off"></i>
                          <span>Logout</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>