<template>
    <div class="container my-4">
        <!-- 麵包屑 -->
        <p class="fw-bold">目前頁面：菜單介紹 / 青醬蛤蜊義大利麵</p>
        <div class="d-flex flex-column flex-md-row">
            <!-- 圖片 -->
            <div class="mb-3 me-md-4" style="width:500px;">
                <img src="../assets/images/pasta/pexels-federico-ramirez-12006395.jpg"
                 class="w-100" alt="">
            </div>
            <!-- 餐點資訊 -->
            <div>
                <h1 class="fw-bold">青醬蛤蜊義大利麵</h1>
                <h3 class="fw-bold mb-4">$120</h3>
                <p class="fw-bold fs-5 mb-4">細心研磨的羅勒與堅果造就青醬濃郁的基底，搭配煙燻雞肉達到解膩效果</p>
                <div class="bg-dark mb-4" style="height:1px"></div>
                <h3 class="fw-bold mb-4">預約餐點</h3>
                <div class="d-flex justify-align-start align-items-center">
                    <h4 class="fw-bold d-block" style="width:100px">數量</h4>
                    <ul class="list-group list-group-horizontal w-100">
                        <li class="list-group-item"><span>-</span></li>
                        <li class="list-group-item w-25 text-center"><span>1</span></li>
                        <li class="list-group-item"><span>+</span></li>
                    </ul>
                </div>
                <div class="mt-5 mb-3 w-100 d-flex justify-content-center">
                    <button type="button" class="btn btn-dark" style="width:150px;">查看所有餐點</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 分隔線 -->
    <div class="position-relative" style="height:50px;">
        <div class="bg-dark position-absolute top-50" style="width:100%; height:1px"></div>
        <span class="bg-white position-absolute start-50 top-50 translate-middle
         fw-bolder fs-4 text-dark text-center mx-auto px-3">
            推薦餐點
        </span>
    </div>
    <!-- 推薦餐點 -->
    <div class="container my-4">
       <div class="row g-3 row-cols-1 row-cols-md-3">
         <div class="col d-flex justify-content-center">
                    <div class="card border-dark">
                        <img src="../assets/images/pasta/pexels-lisa-fotios-1279330.jpg"
                         class="card-img-top" alt="...">
                        <div class="card-body border-bottom border-dark">
                            <h5 class="card-title">青醬蛤蜊義大利麵</h5>
                            <p class="card-text">$120</p>
                        </div>
                        <div class="d-flex" style="height:30px;">
                            <a class="d-block text-dark text-center text-decoration-none
            border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
                            <a class="d-block text-dark text-center text-decoration-none w-50
                             lh-lg" href="#">
                                預約外帶
                            </a>
                        </div>
                    </div>
         </div>
         <div class="col d-flex justify-content-center">
                    <div class="card border-dark">
                        <img src="../assets/images/pasta/pexels-federico-ramirez-12006395.jpg"
                         class="card-img-top"
                            alt="...">
                        <div class="card-body border-bottom border-dark">
                            <h5 class="card-title">青醬蛤蜊義大利麵</h5>
                            <p class="card-text">$120</p>
                        </div>
                        <div class="d-flex" style="height:30px;">
                            <a class="d-block text-dark text-center text-decoration-none
                              border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
                            <a class="d-block text-dark text-center text-decoration-none w-50
                             lh-lg" href="#">
                                預約外帶
                            </a>
                        </div>
                    </div>
         </div>
         <div class="col d-flex justify-content-center">
                    <div class="card border-dark">
                        <img src="../assets/images/pasta/pexels-federico-ramirez-12006395.jpg"
                         class="card-img-top"
                            alt="...">
                        <div class="card-body border-bottom border-dark">
                            <h5 class="card-title">青醬蛤蜊義大利麵</h5>
                            <p class="card-text">$120</p>
                        </div>
                        <div class="d-flex" style="height:30px;">
                            <a class="d-block text-dark text-center text-decoration-none
            border-end border-dark w-50 lh-lg" href="#">詳細資訊</a>
                            <a class="d-block text-dark text-center text-decoration-none w-50
                             lh-lg" href="#">
                                預約外帶
                            </a>
                        </div>
                    </div>
         </div>
       </div>
    </div>
    <div class="mt-5 mb-3 w-100 d-flex justify-content-center">
        <button type="button" class="btn btn-dark" style="width:150px;">
          查看所有餐點
       </button>
    </div>
</template>
