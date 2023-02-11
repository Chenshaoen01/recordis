<template>
  <div id="loading" class="d-none top-0 bg-light"
   style="width:100vw; height:100vh; z-index:10000000;">
    <div class="position-fixed top-50 start-50 translate-middle">
      <img src="../assets/images/LOGO/logo1.png" style="width:300px; height:300px" alt="header-img">
      <br>
      <span class="fs-2 d-block text-center">資料載入中</span>
      <br>
      <div class="progress" role="progressbar" aria-label="Animated striped"
       aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-dark progress-bar-striped progress-bar-animated"
         style="width: 100%"></div>
      </div>
      <!-- <div class="spinner-border text-dark mx-auto"
         style="width: 3rem; height: 3rem;" role="status"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingValue: 25,
    };
  },
  methods: {
    loadingPageShow() {
      const loading = document.getElementById('loading');
      loading.classList.remove('d-none');
    },
    loadingPageHide() {
      const loading = document.getElementById('loading');
      loading.classList.add('d-none');
    },
  },
};
</script>
