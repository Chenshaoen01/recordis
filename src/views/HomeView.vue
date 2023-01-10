<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div class="home">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
      <div class="container-fluid">
        <img src="../assets/images/LOGO/logo4.png" style="width:150px;" alt="">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
         data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="bi bi-list text-white fs-3"></i></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item d-flex align-items-center">
              <a class="nav-link text-white me-3" aria-current="page" href="#">首頁</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <a class="nav-link text-white me-3" href="#">關於我們</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <a class="nav-link text-white me-3" href="#">菜單介紹</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <a class="nav-link text-white me-3 fs-4" href="#">
                <i class="bi bi-bag-heart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
    <div class="container w-75 my-4">
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
    <!-- footer -->
    <div class="bg-dark pt-5" style="width:100%;">
      <div class="w-75 mx-auto d-flex justify-content-center border-top border-bottom pt-4">
        <div class="me-5 my-auto">
          <img src="../assets/images/LOGO/logo2.png" style="width:150px; height:150px;" alt="">
        </div>
        <div>
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
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>
