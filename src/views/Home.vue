<template>
  <div class="home">
    <div class="top">
      <p class="title">这个春节，全国人民积极响应号召👍</p>
      <p class="title">春节10天假期分别用于</p>
    </div>
    <p class="num">— 截止 {{formData.time}}，已有{{formData.total}}人参与记录 — </p>
    <div class="list">
      <div class="item">
        <span>😪睡大觉 </span>
        <div class="progress" :style="{ width: formData.sleepTime *(1.3)+ 'px' }"></div>
        <div>{{formData.sleepTime}}%</div>
      </div>
      <div class="item">
        <span>📱刷手机 </span>
        <div class="progress" :style="{ width: formData.phoneTime *(1.3)+ 'px' }"></div>
        <div>{{formData.phoneTime}}%</div>
      </div>
      <div class="item">
        <span>📺看电视 </span>
        <div class="progress" :style="{ width: formData.tvTime *(1.3)+ 'px' }"></div>
        <div>{{formData.tvTime}}%</div>
      </div>
      <div class="item">
        <span>📖搞学习 </span>
        <div class="progress" :style="{ width: formData.studyTime *(1.3)+ 'px' }"></div>
        <div>{{formData.studyTime}}%</div>
      </div>
      <div class="item">
        <span>🎮打游戏 </span>
        <div class="progress" :style="{ width: formData.gameTime *(1.3)+ 'px' }"></div>
        <div>{{formData.gameTime}}%</div>
      </div>
      <div class="item">
        <span>🧘‍♀️做运动 </span>
        <div class="progress" :style="{ width: formData.sportTime *(1.3)+ 'px' }"></div>
        <div>{{formData.sportTime}}%</div>
      </div>
      <div class="item danger">
        <span>😷外出 </span>
        <div class="progress" :style="{ width: formData.outTime*(1.3)+ 'px' }"></div>
        <div>{{formData.outTime}}%</div>
      </div>
    </div>
    <div class="btm">
      <img class="btm-img" src="../assets/img/index_back.png" alt="">
    </div>
    <div class="btm-btn" @click="toWrite">添加我的记录</div>
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      formData: {
        time: '',
        total: 0,
        sleepTime: 100,
        phoneTime: 90,
        tvTime: 70,
        studyTime: 60,
        gameTime: 40,
        sportTime: 20,
        outTime: 5,
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const api = 'http://127.0.0.1:8000/getInfo';
      this.$http.get(api).then((response) => {
        this.formData = JSON.parse(response.data).data;
      });
    },
    toWrite() {
      this.$router.push({ name: 'mylog' });
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  padding: 30px 0 60px 0;
  color: #17569F;
  font-family: PingFangSC-Semibold;
  font-size: 12px;
  .top {
    margin-bottom: 30px;
  }

  .title {
    font-size: 15px;
    color: #17569F;
    text-align: center;
  }

  ;

  .num {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    margin-bottom: 30px;
  }

  ;

  .list {
    padding: 0 20px;

    .item {
      display: flex;
      align-items: baseline;
      margin-bottom: 8px;
      .progress {
        // flex: 1;
        height: 11px;
        margin: 0 12px;
        background: #17569F
      }
    }
    .danger{
      color: #FF5F7A;
      .progress{
        background: #FF5F7A;
      }
    }
  }
  .btm{
    padding: 0 32px;
    margin-top: 25px;
    .btm-img{
      width: 100%;
    }
  }
  .btm-btn{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    height: 50px;
    line-height: 50px;
    background: #17569F;
    color: #fff;
    font-size: 15px;
  }
}
</style>
