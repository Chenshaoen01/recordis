<template>
    <div id="loading" class="d-none top-0"
     style="width:100vw; height:100vh; z-index:10000000;">
        <div class="position-fixed top-50 start-50 translate-middle">
            <div class="spinner-border text-white"
             style="width: 3rem; height: 3rem;" role="status"></div>
        </div>
    </div>
</template>

<script>
export default {
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
