<template>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <div class="container d-flex justify-content-center">
    <div class="w-75">
      <div class="border-bottom border-dark d-flex justify-content-center
       align-items-center">
        <div class="my-4 w-50 d-flex justify-content-between
         align-items-center flex-column flex-md-row">
          <img src="../assets/images/LOGO/logo1.png" style="width:100px; height:100px"
           alt="header-img" class="me-lg-5">
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
            <input type="text" class="form-control shadow-none" v-model="couponCode"
             placeholder="請輸入優惠券代碼"
              aria-label="Recipient's username">
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
        <form action="" class="needs-validation" novalidate>
          <!-- 預約取餐時間 -->
          <div class="border-bottom border-dark py-4">
            <p class="fs-4">預約取餐時間</p>
            <div class="row row-cols-2 row-cols-md-5 gy-2">
              <div class="form-check col" v-for="(item) in date" :key="item">
                <label class="form-check-label btn btn-outline-dark w-100"
                 v-if="this.orderDate !== item" :for="item">
                   {{ item }}
                   <input class="form-check-input d-none" type="radio" :name="date"
                    :id="item" v-model="orderDate" :value="item" required
                     :selected="item === this.orderDate">
                   <div class="invalid-feedback">
                      請選擇取餐日期
                   </div>
                </label>
                <label class="form-check-label btn btn-dark w-100"
                 v-if="this.orderDate === item" :for="item">
                   {{ item }}
                   <input class="form-check-input d-none" type="radio" :name="date"
                    :id="item" v-model="orderDate" :value="item" required
                     :selected="item === this.orderDate">
                   <div class="invalid-feedback">
                      請選擇取餐日期
                   </div>
                </label>
              </div>
            </div>
            <div class="mt-4">
              <select class="form-select shadow-none" aria-label="Default select example"
               v-model="orderTime" required v-if="firstDate === orderDate">
                <option disabled selected value="">請選擇取餐時段</option>
                <option v-for="(item) in timeOptionFirstDay" :key="item.option" :value="item.option"
                 :disabled="item.passed">
                  {{ item.option }}
                </option>
              </select>
              <div class="invalid-feedback">
                 請選擇取餐時間
              </div>
              <select class="form-select shadow-none" aria-label="Default select example"
               v-model="orderTime" required v-if="firstDate !== orderDate">
                <option disabled selected value="">請選擇取餐時段</option>
                <option v-for="(item) in timeOptionOtherDay" :key="item.option" :value="item.option"
                 :disabled="item.passed">
                  {{ item.option }}
                </option>
              </select>
              <div class="invalid-feedback">
                 請選擇取餐時間
              </div>
            </div>
          </div>
          <!-- 取餐人資訊 -->
          <div class="border-dark py-4">
            <p class="fs-4">取餐資訊</p>
            <label for="name" class="w-100">
              取餐人姓名
              <input type="text" class="form-control shadow-none mt-1"
               v-model="orderMessage.user.name"
                placeholder="請輸入取餐人姓名" aria-label="Recipient's username" required>
                <div class="invalid-feedback">
                   請輸入取餐人姓名
                 </div>
            </label>
            <label for="name" class="w-100 mt-3">
              取餐人連絡電話
              <input type="tel" class="form-control shadow-none mt-1"
               v-model="orderMessage.user.tel" placeholder="請輸入取餐人連絡電話"
                aria-label="Recipient's username" required>
              <div class="invalid-feedback">
                 請輸入取餐人連絡電話
               </div>
            </label>
            <label for="message" class="w-100 mt-3">
              備註訊息
              <textarea  class="form-control shadow-none mt-1"
               cols="30" rows="5" v-model="orderMessage.message">
              </textarea>
            </label>
          </div>
          <div class="py-4 text-center">
            <button class="btn btn-lg btn-dark px-4" type="button" @click="formValidation">
              送出訂單
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingPage from './LoadingPage.vue';

export default {
  data() {
    return {
      modal: {},
      date: [],
      couponCode: '',
      cartContent: {},
      orderDate: {},
      orderTime: '',
      orderMessage: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '自取',
        },
        message: '',
      },
      firstDate: '',
      timeOptionFirstDay: [
        { option: '11:01 ~ 11:15', passed: false },
        { option: '11:16 ~ 11:30', passed: false },
        { option: '11:31 ~ 11:45', passed: false },
        { option: '11:46 ~ 12:00', passed: false },
        { option: '12:01 ~ 12:15', passed: false },
        { option: '12:16 ~ 12:30', passed: false },
        { option: '12:31 ~ 12:45', passed: false },
        { option: '12:46 ~ 13:00', passed: false },
        { option: '13:01 ~ 13:15', passed: false },
        { option: '13:16 ~ 13:30', passed: false },
        { option: '13:31 ~ 13:45', passed: false },
        { option: '13:46 ~ 14:00', passed: false },
        { option: '17:01 ~ 17:15', passed: false },
        { option: '17:16 ~ 17:30', passed: false },
        { option: '17:31 ~ 17:45', passed: false },
        { option: '17:46 ~ 18:00', passed: false },
        { option: '18:01 ~ 18:15', passed: false },
        { option: '18:16 ~ 18:30', passed: false },
        { option: '18:31 ~ 18:45', passed: false },
        { option: '18:46 ~ 19:00', passed: false },
        { option: '19:01 ~ 19:15', passed: false },
        { option: '19:16 ~ 19:30', passed: false },
        { option: '19:31 ~ 19:45', passed: false },
        { option: '19:46 ~ 20:00', passed: false },
        { option: '20:01 ~ 20:15', passed: false },
        { option: '20:16 ~ 20:30', passed: false },
        { option: '20:31 ~ 20:45', passed: false },
        { option: '20:46 ~ 21:00', passed: false },
      ],
      timeOptionOtherDay: [
        { option: '11:01 ~ 11:15', passed: false },
        { option: '11:16 ~ 11:30', passed: false },
        { option: '11:31 ~ 11:45', passed: false },
        { option: '11:46 ~ 12:00', passed: false },
        { option: '12:01 ~ 12:15', passed: false },
        { option: '12:16 ~ 12:30', passed: false },
        { option: '12:31 ~ 12:45', passed: false },
        { option: '12:46 ~ 13:00', passed: false },
        { option: '13:01 ~ 13:15', passed: false },
        { option: '13:16 ~ 13:30', passed: false },
        { option: '13:31 ~ 13:45', passed: false },
        { option: '13:46 ~ 14:00', passed: false },
        { option: '17:01 ~ 17:15', passed: false },
        { option: '17:16 ~ 17:30', passed: false },
        { option: '17:31 ~ 17:45', passed: false },
        { option: '17:46 ~ 18:00', passed: false },
        { option: '18:01 ~ 18:15', passed: false },
        { option: '18:16 ~ 18:30', passed: false },
        { option: '18:31 ~ 18:45', passed: false },
        { option: '18:46 ~ 19:00', passed: false },
        { option: '19:01 ~ 19:15', passed: false },
        { option: '19:16 ~ 19:30', passed: false },
        { option: '19:31 ~ 19:45', passed: false },
        { option: '19:46 ~ 20:00', passed: false },
        { option: '20:01 ~ 20:15', passed: false },
        { option: '20:16 ~ 20:30', passed: false },
        { option: '20:31 ~ 20:45', passed: false },
        { option: '20:46 ~ 21:00', passed: false },
      ],
      alreadyValidated: false,
    };
  },
  components: {
    LoadingPage,
  },
  methods: {
    // 取得預訂內容
    getCartContent() {
      this.$refs.loadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      this.axios.get(api).then((res) => {
        console.log(res);
        this.cartContent = res.data.data;
        console.log(this.cartContent);
        this.cartContent.final_total = Math.floor(this.cartContent.final_total);
        this.$refs.loadingPage.loadingPageHide();
      });
    },
    // 套用優惠券
    coupon() {
      this.$refs.loadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/coupon`;
      const data = {
        data: {
          code: `${this.couponCode}`,
        },
      };
      this.axios.post(api, data).then((res) => {
        console.log(res);
        this.getCartContent();
        this.$refs.loadingPage.loadingPageHide();
      });
    },
    confirmOrder() {
      const data = {
        data: {
          user: {
            name: `${this.orderMessage.user.name}`,
            email: `${this.orderDate}/${this.orderTime}`,
            tel: `${this.orderMessage.user.tel}`,
            address: '自取',
          },
          message: `${this.orderMessage.message}`,
        },
      };
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/order`;
      this.axios.post(api, data).then((res) => {
        console.log(res);
        this.$router.push(`/orderbuilt/${res.data.orderId}`);
      });
    },
    formValidation() {
      let confirmButtonClicked = true;
      const confirmOrderAfterValidation = () => {
        if (this.alreadyValidated === false) {
          this.confirmOrder();
        }
        this.alreadyValidated = true;
      };
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation');

      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        form.addEventListener('click', (event) => {
          if (!form.checkValidity()) {
            confirmButtonClicked = false;
            event.preventDefault();
            event.stopPropagation();
          } else if (form.checkValidity()) {
            if (confirmButtonClicked === true) {
              confirmOrderAfterValidation();
            }
          }

          form.classList.add('was-validated');
        }, false);
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
    // 取得未來五天的日期
    const today = new Date();

    for (let n = 1; n <= 5; n += 1) {
      const tomorrow = new Date();
      tomorrow.setTime(today.getTime() + 1000 * 60 * 60 * 24 * (n - 1));
      // 產生往後五天的日期陣列
      const nextDate = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
      this.date.push(nextDate);
      if (n === 1) {
        // 預設取餐日期為今天
        this.orderDate = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
        // 存取今天的日期
        this.firstDate = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
      }
    }

    // 計算時間選項
    const firstMinuteToday = new Date();
    firstMinuteToday.setTime(today.getTime());
    firstMinuteToday.setHours(11);
    firstMinuteToday.setMinutes(0);
    firstMinuteToday.setSeconds(0);

    const timeCount = Math.floor((today.getTime() - firstMinuteToday.getTime()) / (1000 * 60 * 15));

    for (let m = 1; m <= timeCount; m += 1) {
      if (m <= 12) {
        this.timeOptionFirstDay[m - 1].passed = true;
        console.log(m, this.timeOptionFirstDay[m - 1]);
      } else if (m >= 25 && m <= 40) {
        this.timeOptionFirstDay[m - 13].passed = true;
        console.log(this.timeOptionFirstDay[m - 13]);
      }
    }

    this.getCartContent();
  },
};
</script>
