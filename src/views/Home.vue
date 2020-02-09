<template>
  <div class="home">
    <div class="top">
      <p class="title">这个春节，全国人民积极响应号召👍</p>
      <p class="title">假期的时间分配🕛</p>
    </div>
    <p class="num">
      — 截止 <span class="bold-font">{{formData.time}}</span>，
      已有 <span class="bold-font">{{formData.total}}</span> 人参与记录 — </p>
    <div class="list">
      <div class="item">
        <span  class="title">😪睡大觉 </span>
        <div class="progress" :style="{ width: formData.sleepTime/2+0.5+ 'vw' }"></div>
        <div>{{formData.sleepTime}}%</div>
      </div>
      <div class="item">
        <span  class="title">📱刷手机 </span>
        <div class="progress" :style="{ width: formData.phoneTime/2+0.5+ 'vw' }"></div>
        <div>{{formData.phoneTime}}%</div>
      </div>
      <div class="item">
        <span  class="title">📺看电视 </span>
        <div class="progress" :style="{ width: formData.tvTime/2+ 0.5 + 'vw' }"></div>
        <div>{{formData.tvTime}}%</div>
      </div>
      <div class="item">
        <span  class="title">📖搞学习 </span>
        <div class="progress" :style="{ width: formData.studyTime/2+0.5+ 'vw' }"></div>
        <div>{{formData.studyTime}}%</div>
      </div>
      <div class="item">
        <span  class="title">🧘‍♀️做运动 </span>
        <div class="progress" :style="{ width: formData.sportTime/2+0.5+ 'vw' }"></div>
        <div>{{formData.sportTime}}%</div>
      </div>
      <div class="item danger">
        <span  class="title">😷外出 </span>
        <div class="progress" :style="{ width: formData.outTime/2+0.5+ 'vw' }"></div>
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
        sleepTime: 60,
        phoneTime: 20,
        tvTime: 10,
        studyTime: 8,
        gameTime: 5,
        sportTime: 5,
        outTime: 2,
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const api = 'http://118.31.7.116:8080/getInfo';
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
    .bold-font{
      font-weight: bold;
    }
  }

  ;

  .list {
    padding: 0 20px;
    width: fit-content;
    margin: 0 auto;
    .item {
      width: fit-content;
      display: flex;
      align-items: baseline;
      margin-bottom: 8px;
      .progress {
        // flex: 1;
        height: 11px;
        margin: 0 12px;
        background: #17569F
      }
      .title{
        display: inline-block;
        width: 70px;
        text-align: left;
      }
    }
    .danger{
      color: #FF5F7A;
      .progress{
        background: #FF5F7A;
      }
      .title{
        color: #FF5F7A;
      }
    }
  }
  .btm{
    padding: 0 32px;
    margin-top: 50px;
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
