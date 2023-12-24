<template>
  <div id="spinnerloading" class="d-none top-0">
    <div class="position-fixed top-50 start-50 translate-middle">
      <div class="spinner-border text-white mx-auto" role="status"></div>
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
