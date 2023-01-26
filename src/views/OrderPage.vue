<template>
  <div class="container py-5">
    <div class="accordion" id="accordionFlushExample" >
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed shadow-none bg-dark text-white"
           type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne">
            訂單一
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse border"
         data-bs-parent="#accordionFlushExample">
          <div class="accordion-body row justify-content-center">
            <div class="col-12 col-md-8">
              <table class="table mx-auto">
                <tbody>
                  <tr>
                    <th class="col-3">類別</th>
                    <td class="ms-3">Mark</td>
                  </tr>
                  <tr>
                    <th class="col-3">取餐人姓名</th>
                    <td class="ms-3">Mark</td>
                  </tr>
                  <tr>
                    <th class="col-3">取餐人聯絡電話</th>
                    <td class="ms-3">Mark</td>
                  </tr>
                  <tr>
                    <th class="col-3">取餐人地址</th>
                    <td class="ms-3">Mark</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: {},
    };
  },
  methods: {
    getOrderData() {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/orders?page=1`;
      this.axios.get(api).then((res) => {
        console.log(res);
        this.orders = res.data.orders;
        console.log(this.orders);
      });
    },
  },
  created() {
    this.getOrderData();
  },
};
</script>
