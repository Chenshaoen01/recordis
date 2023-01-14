<template>
    <div class="modal modal-lg" tabindex="-1" id="orderModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container w-75">
                        <div class="text-cented d-flex justify-content-between
                         px-3 px-lg-5 py-3 align-items-center border-bottom border-dark">
                            <img src="../assets/images/LOGO/logo1.png"
                             style="width:100px; height:100px" alt="header-img">
                            <span class="fs-2 ms-5">預約外帶</span>
                        </div>
                        <div class="border-bottom border-dark py-4">
                            <p class="fs-4">預約取餐時間</p>
                            <div class="d-flex justify-content-between">
                                <button class="btn btn-outline-dark btn-lg">1/5</button>
                                <button class="btn btn-outline-dark btn-lg">1/6</button>
                                <button class="btn btn-outline-dark btn-lg">1/7</button>
                                <button class="btn btn-outline-dark btn-lg">1/8</button>
                                <button class="btn btn-outline-dark btn-lg">1/9</button>
                            </div>
                            <div class="mt-4">
                                <select class="form-select shadow-none"
                                 aria-label="Default select example">
                                    <option disabled selected>請選擇取餐時段</option>
                                    <option value="1100-1115">11:00 ~ 11:15</option>
                                    <option value="1100-1115">11:15 ~ 11:30</option>
                                    <option value="1100-1115">11:30 ~ 11:45</option>
                                    <option value="1100-1115">11:45 ~ 12:00</option>
                                    <option value="1100-1115">12:00 ~ 12:15</option>
                                    <option value="1100-1115">12:15 ~ 12:30</option>
                                    <option value="1100-1115">12:30 ~ 12:45:</option>
                                    <option value="1100-1115">12:45 ~ 13:00</option>
                                    <option value="1100-1115">13:00 ~ 13:15</option>
                                    <option value="1100-1115">13:15 ~ 13:30</option>
                                    <option value="1100-1115">13:30 ~ 13:45:</option>
                                    <option value="1100-1115">13:45 ~ 14:00</option>
                                    <option value="1100-1115" disabled>14:00 ~ 17:00未營業</option>
                                    <option value="1100-1115">17:00 ~ 17:15</option>
                                    <option value="1100-1115">17:15 ~ 17:30</option>
                                    <option value="1100-1115">17:30 ~ 17:45:</option>
                                    <option value="1100-1115">17:45 ~ 18:00</option>
                                    <option value="1100-1115">18:00 ~ 18:15</option>
                                    <option value="1100-1115">18:15 ~ 18:30</option>
                                    <option value="1100-1115">18:30 ~ 18:45:</option>
                                    <option value="1100-1115">18:45 ~ 19:00</option>
                                    <option value="1100-1115">19:00 ~ 19:15</option>
                                    <option value="1100-1115">19:15 ~ 19:30</option>
                                    <option value="1100-1115">19:30 ~ 19:45:</option>
                                    <option value="1100-1115">19:45 ~ 20:00</option>
                                </select>
                            </div>
                        </div>
                        <div class="border-bottom border-dark py-4">
                            <p class="fs-4">預約訂單內容</p>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">品項</th>
                                  <th scope="col">單價</th>
                                  <th scope="col">數量</th>
                                  <th scope="col">小計</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>青醬蛤蜊義大利麵</td>
                                  <td>$120</td>
                                  <td>1</td>
                                  <td>$120</td>
                                </tr>
                                <tr>
                                  <td>青醬蛤蜊義大利麵</td>
                                  <td>$120</td>
                                  <td>1</td>
                                  <td>$120</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                        <div class="border-bottom border-dark py-4">
                          <p class="fs-4">優惠券</p>
                          <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="請輸入優惠券代碼"
                               aria-label="Recipient's username">
                            <button class="btn btn-outline-dark" type="button">
                                送出優惠券
                            </button>
                          </div>
                        </div>
                        <div class="py-4 text-center">
                            <button class="btn btn-lg btn-dark px-4" type="button">送出訂單</button>
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
    };
  },
  methods: {
    modalShow() {
      this.modal.show();
    },
    modalClose() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal('#orderModal');
  },
};
</script>
