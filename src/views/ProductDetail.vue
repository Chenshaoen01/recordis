<template>
  <SpinnerLoadingPage ref="spinnerLoadingPage"></SpinnerLoadingPage>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <messageToast ref="messageToast" class="z-index-low">
  </messageToast>
  <div class="container my-4">
    <!-- 麵包屑 -->
    <p class="fw-bold mx-auto max-w-lg">目前頁面：菜單介紹 / {{ productsDetail.title }}</p>
    <!-- 產品詳細資訊 -->
    <div class="d-flex flex-column flex-md-row mx-auto align-items-start max-w-lg">
      <!-- 圖片 -->
      <img :src="productsDetail.imageUrl" class="mb-3 me-md-4" alt=""
       data-aos="fade-right" data-aos-duration="1000"
        id="productDetailImg">
      <!-- 餐點資訊 -->
      <div data-aos="fade-right" data-aos-duration="1000">
        <h1 class="fw-bold">{{ productsDetail.title }}</h1>
        <h3 class="fw-bold mb-4">{{ productsDetail.price }}</h3>
        <p class="fw-bold fs-5 mb-4">{{ productsDetail.description }}</p>
        <div class="border border-dark mb-4"></div>
        <h3 class="fw-bold mb-4">預約餐點</h3>
        <div class="d-flex justify-align-start align-items-center">
          <h4 class="fw-bold d-block width-xs">數量</h4>
          <ul class="list-group list-group-horizontal w-100">
            <li class="list-group-item link-hover" @click="changeQuantity('minus')" @keyup="minus">
              <span>-</span>
            </li>
            <li class="list-group-item w-25 text-center">
              <span>{{ orderQuantity }}</span>
            </li>
            <li class="list-group-item link-hover" @click="changeQuantity('plus')" @keyup="plus">
              <span>+</span>
            </li>
          </ul>
        </div>
        <div class="mt-5 mb-3 w-100 d-flex justify-content-center">
          <button type="button" class="btn btn-dark long-btn"
            @click="addToCart(productsDetail.id, orderQuantity)">加入預訂清單</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 分隔線 -->
  <div class="position-relative suggestion-label" data-aos="zoom-in" data-aos-duration="1000">
    <div class="border border-dark  position-absolute top-50 w-100"></div>
    <span class="bg-white position-absolute start-50 top-50 translate-middle
         fw-bolder fs-4 text-dark text-center mx-auto px-3">
      推薦餐點
    </span>
  </div>
  <!-- 推薦餐點 -->
  <div class="container my-3 max-w-xl" data-aos="fade-right" data-aos-duration="1000">
    <div class="row g-3 row-cols-1 row-cols-sm-3">
      <div class="col d-flex justify-content-center"
       v-for="(item) in recommandedProducts" :key="item.id">
       <div class="card border-dark img-expand product-card">
          <div class="card-img-top w-100 overflow-hidden">
            <img :src="item.imageUrl" class="w-100" alt="...">
          </div>
          <div class="card-body border-bottom border-dark">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.price }}</p>
          </div>
          <div class="d-flex">
            <span class="d-block text-center text-decoration-none
              border-end border-dark w-50 lh-lg link-hover" @click="turnToDetailPage(item.id)"
              @keyup="enter">詳細資訊</span>
              <span class="d-block text-center text-decoration-none w-50 lh-lg link-hover"
               @click="addToCart(item.id, 1)" @keyup="plus">
                預訂餐點
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 mb-5 w-100 d-flex justify-content-center">
    <router-link to="/productList" type="button" class="mx-auto btn btn-dark long-btn">
      查看所有餐點
    </router-link>
  </div>
</template>

<script>
import AOS from 'aos';
import SpinnerLoadingPage from './SpinnerLoadingPage.vue';
import LoadingPage from './LoadingPage.vue';
import messageToast from '../components/MessageToast.vue';
import mixin from '../mixins/mixin';

export default {
  data() {
    return {
      productsDetail: {},
      orderQuantity: 1,
      recommandedProductsId: ['-NLv3-t7xMq-IJo3w3U0', '-NLv5M6uQiOXcEsiLkIu', '-NLv092hsFRNH-Rfjeg2'],
      recommandedProducts: [],
    };
  },
  components: {
    LoadingPage, SpinnerLoadingPage, messageToast,
  },
  emits: ['updateQty'],
  mixins: [mixin],
  methods: {
    // 取得產品資訊
    getProductDetail() {
      // 顯示載入畫面
      this.$refs.loadingPage.loadingPageShow();
      // 取得資料
      const productId = this.$route.params.id;
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/product/${productId}`;
      this.axios.get(api).then((res) => {
        this.productsDetail = res.data.product;
        // 移除載入畫面
        this.$refs.loadingPage.loadingPageHide();
      });
    },
    // 更改數量
    changeQuantity(move) {
      if (move === 'minus') {
        if (this.orderQuantity > 1) {
          this.orderQuantity -= 1;
        }
      } else if (move === 'plus') {
        this.orderQuantity += 1;
      }
    },
    // 切換到詳細產品資訊頁面
    turnToDetailPage(id) {
      this.$route.params.id = id;
      // 重新取得產品資訊
      this.getProductDetail();
      // 重新取得推薦商品資訊
      this.recommandedProducts = [];
      this.recommandedProductsId.forEach((item) => {
        this.getrecommandedProducts(item);
      });
    },
  },
  created() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
  mounted() {
    this.getProductDetail();
    this.recommandedProductsId.forEach((item) => {
      this.getrecommandedProducts(item);
    });

    AOS.init();
  },
};
</script>
