<template>
  <SpinnerLoadingPage ref="spinnerLoadingPage"></SpinnerLoadingPage>
  <div class="modal modal-lg" tabindex="-1" id="orderModal" style="z-index:10000;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container" style="max-width:500px">
            <!-- 標題 -->
            <div class="border-bottom border-dark d-flex justify-content-center
              align-items-center">
              <div class="my-4 d-flex justify-content-between
                align-items-center flex-column flex-md-row">
                <img src="../assets/images/LOGO/logo1.png"
                 style="width:100px; height:100px" alt="header-img"
                  class="me-md-5">
                <span class="fs-2 d-block mt-2">預定餐點</span>
              </div>
            </div>
            <!-- 如果沒有預定餐點顯示以下部分 -->
            <div class="w-100 text-center" v-if="cartContent.total === 0">
              <i class="bi bi-basket2-fill text-dark" id="empty-bag-Img"></i>
              <p class="fs-2">目前尚無預定餐點</p>
              <router-link to="/productList" class="btn btn-lg btn-dark mt-3 mb-5"
               @click="modalClose">
                前往選購餐點
              </router-link>
            </div>
            <!-- 如果有預訂餐點顯示以下部分 -->
            <div v-if="cartContent.total !== 0">
              <!-- 預約餐點內容 -->
              <div class="border-bottom border-dark py-4">
                <p class="fs-4">預約訂單內容</p>
                <table class="table">
                  <thead>
                    <tr>
                      <th class="col-4">品項</th>
                      <th class="text-center">單價</th>
                      <th class="text-center">數量</th>
                      <!-- <th>小計</th> -->
                      <th class="col-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in cartContent.carts" :key="item.id">
                      <td>{{ item.product.title }}</td>
                      <td class="text-center">{{ item.product.price }}</td>
                      <td class="text-center">
                        <!-- 減少一個 -->
                        <button type="button" class="btn btn-sm rounded-circle
                         btn-outline-dark me-1 me-sm-3 text-center p-0"
                          @click="changeQty(item.id, i, item.qty-1)"
                          style="width:20px; height:20px; line-height: 20px;">
                          <i class="bi bi-dash-lg"></i>
                        </button>
                        <!-- 數量 -->
                        {{ item.qty }}
                        <!-- 增加一個 -->
                        <button type="button" class="btn btn-sm rounded-circle
                         btn-outline-dark ms-1 ms-sm-3 text-center p-0"
                          @click="changeQty(item.id, i, item.qty+1)"
                          style="width:20px; height:20px; line-height: 20px;">
                          <i class="bi bi-plus-lg"></i>
                        </button>
                      </td>
                      <!-- <td>{{ item.total }}</td> -->
                      <td>
                        <button type="button" class="btn btn-otline-dark border-none"
                         @click="cancelCart(item.id)">
                          <i class="bi bi-x-lg"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5" class="text-end w-100">餐點價格：{{ cartContent.total }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- 選擇訂單類型 -->
              <div class="py-4 text-center row">
                <div class="col">
                  <button class="btn btn-lg btn-dark px-4 w-100" type="button"
                   @click="changeToConfirmPage('takeaway')">
                    外帶自取
                  </button>
                </div>
                <div class="col">
                  <button class="btn btn-lg btn-dark px-4 w-100" type="button"
                    @click="changeToConfirmPage('fooddelivery')">
                    外送到府
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import SpinnerLoadingPage from '../views/SpinnerLoadingPage.vue';

export default {
  data() {
    return {
      modal: {},
      date: [],
      couponCode: '',
      cartContent: {},
      typeOfOrder: '',
      amoutOfOrders: 0,
    };
  },
  components: { SpinnerLoadingPage },
  emits: ['updateAmoutOfOrders'],
  methods: {
    // 開啟Modal
    modalShow() {
      this.modal.show();
    },
    // 關閉Modal
    modalClose() {
      this.modal.hide();
    },
    // 取得預訂內容
    getCartContent() {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      this.axios.get(api).then((res) => {
        this.cartContent = res.data.data;
        this.cartContent.final_total = Math.floor(this.cartContent.final_total);
        // 移除載入中畫面
        this.$refs.spinnerLoadingPage.loadingPageHide();
        // 更新NavBar顯示的數量
        this.amoutOfOrders = this.cartContent.carts.length;
        this.$emit('updateAmoutOfOrders', this.amoutOfOrders);
      });
    },
    // 取消某一筆預定內容
    cancelCart(id) {
      // 顯示載入中畫面
      this.$refs.spinnerLoadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart/${id}`;
      this.axios.delete(api).then(() => {
        this.getCartContent();
      });
    },
    changeToConfirmPage(destination) {
      this.modalClose();
      this.$router.push(`/${destination}`);
    },
    // 修改單一餐點的數量
    changeQty(productId, productNum, newQty) {
      if (newQty !== 0) {
        // 顯示載入中畫面
        this.$refs.spinnerLoadingPage.loadingPageShow();
        // 將資料寫回資料庫
        const data = {
          data: {
            product_id: productId,
            qty: newQty,
          },
        };
        const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart/${productId}`;
        this.axios.put(api, data).then(() => {
          // 重新取得資料
          this.getCartContent();
        });
      }
    },
  },
  mounted() {
    this.modal = new Modal('#orderModal');
    this.getCartContent();
  },
};
</script>
