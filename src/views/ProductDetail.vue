<template>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <messageToast ref="messageToast" :messageReceived="toastMessage" style="z-index:100">
  </messageToast>
  <div class="container my-4">
    <!-- 麵包屑 -->
    <p class="fw-bold">目前頁面：菜單介紹 / {{ productsDetail.title }}</p>
    <div class="d-flex flex-column flex-md-row">
      <!-- 圖片 -->
      <div class="mb-3 me-md-4" style="width:500px;">
        <img :src="productsDetail.imageUrl" class="w-100" alt="">
      </div>
      <!-- 餐點資訊 -->
      <div>
        <h1 class="fw-bold">{{ productsDetail.title }}</h1>
        <h3 class="fw-bold mb-4">{{ productsDetail.price }}</h3>
        <p class="fw-bold fs-5 mb-4">{{ productsDetail.description }}</p>
        <div class="bg-dark mb-4" style="height:1px"></div>
        <h3 class="fw-bold mb-4">預約餐點</h3>
        <div class="d-flex justify-align-start align-items-center">
          <h4 class="fw-bold d-block" style="width:100px">數量</h4>
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
          <button type="button" class="btn btn-dark" style="width:150px;"
           @click="addToCart">加入預約清單</button>
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
      <div class="col d-flex justify-content-center"
         v-for="(item) in recommandedProducts" :key="item.id">
          <div class="card border-dark" style="width: 18rem;">
            <img :src="item.imageUrl" class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.price }}</p>
            </div>
            <div class="d-flex" style="height:30px;">
              <div class="d-flex w-100" style="height:30px;">
                <span class="d-block border-end border-dark text-center text-decoration-none
                 w-50 lh-lg link-hover"
                 @click="turnToDetailPage(item.id)" @keyup="plus">
                  詳細資訊
                </span>
                <span class="d-block text-center text-decoration-none w-50 lh-lg link-hover"
                 @click="QuickAddToCart(item.id)" @keyup="plus">
                  預約外帶
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  <div class="mt-5 mb-3 w-100 d-flex justify-content-center">
    <button type="button" class="btn btn-dark" style="width:150px;" @click="turnToProducsList">
      查看所有餐點
    </button>
  </div>
</template>

<script>
import LoadingPage from './LoadingPage.vue';
import messageToast from '../components/MessageToast.vue';

export default {
  data() {
    return {
      productsDetail: {},
      orderQuantity: 1,
      recommandedProductsId: ['-NLv3-t7xMq-IJo3w3U0', '-NLv5M6uQiOXcEsiLkIu', '-NLv092hsFRNH-Rfjeg2'],
      recommandedProducts: [],
      toastMessage: '餐點已加入預訂清單',
    };
  },
  components: {
    LoadingPage, messageToast,
  },
  emits: ['updateQty'],
  methods: {
    // 取得產品資訊
    getProductDetail() {
      // 顯示載入畫面
      this.$refs.loadingPage.loadingPageShow();
      // 取得資料
      const productId = this.$route.params.id;
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/product/${productId}`;
      this.axios.get(api).then((res) => {
        console.log(res);
        this.productsDetail = res.data.product;
        console.log(this.productsDetail);
        // 移除載入畫面
        this.$refs.loadingPage.loadingPageHide();
      });
    },
    getrecommandedProducts(id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/product/${id}`;
      this.axios.get(api).then((res) => {
        this.recommandedProducts.push(res.data.product);
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
    // 回到菜單介紹頁面
    turnToProducsList() {
      this.$router.push('/productList');
    },
    // 載入中畫面
    loading() {
      this.$refs.loadingPage.loadingPageShow();
      setTimeout(() => {
        this.$refs.loadingPage.loadingPageHide();
      }, 1500);
    },
    messageToastShow() {
      this.$refs.messageToast.toastShow();
    },
    // 新增至預訂清單
    addToCart() {
      console.log(this.$refs);
      this.$refs.loadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      const data = {
        data: {
          product_id: this.productsDetail.id,
          qty: this.orderQuantity,
        },
      };
      this.axios.post(api, data).then((res) => {
        this.$refs.loadingPage.loadingPageHide();
        // 更新 NavBar 的產品數量
        this.$emit('updateQty');

        if (res.data.success) {
          this.toastMessage = '餐點已加入預訂清單';
          this.$refs.messageToast.toastShow();
        } else {
          this.toastMessage = '餐點加入預訂清單失敗';
          this.$refs.messageToast.toastShow();
        }
      });
    },
    // 快速加入1件商品到購物清單
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
      console.log(id);
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
  mounted() {
    this.getProductDetail();
    this.recommandedProductsId.forEach((item) => {
      this.getrecommandedProducts(item);
    });
    console.log(this.recommandedProducts);
  },
};
</script>
