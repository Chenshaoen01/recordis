<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div class="home">
    <!-- header -->
    <div class="position-absolute d-flex justify-content-center
     align-items-center" id="homepage-header">
    </div>
    <!-- header content -->
    <div class="position-relative d-flex flex-column justify-content-center
     align-items-center" id="homepage-header-content">
      <img src="../assets/images/LOGO/logo2.png" style="width:300px; height:300px" alt="header-img">
      <div class="text-white mt-3">
        <a href="#" class="text-white fs-4 text-decoration-none">關於我們</a>
        <span class="mx-5 fs-4">X</span>
        <a href="#" class="text-white fs-4 text-decoration-none">菜單介紹</a>
        <span class="mx-5">X</span>
        <a href="#" class="text-white fs-4 text-decoration-none">預約外帶</a>
      </div>
    </div>
    <!-- 品牌理念 -->
    <div class="container mt-4 d-flex flex-column align-items-center justify-contnent-center">
      <div id="introduction1"
      class="w-100 d-flex justify-content-center align-items-end">
        <div id="introduction1-box" class="position-relative mb-5 border border-dark border-2
         d-flex justify-content-lg-end  justify-content-center align-items-end">
          <div id="introduction1-img"
          class="position-absolute"></div>
          <div id="introduction1-text">
            <h1 class="fw-bold mb-5">對品質的堅持</h1>
            <p class="fs-3">有機栽種安全衛生</p>
            <p class="fs-3">手工麵條口感獨特</p>
          </div>
        </div>
      </div>
      <div id="introduction2"
      class="w-100 d-flex justify-content-center align-items-end">
        <div id="introduction2-box" class="position-relative mb-5 border border-dark border-2
         d-flex justify-content-lg-start justify-content-center align-items-end">
          <div id="introduction2-img"
          class="position-absolute"></div>
          <div id="introduction2-text" class="text-center">
            <h2 class="fw-bold">Recordis</h2>
            <h2 class="fw-bold mb-5">在拉丁文中代表著記憶</h2>
            <p class="fs-6 lh-sm">兒時第一次嚐到義大利麵的新奇口感</p>
            <p class="fs-6 lh-sm">學生時期伴隨朋友嘻笑入口的濃郁歡樂</p>
            <p class="fs-6 lh-sm">與家人一起分享佳餚時的平凡幸福</p>
            <p class="fs-6 lh-sm">期待在Recordis與您相遇</p>
            <p class="fs-6 lh-sm">與您細細品嚐過去的回憶</p>
            <p class="fs-6 lh-sm">也在這裡創造更多美好體驗</p>
          </div>
        </div>
      </div>
      <button type="button" class="mb-5 mx-auto btn btn-dark" style="width:150px;">
          查看品牌理念
      </button>
    </div>
    <!-- 推薦餐點 -->
    <div>
      <div class="position-relative" style="height:50px;">
        <div class="bg-dark position-absolute top-50" style="width:100%; height:1px"></div>
        <span class="bg-white position-absolute start-50 top-50 translate-middle
         fw-bolder fs-4 text-dark text-center mx-auto px-3">
          推薦餐點
        </span>
      </div>
    </div>
    <!-- 餐點卡片 -->
    <div class="container my-4">
      <div class="row g-3 gx-xl-0 row-cols-2 row-cols-lg-3">
        <div class="col d-flex justify-content-center">
          <div class="card border-dark" style="width: 18rem;">
            <img src="../assets/images/pasta/pexels-lisa-fotios-1279330.jpg"
             class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">青醬蛤蜊義大利麵</h5>
              <p class="card-text">$120</p>
            </div>
            <div class="d-flex" style="height:30px;">
              <a class="d-block text-dark text-center text-decoration-none
            border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
              <a class="d-block text-dark text-center text-decoration-none w-50 lh-lg" href="#">
                預約外帶
              </a>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card border-dark" style="width: 18rem;">
            <img src="../assets/images/pasta/pexels-federico-ramirez-12006395.jpg"
             class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">青醬蛤蜊義大利麵</h5>
              <p class="card-text">$120</p>
            </div>
            <div class="d-flex" style="height:30px;">
              <a class="d-block text-dark text-center text-decoration-none
            border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
              <a class="d-block text-dark text-center text-decoration-none w-50 lh-lg" href="#">
                預約外帶
              </a>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card border-dark" style="width: 18rem;">
            <img src="../assets/images/pasta/pexels-federico-ramirez-12006395.jpg"
             class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">青醬蛤蜊義大利麵</h5>
              <p class="card-text">$120</p>
            </div>
            <div class="d-flex" style="height:30px;">
              <a class="d-block text-dark text-center text-decoration-none
            border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
              <a class="d-block text-dark text-center text-decoration-none w-50 lh-lg" href="#">
                預約外帶
              </a>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card border-dark" style="width: 18rem;">
            <img src="../assets/images/pasta/pexels-federico-ramirez-12006395.jpg"
             class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">青醬蛤蜊義大利麵</h5>
              <p class="card-text">$120</p>
            </div>
            <div class="d-flex" style="height:30px;">
              <a class="d-block text-dark text-center text-decoration-none
            border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
              <a class="d-block text-dark text-center text-decoration-none w-50 lh-lg" href="#">
                預約外帶
              </a>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card border-dark" style="width: 18rem;">
            <img src="../assets/images/pasta/pexels-federico-ramirez-12006395.jpg"
             class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">青醬蛤蜊義大利麵</h5>
              <p class="card-text">$120</p>
            </div>
            <div class="d-flex" style="height:30px;">
              <a class="d-block text-dark text-center text-decoration-none
            border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
              <a class="d-block text-dark text-center text-decoration-none w-50 lh-lg" href="#">
                預約外帶
              </a>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center">
          <div class="card border-dark" style="width: 18rem;">
            <img src="../assets/images/pasta/pexels-federico-ramirez-12006395.jpg"
             class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">青醬蛤蜊義大利麵</h5>
              <p class="card-text">$120</p>
            </div>
            <div class="d-flex" style="height:30px;">
              <a class="d-block text-dark text-center text-decoration-none
            border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
              <a class="d-block text-dark text-center text-decoration-none w-50 lh-lg" href="#">
                預約外帶
              </a>
            </div>
          </div>
        </div>
        <button type="button" class="mt-5 mb-3 mx-auto btn btn-dark" style="width:150px;">
          查看所有餐點
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>
