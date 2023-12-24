<template>
  <SpinnerLoadingPage ref="spinnerLoadingPage"></SpinnerLoadingPage>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <messageToast ref="messageToast" class="z-index-low">
  </messageToast>
  <div class="container d-flex justify-content-center max-w-lg">
    <div class="w-75">
      <div class="border-bottom border-dark d-flex justify-content-center
           align-items-center">
        <div class="my-4 w-50 d-flex justify-content-between
             align-items-center flex-column flex-md-row">
             <img src="../assets/images/LOGO/logo1.png" alt="header-img"
                  class="me-lg-5 width-xs height-xs">
          <span class="fs-2 d-block mt-2">預約外帶</span>
        </div>
      </div>
      <div>
        <!-- 預約餐點內容 -->
        <div class="border-bottom border-dark py-4">
          <p class="fs-4">預約訂單內容</p>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="text-center col-5">品項</th>
                <th scope="col" class="text-center">單價</th>
                <th scope="col" class="text-center">數量</th>
                <th scope="col" class="text-center">小計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item) in cartContent.carts" :key="item.id">
                <td class="text-center col-5">{{ item.product.title }}</td>
                <td class="text-center">{{ item.product.price }}</td>
                <td class="text-center">{{ item.qty }}</td>
                <td class="text-center">{{ item.total }}</td>
              </tr>
              <tr class="text-end">
                <td colspan="4" class="fs-4 fw-bold">
                  餐點費用:<span class="ms-3"> {{ cartContent.total }} </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 優惠券 -->
        <div class="border-bottom border-dark py-4">
          <p class="fs-4">優惠券</p>
          <div class="input-group mb-3">
            <label for="couponinput">
              <input id="couponinput" type="text" class="form-control shadow-none"
               v-model="couponCode" placeholder="請輸入優惠券代碼">
            </label>
            <button class="btn btn-dark" type="button" @click="coupon">
              送出優惠券
            </button>
          </div>
        </div>
        <!-- 消費金額 -->
        <div class="border-bottom border-dark py-4">
          <p class="fs-4">消費金額總計</p>
          <table class="table">
            <thead>
              <tr>
                <th class="text-center w-50" scope="col">項目</th>
                <th class="text-center w-50" scope="col">費用</th>
              </tr>
            </thead>
            <tbody>
              <!-- 各品項及費用 -->
              <tr>
                <td class="text-center">餐點費用</td>
                <td class="text-center">{{ cartContent.total }}</td>
              </tr>
              <tr v-if="cartContent.total !== cartContent.final_total">
                <td class="text-center">{{ cartContent.carts[0].coupon.title }}</td>
                <td class="text-center">
                  -{{ cartContent.total - cartContent.final_total }}
                </td>
              </tr>
              <tr class="text-end">
                <td></td>
                <td colspan="2" class="fs-4 fw-bold">
                  總計:<span class="ms-3"> {{ cartContent.final_total }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 取餐資訊表單 -->
        <form action="">
          <!-- 預約取餐時間 -->
          <div class="border-bottom border-dark py-4">
            <p class="fs-4">預約取餐時間</p>
            <div class="row row-cols-2 row-cols-md-5 gy-2">
              <!-- 預約取餐日期 -->
              <div class="form-check col" v-for="(item) in dateOptions" :key="item">
                <label class="form-check-label btn btn-outline-dark w-100"
                 v-if="form.orderDate.value !== item" :for="item">
                  {{ item }}
                  <input class="form-check-input d-none" type="radio"
                   :name="date" :id="item" v-model="form.orderDate.value"
                    :value="item" required :selected="item === form.orderDate.value">
                </label>
                <label class="form-check-label btn btn-dark w-100"
                 v-if="form.orderDate.value === item" :for="item">
                  {{ item }}
                  <input class="form-check-input d-none" type="radio"
                   :name="date" :id="item" v-model="form.orderDate.value"
                    :value="item" required :selected="item === form.orderDate.value">
                </label>
              </div>
            </div>
            <div class="mt-4">
              <!-- 預約取餐時段 -->
              <div>
                <label for="orderTimeInut" class="w-100">
                  <select id="orderTimeInut" class="form-select shadow-none"
                   v-model="form.orderTime.value" @change="validation('orderTime')">
                    <option disabled selected invisible value="">請選擇取餐時段</option>
                    <option v-for="(item) in timeOptions" :key="item.option" :value="item.option"
                      :disabled="item.passed && dateOptions['0'] === this.form.orderDate.value">
                      {{ item.option }}
                    </option>
                  </select>
                </label>
                <div class="mb-3 mt-1 text-danger" v-if="form.orderTime.errorMessage">
                  {{ form.orderTime.errorMessage }}
                </div>
              </div>
            </div>
          </div>
          <!-- 取餐人資訊 -->
          <div class="border-dark py-4">
            <p class="fs-4">取餐資訊</p>
            <label for="name" class="w-100">
              取餐人姓名
              <input type="text" class="form-control shadow-none mt-1"
              v-model="form.name.value" placeholder="請輸入取餐人姓名" @change="validation('name')">
                <div class="mb-3 mt-1 text-danger" v-if="form.name.errorMessage">
                  {{ form.name.errorMessage }}
                </div>
            </label>
            <label for="name" class="w-100 mt-3">
              取餐人聯絡電話
              <input type="tel" class="form-control shadow-none mt-1"
              v-model="form.tel.value" placeholder="請輸入取餐人連絡電話" @change="validation('tel')">
                <div class="mb-3 mt-1 text-danger" v-if="form.tel.errorMessage">
                  {{ form.tel.errorMessage }}
                </div>
            </label>
            <label for="message" class="w-100 mt-3">
              備註訊息
              <textarea class="form-control shadow-none mt-1"
               cols="30" rows="5" v-model="form.message.value">
                  </textarea>
                <div class="mb-3 mt-1 text-danger" v-if="form.tel.errorMessage">
                  {{ form.message.errorMessage }}
                </div>
            </label>
          </div>
          <div class="py-4 text-center">
            <button class="btn btn-lg btn-dark px-4" type="button" @click="validateBeforeSubmit">
              送出訂單
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import formMixin from '../mixins/form_mixin';
import LoadingPage from './LoadingPage.vue';
import SpinnerLoadingPage from './SpinnerLoadingPage.vue';
import messageToast from '../components/MessageToast.vue';

export default {
  mixins: [formMixin],
  data() {
    return {
      modal: {},
      couponCode: '',
      cartContent: {},
      form: {
        orderDate: {
          value: '', columnName: '日期', required: true, type: '', errorMessage: '',
        },
        orderTime: {
          value: '', columnName: '時間', required: true, type: '', errorMessage: '',
        },
        name: {
          value: '', columnName: '姓名', required: true, type: 'name', errorMessage: '',
        },
        email: {
          value: '', columnName: 'Email', required: false, type: '', errorMessage: '',
        },
        tel: {
          value: '', columnName: '電話', required: true, type: 'tel', errorMessage: '',
        },
        address: {
          value: '', columnName: '地址', required: true, type: '', errorMessage: '',
        },
        message: {
          value: '', columnName: '備註', required: false, type: '', errorMessage: '',
        },
      },
      rules: {
        date: { required: true, reg: '' },
        time: { required: true, reg: '' },
        name: { required: true, reg: /^[\u4e00-\u9fa5_a-zA-Z]/ },
        tel: { required: true, reg: /09\d{8}/ },
      },
    };
  },
  components: {
    LoadingPage, SpinnerLoadingPage, messageToast,
  },
  created() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    this.form.address.value = '自取';
  },
  mounted() {
    this.getCartContent();
  },
  methods: {
    // 取得預訂內容
    getCartContent() {
      this.$refs.loadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      this.axios.get(api).then((res) => {
        this.cartContent = res.data.data;
        this.cartContent.final_total = Math.floor(this.cartContent.final_total);
        this.$refs.loadingPage.loadingPageHide();
      });
    },
    // 送出訂單並跳轉至訂單完成頁面
    confirmOrder() {
      this.submit();
    },
  },
};
</script>
