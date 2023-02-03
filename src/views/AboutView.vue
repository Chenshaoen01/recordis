<template>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <div class="container" style="max-width:1000px;">
    <!-- 上半 -->
    <div class="row mt-5 mb-3">
      <!-- 左邊 -->
      <div class="col" data-aos="fade-down" data-aos-duration="1000">
         <!-- 左上 -->
         <div class="w-100 bg-light mb-3" style="height:450px;"
          id="aboutUsImg1"></div>
         <!-- 左下 -->
         <div class="w-100 border border-2 border-dark mb-3 d-flex flex-column
          justify-content-center align-items-center" style="height: 300px;">
          <h2 class="fw-bold mb-5">有機栽種安全衛生</h2>
            <p class="fw-bold">產地新鮮直送</p>
            <p class="fw-bold">獨特的口感令人難忘</p>
            <p class="fw-bold">讓您吃的安心健康</p>
         </div>
      </div>
      <!-- 右邊 -->
      <div class="col">
          <!-- 右上 -->
         <div class="w-100 border border-2 border-dark mb-3 d-flex flex-column
          justify-content-center align-items-center"
           data-aos="fade-left" data-aos-duration="1000"
            style="height: 300px;">
            <h2 class="fw-bold mb-5">手工麵條口感獨特</h2>
            <p class="fw-bold">麵條每日手工製造</p>
            <p class="fw-bold">獨特的口感令人難忘</p>
         </div>
         <!-- 右下 -->
         <div class="w-100 bg-light mb-3" style="height: 450px;"
          id="aboutUsImg2" data-aos="fade-up" data-aos-duration="1000"></div>
      </div>
    </div>
    <!-- 下半 -->
    <div class="mb-5" data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
      <div class="bg-danger w-100 mb-3" style="height:250px" id="aboutUsImg3"></div>
      <div class="w-100 border border-2 border-dark mb-3 d-flex flex-column
          justify-content-center align-items-center" style="height:550px">
          <h2 class="fw-bold mb-5">Recordis在拉丁文中代表著記憶</h2>
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
  data() {
    return {

    };
  },
  components: {
    LoadingPage,
  },
  methods: {
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
