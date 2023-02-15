<template>
  <div class="w-100 opacity-100 position-absolute overflow-hidden
   d-flex justify-content-center" id="homePageHeader" style="height:500px;">
    <img :src="require(`../assets/images/others/${currentHeaderImgSrc}.jpg`)"
     alt="" id="homepage-header-image">
  </div>
  <div class="position-relative d-flex flex-column justify-content-center
     align-items-center" id="homepage-header-content">
    <img src="../assets/images/LOGO/logo1.png" style="width:250px; height:250px" alt="header-img">
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
      currentParams: '',
      currentImgNum: 1,
      currentHeaderImgSrc: '',
      ImgSrcTest: 'pexels-thiea-alhoz-5604815',
      imgSrc: [
        'headerImg-1',
        'headerImg-2',
        'headerImg-3',
      ],
      keepInterval: true,
    };
  },
  methods: {
    changeHeaderImg() {
      if (this.currentImgNum !== 3) {
        // 切換圖片
        this.currentImgNum += 1;
        this.currentHeaderImgSrc = this.imgSrc[this.currentImgNum - 1];
      } else if (this.currentImgNum === 3) {
        // 切換圖片
        this.currentImgNum = 1;
        this.currentHeaderImgSrc = this.imgSrc[this.currentImgNum - 1];
      }
      setTimeout(() => {
        setInterval(() => {
          if (this.currentImgNum !== 3) {
            // 切換圖片
            this.currentImgNum += 1;
            this.currentHeaderImgSrc = this.imgSrc[this.currentImgNum - 1];
          } else if (this.currentImgNum === 3) {
            // 切換圖片
            this.currentImgNum = 1;
            this.currentHeaderImgSrc = this.imgSrc[this.currentImgNum - 1];
          }
        }, 5000);
      }, 2000);
      const changeImgOpacity = setInterval(() => {
        if (this.keepInterval === true) {
          const homePageHeader = document.getElementById('homePageHeader');

          setTimeout(() => {
            homePageHeader.classList.remove('opacity-100');
            homePageHeader.classList.add('opacity-0');
          }, 0);
          setTimeout(() => {
            homePageHeader.classList.remove('opacity-0');
            homePageHeader.classList.add('opacity-100');
          }, 2500);
        }
      }, 5000);
      setInterval(() => {
        if (this.keepInterval === false) {
          // clearInterval(changeImgNum);
          clearInterval(changeImgOpacity);
        }
      }, 3000);
    },
  },
  created() {
    // 顯示預設的第一張圖片
    this.currentHeaderImgSrc = this.imgSrc[this.currentImgNum - 1];
  },
  mounted() {
    this.changeHeaderImg();
    const homePageHeader = document.getElementById('homePageHeader');

    homePageHeader.classList.remove('opacity-100');
    homePageHeader.classList.add('opacity-0');

    setTimeout(() => {
      homePageHeader.classList.remove('opacity-0');
      homePageHeader.classList.add('opacity-100');
    }, 2500);
  },
  beforeUnmount() {
    this.keepInterval = false;
  },
};
</script>
