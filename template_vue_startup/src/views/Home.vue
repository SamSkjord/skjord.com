<script>
export default {
}
</script>

<template>
  <card>
    <card-body class="p-0">
      <!-- BEGIN profile -->
      <div class="profile">
        <!-- BEGIN profile-container -->
        <div class="profile-container">
          <!-- BEGIN profile-sidebar -->
          <div class="profile-sidebar">
            <div class="desktop-sticky-top">
              <!-- profile info -->
              <h4>Skjord Ltd</h4>

              <p>
                Skjord helps organisations connect their systems, see what's really happening, and keep critical operations running smoothly.
              </p>
              <p>
                We specialise in integrating security and building platforms, making data observable with clear dashboards, and delivering custom monitoring solutions where off-the-shelf tools fall short.
              </p>
              
              <div class="mb-1">
                <i class="fa fa-map-marker-alt fa-fw text-inverse text-opacity-50"></i> Bristol, UK
              </div>

              <hr class="mt-4 mb-4">
              
              <a href="mailto:contact@skjord.com" target="_blank" class="btn d-block btn-outline-theme mb-3">
                <i class="fa-solid f631 opacity-5"></i> Contact
              </a>

              <a href="https://www.linkedin.com/company/skjord/" target="_blank" class="btn d-block btn-outline-theme mb-3">
                <i class="fa-solid f631 opacity-5"></i> Linkedin
              </a>

              <!--
              <a href="https://skjord.com/motorsport" target="_blank" class="btn d-block btn-outline-theme">
                <i class="fa-solid f631 opacity-5"></i> OpenSource Motorsport
              </a>
              -->
            </div>
            
            <div class="p-3 px-4 mt-auto"></div>
          </div>
          <!-- END profile-sidebar -->

          <!-- BEGIN profile-content -->
          <div class="profile-content">
            <div class="profile-content-container">
              <div class="row gx-4">
                <div class="col-xl-9">
                  <div class="tab-content p-0">
                    <!-- BEGIN tab-pane -->
                    <div class="tab-pane fade show active" id="profile-post">
                      <card class="mb-3">
                        <card-body>
                          <!-- post header -->
                          <div class="d-flex align-items-center mb-3">
                            <div class="flex-fill ps-2">
                              <div class="fw-bold">
                                We help organisations get more value from their systems through seamless integration, clear observability, and actionable monitoring.
                              </div>
                            </div>
                          </div>

                          <!-- post content -->
                          <p>
                            <div class="fw-bold">Integrate</div>
                            Connect security, access control, and building management platforms with modern APIs and cloud services. We design and deliver scalable integrations that reduce duplication, simplify workflows, and extend the capabilities of existing infrastructure.
                          </p>

                          <p>
                            <div class="fw-bold">Observe</div>
                            Surface the right data with tools like InfluxDB, Grafana, and custom dashboards. We make complex environments transparent so teams can understand performance in real time and spot issues before they escalate.
                          </p>

                          <p>
                            <div class="fw-bold">Act</div>
                            Off-the-shelf monitoring rarely covers every need. We build tailored alerting and response systems for critical hardware and software, from LoRaWAN devices to enterprise security platforms—ensuring the right people know when to take action.
                          </p>

                          <p>
                            <div class="fw-bold">
                              At Skjord, we focus on practical engineering—bridging legacy systems with modern architectures to deliver solutions that are robust, maintainable, and built around real customer needs.
                            </div>
                          </p>
                        </card-body>
                      </card>
                    </div>
                    <!-- END tab-pane -->
                  </div>
                </div>

                <div class="col-xl-3">
                  <div class="desktop-sticky-top d-none d-lg-block">
                    <card class="mb-3">
                      <div class="list-group list-group-flush">
                        <div class="list-group-item fw-bold px-3 d-flex">
                          <span class="flex-fill">Key Integrations</span>
                        </div>

                        <div class="list-group-item px-3">
                          <card class="mb-1">
                            <card-body>
                              <img src="/assets/logos/avigilon.png" alt="Avigilon" class="card-img-top" />
                            </card-body>
                          </card>
                        </div>

                        <div class="list-group-item px-3">
                          <card class="mb-1">
                            <card-body>
                              <img src="/assets/logos/axis.png" alt="Axis" class="card-img-top" />
                            </card-body>
                          </card>
                        </div>

                        <div class="list-group-item px-3">
                          <card class="mb-1">
                            <card-body>
                              <img src="/assets/logos/ccure.png" alt="CCure" class="card-img-top" />
                            </card-body>
                          </card>
                        </div>

                        <div class="list-group-item px-3">
                          <card class="mb-1">
                            <card-body>
                              <img src="/assets/logos/gallagher.png" alt="Gallagher" class="card-img-top" />
                            </card-body>
                          </card>
                        </div>

                        <div class="list-group-item px-3">
                          <card class="mb-1">
                            <card-body>
                              <img src="/assets/logos/genetec.png" alt="Genetec" class="card-img-top" />
                            </card-body>
                          </card>
                        </div>
                      </div>
                    </card>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END profile-content -->
        </div>
        <!-- END profile-container -->
      </div>
      <!-- END profile -->
    </card-body>
  </card>
</template>
