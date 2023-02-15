<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <SpinnerLoadingPage ref="spinnerLoadingPage"></SpinnerLoadingPage>
  <messageToast ref="messageToast" :messageReceived="toastMessage" style="z-index:100">
  </messageToast>
  <div class="home">
    <!-- 廣告Modal -->
    <advertisementModal ref="advertisementModal"></advertisementModal>
    <!-- header -->
    <homePageHeader></homePageHeader>
    <!-- 消費方式 -->
    <div class="container mx-auto" style="max-width:800px;">
      <p class="mx-auto text-center fs-2 fw-bold border border-dark"
       style="width:300px; margin:80px 0 100px 0;">
        消費方式
      </p>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col expand-target">
          <div class="d-flex flex-column
           align-items-center text-center mx-2" style="height:350px">
            <img src="../assets/images/others/eatin.png" alt="" class="mb-4" style="height:150px">
            <p class="fs-5 fw-bold">內用點餐</p>
            <p class="fs-4">餐點新鮮出爐<br>絕佳美味饗宴</p>
          </div>
        </div>
        <div class="col expand-target">
          <div class="d-flex flex-column
           align-items-center text-center mx-2" style="height:350px">
            <img src="../assets/images/others/takeaway.png" alt=""
             class="mb-4" style="height:150px">
            <p class="fs-4 fw-bold">預約外帶</p>
            <p class="fs-4">指定取餐時間<br>省時方便 </p>
          </div>
        </div>
        <div class="col expand-target">
          <div class="d-flex flex-column
           align-items-center text-center mx-2" style="height:350px">
            <img src="../assets/images/others/fooddelivery.png" alt=""
             class="mb-4" style="height:150px">
            <p class="fs-4 fw-bold">外送到府</p>
            <p class="fs-4">餐點費用達300元<br>可免費外送</p>
            <p class="fs-6 mt-0">未達300元外送費用50元</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 品牌理念 -->
    <div class="container mt-4 d-flex flex-column align-items-center
     justify-contnent-center" style="max-width:1000px;">
      <div id="introduction1" data-aos="fade-right" data-aos-duration="2000"
        class="w-100 d-flex justify-content-center align-items-end">
        <div id="introduction1-box" class="position-relative mb-5 border border-dark border-2
         d-flex justify-content-lg-end  justify-content-center align-items-end">
          <div id="introduction1-img" class="position-absolute"></div>
          <div id="introduction1-text">
            <h1 class="fw-bold mb-5">對品質的堅持</h1>
            <p class="fs-3">有機栽種安全衛生</p>
            <p class="fs-3">手工麵條口感獨特</p>
          </div>
        </div>
      </div>
      <div id="introduction2" data-aos="fade-left" data-aos-duration="2000"
        class="w-100 d-flex justify-content-center align-items-end">
        <div id="introduction2-box" class="position-relative mb-5 border border-dark border-2
         d-flex justify-content-lg-start justify-content-center align-items-end">
          <div id="introduction2-img" class="position-absolute"></div>
          <div id="introduction2-text" class="text-center">
            <h2 class="fw-bold">Recordis</h2>
            <h2 class="fw-bold mb-5">在拉丁文中代表著記憶</h2>
            <p class="fs-6 lh-sm">兒時第一次嚐到義大利麵的新奇口感</p>
            <p class="fs-6 lh-sm">學生時期伴隨朋友嘻笑入口的濃郁歡樂</p>
            <p class="fs-6 lh-sm">與家人一起分享佳餚時的平凡幸福</p>
            <p class="fs-6 lh-sm">期待在Recordis與您相遇</p>
            <p class="fs-6 lh-sm">與您細細品嚐過去的回憶</p>
            <p class="fs-6 lh-sm">也在這裡創造更多美好體驗</p>
          </div>
        </div>
      </div>
      <router-link to="/about" type="button" class="mb-5 mx-auto btn btn-dark" style="width:150px;">
        查看品牌理念
      </router-link>
    </div>
    <!-- 推薦餐點 -->
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div class="position-relative" style="height:50px;">
        <div class="bg-dark position-absolute top-50" style="width:100%; height:1px"></div>
        <span class="bg-white position-absolute start-50 top-50 translate-middle
         fw-bolder fs-4 text-dark text-center mx-auto px-3">
          推薦餐點
        </span>
      </div>
    </div>
    <!-- 餐點卡片 -->
    <div class="container my-4" style="max-width:1000px;"
     data-aos="fade-right" data-aos-duration="1000">
      <div class="row gx-4 gy-5 row-cols-2 row-cols-md-3">
        <div class="col d-flex justify-content-center card-expand"
         v-for="(item) in recommandedProducts" :key="item.id">
          <div class="card border-dark" style="width: 18rem;">
            <img :src="item.imageUrl" class="card-img-top" alt="...">
            <div class="card-body border-bottom border-dark">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.price }}</p>
            </div>
            <div class="d-flex w-100" style="height:30px;">
              <span class="d-block text-center text-decoration-none
                border-end border-dark w-50 lh-lg link-hover"
                 @click="turnToDetailPage(item.id)" @keyup="esc">
                詳細資訊
              </span>
              <span class="d-block text-center text-decoration-none w-50 lh-lg link-hover"
                @click="QuickAddToCart(item.id)" @keyup="plus">
                預約外帶
              </span>
            </div>
          </div>
        </div>
        <router-link to="/productList" type="button"
         class="my-5 mx-auto btn btn-dark" style="width:150px;">
          查看所有餐點
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import advertisementModal from '../components/AdvertisementModal.vue';
import SpinnerLoadingPage from './SpinnerLoadingPage.vue';
import messageToast from '../components/MessageToast.vue';
import homePageHeader from '../components/HomePageHeader.vue';

export default {
  data() {
    return {
      recommandedProductsId: ['-NLv7XDV7SGeJaegYizF', '-NLv715KqT0NKtudRi4H', '-NLv6lqylqkSJXmEknrw', '-NLv5eDLFEhzT-HdtKwu', '-NLv5rF7LD96Yh6Dkvcb', '-NLv6UA0Xvg4ct9RWnep'],
      recommandedProducts: [],
      toastMessage: '餐點已加入預訂清單',
      expandedNum: 0,
    };
  },
  emits: ['updateQty'],
  components: {
    homePageHeader, advertisementModal, SpinnerLoadingPage, messageToast,
  },
  methods: {
    getrecommandedProducts(id) {
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/product/${id}`;
      this.axios.get(api).then((res) => {
        this.recommandedProducts.push(res.data.product);
      });
    },
    QuickAddToCart(id) {
      this.$refs.spinnerLoadingPage.loadingPageShow();
      const api = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_NAME}/cart`;
      const data = {
        data: {
          product_id: `${id}`,
          qty: 1,
        },
      };
      this.axios.post(api, data).then((res) => {
        this.$refs.spinnerLoadingPage.loadingPageHide();
        // 更新 NavBar 的產品數量
        this.$emit('updateQty');
        if (res.data.success) {
          this.toastMessage = '餐點已加入預訂清單';
          this.$refs.messageToast.toastShow();
        } else {
          this.toastMessage = '餐點加入預訂清單失敗';
          this.$refs.messageToast.toastShow();
        }
      });
    },
    // 切換到詳細產品資訊頁面
    turnToDetailPage(id) {
      this.$router.push(`/productDetail/${id}`);
    },
    // 消費方式特效
    expand() {
      const expandTargets = document.getElementsByClassName('expand-target');
      const expandTargetCopy = [...expandTargets];
      expandTargetCopy.forEach((item, i) => {
        item.classList.remove('expanded');
        if (i + 1 === this.expandedNum) {
          item.classList.add('expanded');
        }
      });
    },
  },
  created() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    this.recommandedProductsId.forEach((item) => {
      this.getrecommandedProducts(item);
    });

    AOS.init();
  },
  watch: {
    expandedNum() {
      this.expand();
    },
  },
  mounted() {
    this.expandedNum += 1;

    // 每3秒換一次 expandedNum
    setInterval(() => {
      if (this.expandedNum <= 2) {
        this.expandedNum += 1;
      } else if (this.expandedNum === 3) {
        this.expandedNum = 1;
      }
    }, 3000);
  },
};
</script>
