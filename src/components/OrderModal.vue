<template>
  <div class="modal modal-lg" tabindex="-1" id="orderModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container w-75">
            <div class="text-cented d-flex justify-content-between
                         px-3 px-lg-5 py-3 align-items-center border-bottom border-dark">
              <img src="../assets/images/LOGO/logo1.png" style="width:100px; height:100px"
               alt="header-img">
              <span class="fs-2 ms-5">預約外帶</span>
            </div>
            <div>
              <!-- 預約餐點內容 -->
              <div class="border-bottom border-dark py-4">
                <p class="fs-4">預約訂單內容</p>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">品項</th>
                      <th scope="col">單價</th>
                      <th scope="col">數量</th>
                      <th scope="col">小計</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item) in cartContent.carts" :key="item.id">
                      <td>{{ item.product.title }}</td>
                      <td>{{ item.product.price }}</td>
                      <td>{{ item.qty }}</td>
                      <td>{{ item.total }}</td>
                      <td>
                        <button type="button" class="btn btn-otline-dark border-none"
                         @click="cancelCart(item.id)">
                          <i class="bi bi-x-lg"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>餐點價格：</td>
                      <td>{{ cartContent.total }}</td>
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

export default {
  data() {
    return {
      modal: {},
      date: [],
      couponCode: '',
      cartContent: {},
      typeOfOrder: '',
    };
  },
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
        console.log(res);
        this.cartContent = res.data.data;
        console.log(this.cartContent);
        this.cartContent.final_total = Math.floor(this.cartContent.final_total);
      });
    },
    // 取消某一筆預定內容
    cancelCart(id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart/${id}`;
      this.axios.delete(api).then((res) => {
        console.log(res);
        this.getCartContent();
      });
    },
    changeToConfirmPage(destination) {
      this.modalClose();
      this.$router.push(`/${destination}`);
    },
  },
  mounted() {
    this.modal = new Modal('#orderModal');
    const today = new Date();

    for (let n = 1; n <= 5; n += 1) {
      const tomorrow = new Date();
      tomorrow.setTime(today.getTime() + 1000 * 60 * 60 * 24 * (n - 1));
      const nextDate = `${tomorrow.getMonth() + 1} / ${tomorrow.getDate()}`;
      this.date.push(nextDate);
    }
  },
};
</script>
