<!-- eslint-disable radix -->
<template>
  <LoadingPage id='LoadingScreen'></LoadingPage>
  <div class="container my-4">
    <!-- 麵包屑 -->
    <p class="ms-2 fw-bold">目前頁面：菜單介紹</p>
    <!-- 餐點種類篩選 -->
    <select class="ms-2 form-select my-3 shadow-none border-dark" style="width:300px"
      aria-label="Default select example" @change="categoryFilter" v-model="category">
      <option class="selected">全部</option>
      <option value="義大利麵">義大利麵</option>
      <option value="披薩">披薩</option>
      <option value="附餐">附餐</option>
      <option value="甜點">甜點</option>
      <option value="飲品">飲品</option>
    </select>
    <!-- 餐點卡片 -->
    <div class="row g-3 gx-xl-0 row-cols-2 row-cols-lg-3">
      <div class="col d-flex justify-content-center" v-for="(item) in
       productsMatchPage" :key="item.id">
          <div class="card border-dark" style="width: 18rem;">
            <img :src="item.imageUrl" class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.price }}</p>
            </div>
            <div class="d-flex" style="height:30px;">
              <span class="d-block text-center text-decoration-none
              border-end border-dark w-50 lh-lg link-hover" @click="TurnToDetailPage(item.id)"
               @keyup="enter">詳細資訊</span>
              <span class="d-block text-center text-decoration-none w-50 lh-lg link-hover">
                預約外帶
              </span>
            </div>
          </div>
      </div>
    </div>
    <!-- 分頁按鈕 -->
    <div class="w-100 mt-5 d-flex justify-content-center">
      <nav>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link text-dark border-dark" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark border-dark" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark border-dark" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark border-dark" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link text-dark border-dark" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import LoadingPage from './LoadingPage.vue';

export default {
  data() {
    return {
      productsInfo: [],
      productsMatchCategory: [],
      productsMatchPage: [],
      pagination: {},
      page: 1,
      currentPage: 1,
      category: '全部',
    };
  },
  components: {
    LoadingPage,
  },
  methods: {
    getProductInfo() {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/products?page=${this.page}`;
      this.axios.get(api).then((res) => {
        // 新增餐點陣列資料
        res.data.products.forEach((item) => {
          console.log(item.title, item.id);
          if (item.category !== '其他') {
            this.productsInfo.push(item);
          }
        });
        // 取得頁面資訊
        this.pagination = res.data.pagination;
        if (this.pagination.has_next === true) {
          this.getInfoAgain();
        }
      });
    },
    getInfoAgain() {
      this.page += 1;
      this.getProductInfo();
    },
    // 切換到詳細產品資訊頁面
    TurnToDetailPage(id) {
      this.$router.push(`/productDetail/${id}`);
    },
    // 依種類篩選產品
    categoryFilter() {
      console.log(this.category);
      this.productsMatchCategory = [];
      console.log(this.productsInfo);
      this.productsInfo.forEach((item) => {
        console.log('test');
        if (this.category === '全部') {
          console.log(this.category);
          this.productsMatchCategory.push(item);
        } else if (this.category !== '全部') {
          if (item.category === this.category) {
            this.productsMatchCategory.push(item);
          }
        }
      });
    },
    // 顯示當頁產品
    countPagination() {
      this.productsMatchPage = [];
      console.log(this.productsMatchCategory);

      this.productsMatchCategory.forEach((item, i) => {
        const pageNum = parseInt(i / 9, 10);
        console.log(item, pageNum + 1);
        if (pageNum + 1 === this.currentPage) {
          this.productsMatchPage.push(item);
        }
      });
      console.log(this.productsMatchPage);
    },
    loading() {
      const LoadingScreen = document.getElementById('LoadingScreen');
      console.log(LoadingScreen);
    },
  },
  watch: {
    productsMatchCategory() {
      console.log(this.productsMatchCategory);
      this.countPagination();
    },
  },
  created() {
    this.getProductInfo();
    // this.productsMatchCategory = this.productsInfo;
    this.categoryFilter();
  },
};
</script>
