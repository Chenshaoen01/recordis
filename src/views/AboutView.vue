<template>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <div class="container max-w-xl">
    <!-- 上半 -->
    <div class="row mt-5 mb-3">
      <!-- 左邊 -->
      <div class="col" data-aos="fade-down" data-aos-duration="1000">
         <!-- 左上 -->
         <div id="aboutUsImg1" class="w-100 bg-light mb-3 about-img-sm"></div>
         <!-- 左下 -->
         <div class="w-100 border border-2 border-dark mb-3 d-flex flex-column
          justify-content-center align-items-center about-text-sm">
          <h2 class="fw-bold mb-5 px-2">
            有機栽種 <br class="d-block d-md-none">安全衛生
          </h2>
          <p class="fw-bold">產地新鮮直送</p>
          <p class="fw-bold">讓您吃的安心健康</p>
         </div>
      </div>
      <!-- 右邊 -->
      <div class="col" data-aos="fade-up" data-aos-duration="1000">
          <!-- 右上 -->
         <div class="w-100 border border-2 border-dark mb-3 d-flex flex-column
          justify-content-center align-items-center about-text-sm">
            <h2 class="fw-bold mb-5 px-2">
              手工麵條 <br class="d-block d-md-none">口感獨特
            </h2>
            <p class="fw-bold">麵條每日手工製造</p>
            <p class="fw-bold">獨特的口感令人難忘</p>
         </div>
         <!-- 右下 -->
         <div id="aboutUsImg2" class="w-100 bg-light mb-3 about-img-sm"></div>
      </div>
    </div>
    <!-- 下半 -->
    <div class="mb-5" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
      <div id="aboutUsImg3" class="bg-danger w-100 mb-3 about-img-lg"></div>
      <div class="w-100 border border-2 border-dark mb-3 d-flex flex-column
          justify-content-center align-items-center about-text-lg">
          <h2 class="fw-bold mb-5 text-center">
            Recordis <br class="d-block d-md-none"> 在拉丁文中代表著記憶
          </h2>
          <p class="fw-bold">兒時第一次嚐到義大利麵的新奇口感</p>
          <p class="fw-bold">學生時期伴隨朋友嘻笑入口的濃郁歡樂</p>
          <p class="fw-bold mb-5">與家人一起分享佳餚時的平凡幸福</p>
          <p class="fw-bold">期待在Recordis與您相遇</p>
          <p class="fw-bold">與您細細品嚐過去的回憶</p>
          <p class="fw-bold">也在這裡創造更多美好體驗</p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import LoadingPage from './LoadingPage.vue';

export default {
  components: {
    LoadingPage,
  },
  created() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    AOS.init();
  },
};
</script>
