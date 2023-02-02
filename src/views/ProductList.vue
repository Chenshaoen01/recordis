<!-- eslint-disable radix -->
<template>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <messageToast ref="messageToast" :messageReceived="toastMessage" style="z-index:100">
  </messageToast>
  <div class="container my-4" style="max-width:1000px;">
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
    <div class="row gy-5 gx-xl-0 row-cols-2 row-cols-lg-3">
      <div class="col d-flex justify-content-center" v-for="(item) in
       productsShown" :key="item.id">
        <div class="card border-dark" style="width: 18rem;">
          <img :src="item.data.imageUrl" class="card-img-top" alt="...">
          <div class="card-body border-bottom border-dark">
            <h5 class="card-title">{{ item.data.title }}</h5>
            <p class="card-text">{{ item.data.price }}</p>
          </div>
          <div class="d-flex" style="height:30px;">
            <span class="d-block text-center text-decoration-none
              border-end border-dark w-50 lh-lg link-hover" @click="TurnToDetailPage(item.data.id)"
              @keyup="enter">詳細資訊</span>
              <span class="d-block text-center text-decoration-none w-50 lh-lg link-hover"
               @click="QuickAddToCart(item.data.id)" @keyup="plus">
                預約外帶
              </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 分頁按鈕 -->
    <div class="w-100 mt-5 d-flex justify-content-center">
      <button type="button" class="btn mx-1 btn-outline-dark px-2"
       @click="changePage(currentPage-1)" v-if="currentPage !== 1">
        <i class="bi bi-chevron-left"></i>
      </button>
      <button type="button" class="btn mx-1 btn-outline-dark"
       v-for="(item) in pagination" :key="item" @click="changePage(item)">
        {{ item }}
      </button>
      <button type="button" class="btn mx-1 btn-outline-dark px-2"
       @click="changePage(currentPage+1)" v-if="currentPage !== lastPage">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import LoadingPage from './LoadingPage.vue';
import messageToast from '../components/MessageToast.vue';

export default {
  data() {
    return {
      productsInfo: [],
      productsShown: [],
      pagination: [],
      lastPage: 1,
      currentPage: 1,
      category: '全部',
      toastMessage: '餐點已加入預訂清單',
    };
  },
  components: {
    LoadingPage, messageToast,
  },
  emits: ['updateQty'],
  methods: {
    // 取得商品列表資料
    getProductsListData() {
      this.$refs.loadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/products/all`;
      this.axios.get(api).then((res) => {
        console.log(res);
        // 取得所有產品資訊
        this.productsInfo = res.data.products;
        const productsEdited = [];
        let dataNumCount = 0;
        let productsQty = 0;
        // 將產品資料加入類別、頁數資訊
        res.data.products.forEach((item) => {
          // 類別為"全部"，依類別篩選商品
          if (this.category === '全部' && item.category !== '其他') {
            dataNumCount += 1;
            productsQty += 1;
            const ItemPage = Math.ceil(dataNumCount / 9, 10);
            if (ItemPage === this.currentPage) {
              const dataPushed = {
                data: item,
                category: item.category,
                pageNum: ItemPage,
              };
              productsEdited.push(dataPushed);
            }
          } else {
          // 類別不是全部，依類別篩選商品
            if (this.category === item.category) {
              dataNumCount += 1;
              productsQty += 1;
              const ItemPage = Math.ceil(dataNumCount / 9, 10);
              if (ItemPage === this.currentPage) {
                const dataPushed = {
                  data: item,
                  category: item.category,
                  pageNum: ItemPage,
                };
                productsEdited.push(dataPushed);
              }
            }
            console.log(productsEdited);
          }
          this.$refs.loadingPage.loadingPageHide();
        });
        // 將編輯完的結果寫回資料庫
        this.productsShown = productsEdited;
        console.log(this.productsShown);
        // 計算頁數
        this.pagination = [];
        const maxPage = Math.ceil(productsQty / 9);
        this.lastPage = maxPage;
        for (let i = 1; i <= maxPage; i += 1) {
          this.pagination.push(i);
        }
        console.log(this.pagination);
      });
    },
    changePage(newPage) {
      this.currentPage = newPage;
    },
    // 切換到詳細產品資訊頁面
    TurnToDetailPage(id) {
      this.$router.push(`/productDetail/${id}`);
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
  },
  watch: {
    currentPage() {
      this.getProductsListData();
    },
    category() {
      this.getProductsListData();
    },
  },
  mounted() {
    this.getProductsListData();
  },
};
</script>
