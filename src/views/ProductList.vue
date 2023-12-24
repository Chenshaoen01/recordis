<template>
  <SpinnerLoadingPage ref="spinnerLoadingPage"></SpinnerLoadingPage>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <messageToast ref="messageToast" class="z-index-low">
  </messageToast>
  <div class="container my-4 max-w-xl">
    <!-- 麵包屑 -->
    <p class="ms-2 fw-bold" data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
      目前頁面：菜單介紹
    </p>
    <!-- 餐點種類篩選 -->
    <select class="ms-2 form-select my-3 shadow-none border-dark width-sm"
      aria-label="Default select example" @change="categoryFilter" v-model="category"
      data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
      <option>全部</option>
      <option v-for="item in options" :key="item" :value="item">{{ item }}</option>
    </select>
    <!-- 餐點卡片 -->
    <div class="row gy-5 gx-xl-0 row-cols-2 row-cols-md-3 mt-1"
    data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
      <div class="col d-flex justify-content-center" v-for="(item) in
       productsShown" :key="item.id">
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
    <!-- 分頁按鈕 -->
    <div class="w-100 mt-5 d-flex justify-content-center">
      <button type="button" class="btn mx-1 btn-outline-dark px-2"
       @click="currentPage = currentPage-1" v-if="currentPage !== 1">
        <i class="bi bi-chevron-left"></i>
      </button>
      <button type="button" class="btn mx-1 btn-outline-dark"
       v-for="(item) in pagination" :key="item" @click="currentPage = item">
        {{ item }}
      </button>
      <button type="button" class="btn mx-1 btn-outline-dark px-2"
       @click="currentPage = currentPage+1" v-if="currentPage !== pagination.length">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import LoadingPage from './LoadingPage.vue';
import SpinnerLoadingPage from './SpinnerLoadingPage.vue';
import messageToast from '../components/MessageToast.vue';
import mixin from '../mixins/mixin';

export default {
  data() {
    return {
      productsData: [],
      productsShown: [],
      pagination: [],
      options: [],
      currentPage: 1,
      category: '全部',
    };
  },
  components: {
    LoadingPage, SpinnerLoadingPage, messageToast,
  },
  emits: ['updateQty'],
  mixins: [mixin],
  methods: {
    async getProductsList() {
      this.$refs.loadingPage.loadingPageShow();

      await this.getProductsRequest();
      this.filterProduct(this.currentPage, this.category);

      this.$refs.loadingPage.loadingPageHide();
    },
    getProductsRequest() {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/products/all`;
      return new Promise((resolve) => {
        this.axios.get(api).then((res) => {
          this.productsData = res.data.products.filter((item) => item.category !== '其他');
          // 寫入類別選項
          const categoryArr = this.productsData.map((item) => item.category);
          this.options = [...new Set(categoryArr)];
          resolve();
        });
      });
    },
    filterProduct() {
      // 篩選類別
      let filterDataList = [...this.productsData];
      if (this.category !== '全部') {
        filterDataList = filterDataList.filter((item) => item.category === this.category);
      }
      // 篩選符合頁數的資料
      this.productsShown = filterDataList.filter((item, index) => {
        const productPage = Math.ceil((index + 1) / 9, 10);
        return productPage === this.currentPage;
      });
      // 寫入頁數資料
      this.pagination = [];
      const totalPageNum = Math.ceil(filterDataList.length / 9);
      for (let i = 1; i <= totalPageNum; i += 1) {
        this.pagination.push(i);
      }

      this.moveToTop();
    },
    moveToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  watch: {
    currentPage() {
      this.filterProduct();
    },
    category() {
      this.currentPage = 1;
      this.filterProduct();
    },
  },
  created() {
    this.moveToTop();
  },
  mounted() {
    this.getProductsList();
    AOS.init();
  },
};
</script>
