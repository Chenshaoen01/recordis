export default {
  data() {
    return {
      timeOptions: [],
      dateOptions: [],
    };
  },
  created() {
    this.setTime();
  },
  mounted() {
    // 取得未來五天的日期
    const today = new Date();

    for (let n = 1; n <= 5; n += 1) {
      const tomorrow = new Date();
      tomorrow.setTime(today.getTime() + 1000 * 60 * 60 * 24 * (n - 1));
      // 產生往後五天的日期陣列
      const nextDate = `${tomorrow.getMonth() + 1}/${tomorrow.getDate()}`;
      this.dateOptions.push(nextDate);
    }
    this.form.orderDate.value = this.dateOptions['0'];
  },
  methods: {
    setTime() {
      for (let i = 0; i <= 39; i += 1) {
        const firstTimeData = this.getTimeData(15 * i + 1);
        const secondTimeData = this.getTimeData(15 * (i + 1));
        const currentTime = new Date();
        const timePassed = currentTime > firstTimeData.time;
        this.timeOptions.push({
          option: `${firstTimeData.timeString} ~ ${secondTimeData.timeString}`, passed: timePassed,
        });
      }
    },
    getTimeData(minutesNum) {
      const today = new Date();
      today.setHours(11);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setTime(today.getTime() + 1000 * 60 * minutesNum);
      const timeString = `${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`;
      const TimeData = { timeString, time: today };
      return TimeData;
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
        this.getCartContent();
        this.$refs.loadingPage.loadingPageHide();

        if (res.data.success) {
          this.$refs.messageToast.toastShow('已成功使用優惠代碼');
        } else {
          this.$refs.messageToast.toastShow('優惠代碼輸入錯誤或已超過使用期限');
        }
      });
    },
    // 表單驗證
    validation(targetName) {
      const target = this.form[targetName];
      if (target.required) {
        target.errorMessage = !target.value ? `請填入${target.columnName}` : '';
      }

      if (target.type && !target.errorMessage) {
        const testRegResult = this.rules[target.type].reg.test(target.value);
        target.errorMessage = !testRegResult ? `${target.columnName}格式不符` : '';
      }
    },
    // 確認訂單
    validateBeforeSubmit() {
      const validationArr = ['orderDate', 'orderTime', 'name', 'email', 'tel', 'address', 'message'];
      validationArr.forEach((item) => {
        this.validation(item);
      });
      const failedValidationCount = validationArr.filter((item) => this.form[item].errorMessage);

      if (failedValidationCount.length === 0) {
        this.confirmOrder();
      }
    },
    submit() {
      this.$refs.spinnerLoadingPage.loadingPageShow();
      const data = {
        data: {
          user: {
            name: this.form.name.value,
            email: `${this.form.orderDate.value}/${this.form.orderTime.value}`,
            tel: this.form.tel.value,
            address: this.form.address.value,
          },
          message: this.form.message.value,
        },
      };
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/order`;
      this.axios.post(api, data).then((res) => {
        this.$router.push(`/orderbuilt/${res.data.orderId}`);
      }).finally(() => {
        this.$refs.spinnerLoadingPage.loadingPageHide();
      });
    },
  },
  watch: {
    'form.orderDate.value': function () {
      this.form.orderTime.value = '';
    },
  },
};
