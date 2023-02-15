<template>
    <LoadingPage ref="loadingPage"></LoadingPage>
    <div class="container py-5">
        <div class="py-5 text-center border rounded-5 border-dark border-3 ">
            <i class="bi bi-calendar2-check" style="font-size:10rem; color:black;"></i>
            <h1>訂位成功</h1>
            <div class="my-5">
                <h3 class="w-100">訂位資訊</h3>
                <table class="table mx-auto mb-5" style="max-width:600px">
                    <tbody>
                        <tr>
                            <th class="col-6 text-center">訂位者姓名</th>
                            <td class="col text-center">{{ order.user.name }}</td>
                        </tr>
                        <tr>
                            <th class="col-6 text-center">訂位者聯絡電話</th>
                            <td class="col text-center">{{ order.user.tel }}</td>
                        </tr>
                        <tr>
                            <th class="col-6 text-center">訂位日期</th>
                            <td class="col">
                                {{ this.orderTime.month }}月{{ this.orderTime.day }}日
                            </td>
                        </tr>
                        <tr>
                            <th class="col-6 text-center">訂位時間</th>
                            <td class="col">
                                {{ this.orderTime.time }}
                            </td>
                        </tr>
                        <tr>
                            <th class="col-6 text-center">備註訊息</th>
                            <td class="col">
                                {{ order.message }}
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
        total: 0,
        user: {
          address: '',
          email: '',
          name: '',
          tel: '',
        },
      },
      orderTime: {
        month: 1,
        day: 1,
        time: '15:30-18:00',
      },
    };
  },
  components: {
    LoadingPage,
  },
  emits: ['updateQty'],
  methods: {
    getSingleOrder() {
      // 顯示載入畫面
      this.$refs.loadingPage.loadingPageShow();
      const orderId = this.$route.params.id;
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/order/${orderId}`;
      this.axios.get(api).then((res) => {
        this.order = res.data.order;
        // 編輯時間資訊
        const orderDate = this.order.user.email.split('/');
        let num = 0;
        this.orderTime.month = orderDate[num];
        num += 1;
        this.orderTime.day = orderDate[num];
        num += 1;
        this.orderTime.time = orderDate[num];
        // 移除載入畫面
        this.$refs.loadingPage.loadingPageHide();
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
    this.getSingleOrder();
    // 更新 NavBar 的產品數量
    this.$emit('updateQty');
  },
};
</script>
