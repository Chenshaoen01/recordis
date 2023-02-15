<template>
  <div id="spinnerloading" class="d-none top-0"
   style="width:100vw; height:100vh; z-index:10000005;">
    <div class="position-fixed top-50 start-50 translate-middle">
      <div class="spinner-border text-white mx-auto"
         style="width: 3rem; height: 3rem;" role="status"></div>
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
      const spinnerloading = document.getElementById('spinnerloading');
      spinnerloading.classList.remove('d-none');
    },
    loadingPageHide() {
      const spinnerloading = document.getElementById('spinnerloading');
      spinnerloading.classList.add('d-none');
    },
  },
};
</script>
