export default {
  methods: {
    addToCart(id, num) {
      this.$refs.spinnerLoadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      const data = {
        data: {
          product_id: `${id}`,
          qty: num,
        },
      };
      this.axios.post(api, data).then((res) => {
        this.$refs.spinnerLoadingPage.loadingPageHide();
        // 更新 NavBar 的產品數量
        this.$emit('updateQty');
        if (res.data.success) {
          this.$refs.messageToast.toastShow('餐點已加入預訂清單');
        } else {
          this.$refs.messageToast.toastShow('餐點加入預訂清單失敗');
        }
      });
    },
    // 切換到詳細產品資訊頁面
    turnToDetailPage(id) {
      this.$router.push(`/productDetail/${id}`);
    },
    // 取得商品卡片內容
    getrecommandedProducts(id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/product/${id}`;
      this.axios.get(api).then((res) => {
        this.recommandedProducts.push(res.data.product);
      });
    },
  },
};
