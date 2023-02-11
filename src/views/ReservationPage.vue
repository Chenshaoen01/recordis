<template>
  <LoadingPage ref="loadingPage"></LoadingPage>
  <div class="container" style="max-width: 600px">
    <form class="mt-3 mb-5 needs-validation" novalidate>
      <div class="border-bottom border-dark d-flex justify-content-center
         align-items-center">
        <div class="my-4 w-50 d-flex justify-content-between
             align-items-center flex-column flex-md-row">
          <img src="../assets/images/LOGO/logo1.png" style="width:100px;
                     height:100px" alt="header-img" class="me-lg-5">
          <span class="fs-2 d-block mt-2">線上訂位</span>
        </div>
      </div>
      <!-- 預約訂位時間 -->
      <div class="border-bottom border-dark pb-5">
        <span class="fs-3 d-block my-4">訂位時間</span>
        <div class="row row-cols-2 row-cols-md-5 gy-2">
          <div class="form-check col" v-for="(item) in date" :key="item">
            <label class="form-check-label btn btn-outline-dark w-100"
             v-if="this.reservationInfo.date !== item"
              :for="item">
              {{ item }}
              <input class="form-check-input d-none" type="radio" :name="date"
               :id="item" v-model="reservationInfo.date"
                :value="item" required :selected="item === this.reservationInfo.date">
              <div class="invalid-feedback">
                請選擇訂位日期
              </div>
            </label>
            <label class="form-check-label btn btn-dark w-100"
             v-if="this.reservationInfo.date === item" :for="item">
              {{ item }}
              <input class="form-check-input d-none" type="radio"
               :name="date" :id="item" v-model="reservationInfo.date"
                :value="item" required :selected="item === this.reservationInfo.date">
              <div class="invalid-feedback">
                請選擇訂位日期
              </div>
            </label>
          </div>
        </div>
        <div class="mt-4">
          <select class="form-select shadow-none"
           aria-label="Default select example" v-model="reservationInfo.time"
            required v-if="firstDate === reservationInfo.date">
            <option disabled selected value="">請選擇訂位時段</option>
            <option v-for="(item) in timeOptionFirstDay" :key="item.option" :value="item.option"
              :disabled="item.passed">
              {{ item.option }}
            </option>
          </select>
          <select class="form-select shadow-none"
           aria-label="Default select example" v-model="reservationInfo.time"
            required v-if="firstDate !== reservationInfo.date">
            <option disabled selected value="">請選擇訂位時段</option>
            <option v-for="(item) in timeOptionOtherDay" :key="item.option" :value="item.option"
              :disabled="item.passed">
              {{ item.option }}
            </option>
          </select>
          <div class="invalid-feedback">
            請選擇訂位時間
          </div>
        </div>
      </div>
      <!-- 訂位資訊 -->
      <div class="mb-5">
        <span class="fs-3 d-block my-4">訂位者資訊</span>
        <label for="name" class="w-100 form-label">
          訂位者姓名
          <input type="text" class="form-control my-2 shadow-none"
           v-model="reservationInfo.name" required>
          <div class="invalid-feedback">
            請填入姓名
          </div>
        </label>
        <label for="tel" class="w-100 form-label">
          訂位者連絡電話
          <input type="tel" class="form-control my-2 shadow-none"
           v-model="reservationInfo.tel" required>
          <div class="invalid-feedback">
            請填入連絡電話
          </div>
        </label>
        <label for="message" class="w-100 form-label">
          備註
          <textarea name="" id="" cols="30" rows="5" class="form-control"
           v-model="reservationInfo.message"></textarea>
        </label>
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-lg btn-dark" @click="validation"
        :disabled="submitButtonDisabled" id="formConfirmButton">
          確認訂位
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import LoadingPage from './LoadingPage.vue';

export default {
  data() {
    return {
      date: [],
      reservationInfo: {
        date: '',
        time: '',
        name: '',
        tel: '',
        email: '',
        message: '',
      },
      firstDate: '',
      orderDate: {},
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
      cartContent: {},
      reservationId: '',
      submitButtonDisabled: false,
      alreadyValidated: false,
    };
  },
  components: { LoadingPage },
  methods: {
    // 取得預訂內容
    getCartContent() {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      this.axios.get(api).then((res) => {
        console.log(res);
        this.cartContent = res.data.data;
        console.log(this.cartContent);
        this.cartContent.final_total = Math.floor(this.cartContent.final_total);
      });
    },
    // 表單驗證並送出訂單
    validation() {
      let confirmButtonClicked = true;
      const confirmReservationAfterValidation = () => {
        if (this.alreadyValidated === false) {
          this.clearCart();
        }
        this.alreadyValidated = true;
        this.$refs.loadingPage.loadingPageShow();
      };
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation');
      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        form.addEventListener('click', (event) => {
          form.classList.add('was-validated');
          if (!form.checkValidity()) {
            confirmButtonClicked = false;
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            // this.submitButtonDisabled = true;
          } else if (form.checkValidity()) {
            if (confirmButtonClicked === true) {
              confirmReservationAfterValidation();
            }
          }
        }, false);
      });
    },
    // 把購物車清空
    clearCart() {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/carts`;
      this.axios.delete(api).then((res) => {
        console.log('clearCart', res);
        // 接續-在購物車加入"預定餐廳"
        this.addProductReservation();
      });
    },
    // 在購物車加入"預定餐廳"
    addProductReservation() {
      const data = {
        data: {
          product_id: '-NNp5WVf-9HgTdLHA-hk',
          qty: 1,
        },
      };
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      this.axios.post(api, data).then((res) => {
        console.log('addProductReservation', res);
        // 接續-確認訂位
        this.confirmReservation();
      });
    },
    // 確認訂位
    confirmReservation() {
      const data = {
        data: {
          user: {
            name: `${this.reservationInfo.name}`,
            email: `${this.reservationInfo.date}/${this.reservationInfo.time}`,
            tel: `${this.reservationInfo.tel}`,
            address: '線上訂位',
          },
          message: `${this.reservationInfo.message}`,
        },
      };
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/order`;
      this.axios.post(api, data).then((res) => {
        console.log('confirmReservation', res);
        // 接續-把購物車的東西加回去
        this.addCartProductsBack(res.data.orderId);
      });
    },
    // 把購物車的東西加回去
    addCartProductsBack(id) {
      if (this.cartContent.carts.length !== 0) {
        this.cartContent.carts.forEach((item) => {
          const data = {
            data: {
              product_id: `${item.product.id}`,
              qty: item.qty,
            },
          };
          const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
          this.axios.post(api, data).then((res) => {
            console.log('addCartProductsBack', res);
            this.pushToConfirmPage(id);
          });
        });
      } else if (this.cartContent.carts.length === 0) {
        this.pushToConfirmPage(id);
      }
    },
    // 顯示預約完成頁面
    pushToConfirmPage(id) {
      this.$router.push(`/reservationconfirm/${id}`);
    },
  },
  mounted() {
    // 回到頁面頂端
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // 取得購物車內容
    this.getCartContent();
    // 取得未來五天的日期
    const today = new Date();

    for (let n = 1; n <= 5; n += 1) {
      const tomorrow = new Date();
      tomorrow.setTime(today.getTime() + 1000 * 60 * 60 * 24 * (n - 1));
      // 產生往後五天的日期陣列
      const nextDate = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
      this.date.push(nextDate);
      if (n === 1) {
        // 預設訂位日期為今天
        this.reservationInfo.date = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
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
      } else if (m >= 25 && m <= 40) {
        this.timeOptionFirstDay[m - 13].passed = true;
      }
    }
  },
};
</script>
