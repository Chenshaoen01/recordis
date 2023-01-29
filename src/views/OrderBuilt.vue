<template>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <div class="container py-5">
    <div class="py-5 text-center border rounded-5 border-dark border-3 ">
      <i class="bi bi-cart-check" style="font-size:10rem; color:black;"></i>
      <h1>訂單建立成功</h1>
      <div class="my-5">
        <h3 class="w-100">取餐人資訊</h3>
        <table class="table mx-auto mb-5" style="max-width:600px">
          <tbody>
            <tr>
              <th class="col-6 text-center">類別</th>
              <td class="col text-center">
                {{ this.order.user.address === '自取' ? '外帶自取' : '外送到府' }}
              </td>
            </tr>
            <tr>
              <th class="col-6 text-center">取餐人姓名</th>
              <td class="col text-center">{{ order.user.name }}</td>
            </tr>
            <tr>
              <th class="col-6 text-center">取餐人聯絡電話</th>
              <td class="col text-center">{{ order.user.tel }}</td>
            </tr>
            <tr v-if="this.order.user.address !== '自取'">
              <th class="col-6 text-center">取餐人地址</th>
              <td class="col text-center">{{ order.user.tel }}</td>
            </tr>
          </tbody>
        </table>
        <h3 class="w-100">餐點內容</h3>
        <table class="table mx-auto mb-3" style="max-width:600px">
          <tbody>
            <tr>
              <th class="text-center col-6">餐點名稱</th>
              <th class="text-center col-6">金額</th>
            </tr>
            <tr v-for="(item) in order.products" :key="item.id">
              <td class="col text-center col-6">{{ item.product.title }}</td>
              <td class="col text-center col-6">{{ item.final_total }}</td>
            </tr>
            <tr>
              <td colspan="2" class="text-center fw-bold fs-3">
                總金額： {{ order.total }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <router-link class="btn btn-lg btn-dark" to="/">回到首頁</router-link>
    </div>
  </div>
</template>

<script>
import LoadingPage from './LoadingPage.vue';

export default {
  data() {
    return {
      order: {
      },
    };
  },
  components: {
    LoadingPage,
  },
  methods: {
    // -NMd7PLj-nvgn73gWfUU
    getSingleOrder() {
      // 顯示載入畫面
      this.$refs.loadingPage.loadingPageShow();
      const orderId = this.$route.params.id;
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/order/${orderId}`;
      this.axios.get(api).then((res) => {
        console.log(res);
        this.order = res.data.order;
        // 移除載入畫面
        this.$refs.loadingPage.loadingPageHide();
      });
    },
  },
  created() {
    this.getSingleOrder();
  },
};
</script>
