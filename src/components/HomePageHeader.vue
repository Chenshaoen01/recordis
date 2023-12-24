<template>
  <div class="w-100 height-md opacity-100 position-absolute overflow-hidden
   justify-content-center" id="homePageHeader">
    <img :src="require(`../assets/images/others/${item}`)" alt=""
     class="homepage-header-image position-absolute"
     v-for="(item, index) in imgUrl" :key="item+index">
  </div>
  <div class="position-relative d-flex flex-column justify-content-center
     align-items-center" id="homepage-header-content">
    <img src="../assets/images/LOGO/logo1.png" class="width-sm height-sm" alt="header-img">
    <div class="text-dark mt-3 d-flex flex-column flex-md-row">
      <router-link to="/about" class="text-dark fs-4 fw-bold
       text-decoration-none mb-2 mb-md-0">
        關於我們
      </router-link>
      <span class="mx-5 fs-4 d-none d-md-block">X</span>
      <router-link to="/productlist" class="text-dark fs-4 fw-bold
       text-decoration-none mb-2 mb-md-0">
        菜單介紹
      </router-link>
      <span class="mx-5 fs-4 d-none d-md-block">X</span>
      <router-link to="/reservation" class="text-dark fs-4 fw-bold
       text-decoration-none mb-2 mb-md-0">
        線上訂位
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: [
        'headerImg-1.jpg',
        'headerImg-2.jpg',
        'headerImg-3.jpg',
      ],
    };
  },
};
</script>
