<template>
    <div class="modal modal-lg" tabindex="-1" id="advertisementModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-0 position-relative w-100" id="advertisementModalBody">
                    <img class="w-100 overflow-hidden opacity-0"
                    src="../assets/images/advertisement/openingDiscount.gif" alt=""
                    id="advertisementModalImg">
                    <i class="bi bi-x-circle-fill position-absolute fs-3"
                     id="advertisementModalCloseModal" @click="modalClose" @keypress="esc"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    modalShow() {
      this.modal.show();
    },
    modalClose() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal('#advertisementModal');
    this.modalShow();
  },
};
</script>
