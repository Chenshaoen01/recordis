<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <messageToast ref="messageToast" :messageReceived="toastMessage" style="z-index:100">
  </messageToast>
  <div class="home">
    <!-- 廣告Modal -->
    <advertisementModal ref="advertisementModal"></advertisementModal>
    <!-- header -->
    <div class="position-absolute d-flex justify-content-center
     align-items-center" id="homepage-header">
    </div>
    <!-- header content -->
    <div class="position-relative d-flex flex-column justify-content-center
     align-items-center" id="homepage-header-content">
      <img src="../assets/images/LOGO/logo2.png" style="width:300px; height:300px" alt="header-img">
      <div class="text-white mt-3">
        <a href="/#/about" class="text-white fs-4 text-decoration-none">關於我們</a>
        <span class="mx-5 fs-4">X</span>
        <a href="/#/productlist" class="text-white fs-4 text-decoration-none">菜單介紹</a>
        <span class="mx-5">X</span>
        <a href="#" class="text-white fs-4 text-decoration-none">預約外帶</a>
      </div>
    </div>
    <!-- 消費方式 -->
    <div class="container mx-auto" style="max-width:800px;">
      <p class="mx-auto text-center fs-2 fw-bold border border-dark"
       style="width:300px; margin:80px 0 50px 0;">
        消費方式
      </p>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col">
          <div class="d-flex flex-column
           align-items-center text-center mx-2" style="height:350px">
           <img src="../assets/images/others/eatin.png" alt=""
           class="mb-4" style="height:150px">
           <p class="fs-4 fw-bold">內用點餐</p>
           <p class="fs-4">餐點新鮮出爐<br>絕佳美味饗宴</p>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column
           align-items-center text-center mx-2" style="height:350px">
           <img src="../assets/images/others/takeaway.png" alt=""
           class="mb-4" style="height:150px">
           <p class="fs-4 fw-bold">預約外帶</p>
           <p class="fs-4">指定取餐時間<br>省時方便 </p>
          </div>
        </div>
        <div class="col">
          <div class="d-flex flex-column
           align-items-center text-center mx-2" style="height:350px">
           <img src="../assets/images/others/fooddelivery.png" alt=""
           class="mb-4" style="height:150px">
           <p class="fs-4 fw-bold">外送到府</p>
           <p class="fs-4">餐點費用達300元<br>可免費外送</p>
           <p class="fs-6 mt-0">未達300元外送費用50元</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 品牌理念 -->
    <div class="container mt-4 d-flex flex-column align-items-center
     justify-contnent-center" style="max-width:1000px;">
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
    <div class="container my-4" style="max-width:1000px;">
      <div class="row g-3 gx-xl-0 row-cols-2 row-cols-lg-3">
        <div class="col d-flex justify-content-center"
         v-for="(item) in recommandedProducts" :key="item.id">
          <div class="card border-dark" style="width: 18rem;">
            <img :src="item.imageUrl" class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.price }}</p>
            </div>
            <div class="d-flex w-100" style="height:30px;">
              <span class="d-block text-center text-decoration-none
                border-end border-dark w-50 lh-lg link-hover"
                 @click="turnToDetailPage(item.id)" @keyup="esc">
                詳細資訊
              </span>
              <span class="d-block text-center text-decoration-none w-50 lh-lg link-hover"
               @click="QuickAddToCart(item.id)" @keyup="plus">
                預約外帶
              </span>
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
import advertisementModal from '../components/AdvertisementModal.vue';
import LoadingPage from './LoadingPage.vue';
import messageToast from '../components/MessageToast.vue';

export default {
  data() {
    return {
      recommandedProductsId: ['-NLv7XDV7SGeJaegYizF', '-NLv715KqT0NKtudRi4H', '-NLv6lqylqkSJXmEknrw', '-NLv5eDLFEhzT-HdtKwu', '-NLv5rF7LD96Yh6Dkvcb', '-NLv6UA0Xvg4ct9RWnep'],
      recommandedProducts: [],
      toastMessage: '餐點已加入預訂清單',
    };
  },
  emits: ['updateQty'],
  components: {
    advertisementModal, LoadingPage, messageToast,
  },
  methods: {
    getrecommandedProducts(id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/product/${id}`;
      this.axios.get(api).then((res) => {
        this.recommandedProducts.push(res.data.product);
      });
    },
    QuickAddToCart(id) {
      this.$refs.loadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      const data = {
        data: {
          product_id: `${id}`,
          qty: 1,
        },
      };
      this.axios.post(api, data).then((res) => {
        this.$refs.loadingPage.loadingPageHide();
        // 更新 NavBar 的產品數量
        this.$emit('updateQty');
        console.log(res);
        if (res.data.success) {
          this.toastMessage = '餐點已加入預訂清單';
          this.$refs.messageToast.toastShow();
        } else {
          this.toastMessage = '餐點加入預訂清單失敗';
          this.$refs.messageToast.toastShow();
        }
      });
    },
    // 切換到詳細產品資訊頁面
    turnToDetailPage(id) {
      this.$router.push(`/productDetail/${id}`);
    },
  },
  created() {
    this.recommandedProductsId.forEach((item) => {
      this.getrecommandedProducts(item);
    });
    console.log(this.recommandedProducts);
  },
};
</script>
