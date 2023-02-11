<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top" id="navBar">
    <div class="container-fluid">
      <router-link to="/">
        <img src="./assets/images/LOGO/logo4.png" style="width:150px;" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <i class="bi bi-list text-white fs-3"></i>
        </span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item d-flex align-items-center">
            <router-link to="/" class="nav-link text-white me-3">首頁</router-link>
          </li>
          <li class="nav-item d-flex align-items-center">
            <router-link to="/about" class="nav-link text-white me-3">關於我們</router-link>
          </li>
          <li class="nav-item d-flex align-items-center">
            <router-link to="/productList" class="nav-link text-white me-3">菜單介紹</router-link>
          </li>
          <li class="nav-item d-flex align-items-center">
            <router-link to="/reservation" class="nav-link text-white me-3">線上訂位</router-link>
          </li>
          <li class="nav-item d-flex align-items-center">
            <button class="btn bg-none border-none nav-link text-white me-3 fs-4 position-relative"
             href="" @click="openOrderModal" @keypress="enter">
              <i class="bi bi-bag-heart"></i>
              <span class="position-absolute px-1 start-100 translate-middle
               rounded-pill bg-danger fs-6" style="top:10px; min-width:25px;">
                {{this.amoutOfOrders}}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view @updateQty="updateOrderQty"/>
  <!-- 預約外帶 Modal -->
  <orderModal ref="orderModal" @updateAmoutOfOrders="countAmoutOfOrders"></orderModal>
  <!-- footer -->
  <div class="bg-dark pt-5" style="width:100%;">
    <div class="w-75 mx-auto d-flex flex-column flex-md-row
     justify-content-center align-items-center border-top border-bottom pt-4">
      <div class="me-0 me-md-5 my-auto">
        <img src="./assets/images/LOGO/logo2.png" style="width:150px; height:150px;" alt="">
      </div>
      <div class="mt-3 mt-md-0">
        <p class="text-white">
          Line 官方社群 ：<a href="#" class="text-white text-decoration-none">Recordis Pasta</a>
        </p>
        <p class="text-white">
          FaceBook ：<a href="#" class="text-white text-decoration-none">Recordis Pasta</a>
        </p>
        <p class="text-white">
          Instagram ：<a href="#" class="text-white text-decoration-none">Recordis Pasta</a>
        </p>
        <p class="text-white">
          Email：<a href="#" class="text-white text-decoration-none">recordis@gmail.com</a>
        </p>
        <p class="text-white">
          Email：<a href="#" class="text-white text-decoration-none">recordis@gmail.com</a>
        </p>
      </div>
    </div>
    <div class="w-75 mx-auto d-flex-column align-items-center justify-content-center py-4">
      <p class="text-white text-center">CopyRight © recordis all rights reserved 2023</p>
      <p class="text-white text-center">僅作為個人作品使用 ，無商業用途 </p>
    </div>
  </div>
  <button type="button" class="btn position-fixed end-0 bottom-0 m-4 bg-dark" @click="backToTop">
    <i class="bi bi-arrow-up-square fs-3 text-white"></i>
  </button>
</template>

<style lang="scss">
@import '../src/assets/all.scss';
</style>

<script>
import orderModal from './components/OrderModal.vue';

export default {
  data() {
    return {
      amoutOfOrders: 0,
    };
  },
  components: {
    orderModal,
  },
  methods: {
    openOrderModal() {
      this.$refs.orderModal.getCartContent();
      this.$refs.orderModal.modalShow();
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    scroll() {
      const navBar = document.getElementById('navBar');
      console.log(navBar);
    },
    countAmoutOfOrders(amout) {
      this.amoutOfOrders = amout;
    },
    updateOrderQty() {
      console.log('updateOrderQty');
      this.$refs.orderModal.getCartContent();
    },
  },
  created() {
  },
};
</script>
