<template>
    <div class="toast position-fixed end-0 shadow-none" role="alert"
     aria-live="assertive" aria-atomic="true" style="top: 90px">
        <div class="toast-body bg-dark text-white">
           {{ messageReceived }}
        </div>
    </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  data() {
    return {
      toast: [],
    };
  },
  props: ['messageReceived'],
  methods: {
    toastShow() {
      this.toast.forEach((item) => {
        item.show();
      });
    },
  },
  mounted() {
    const toastElList = document.querySelectorAll('.toast');
    toastElList.forEach((item) => {
      const newToast = new Toast(item);
      this.toast.push(newToast);
    });
  },
};
</script>
