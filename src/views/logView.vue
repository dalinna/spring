<template>
<div class='log-view-box'>
  <div class="log-view" id="logView" ref='imageWrapper'>
    <img src='dataURL'/>
    <div class="top" >
      <p class="title">来自🏠{{formItem.city}} 的{{formItem.name}} </p>
      <p class="title">假期的时间分配</p>
    </div>
    <div class="list">
      <div class="item">
        <span class="title">😪睡大觉 </span>
        <div class="progress" :style="{ width: ((formItem.sleepTime*100)/24)/2+ 0.5 + 'vw' }"></div>
        <div>{{((formItem.sleepTime*100)/24).toFixed(2)}}%</div>
      </div>
      <div class="item">
        <span  class="title">📱刷手机 </span>
        <div class="progress" :style="{ width: (formItem.phoneTime*100/24)/2+ 0.5 + 'vw'  }"></div>
        <div>{{(formItem.phoneTime*100/24).toFixed(2)}}%</div>
      </div>
      <div class="item">
        <span  class="title">📺看电视 </span>
        <div class="progress" :style="{ width: (formItem.tvTime*100/24) /2+ 0.5 + 'vw' }"></div>
        <div>{{(formItem.tvTime*100/24).toFixed(2)}}%</div>
      </div>
      <div class="item">
        <span  class="title">📖搞学习 </span>
        <div class="progress" :style="{ width: (formItem.studyTime*100/24)/2+ 0.5 + 'vw'  }"></div>
        <div>{{(formItem.studyTime*100/24).toFixed(2)}}%</div>
      </div>
      <!-- <div class="item">
        <span>🎮打游戏 </span>
        <div class="progress" :style="{ width: (formItem.gameTime*100/24) *(1.3)+ 'px' }"></div>
        <div>{{(formItem.gameTime*100/24).toFixed(2)}}%</div>
      </div> -->
      <div class="item">
        <span  class="title">🧘‍♀️做运动 </span>
        <div class="progress" :style="{ width: (formItem.sportTime*100/24)/2+ 0.5 + 'vw'  }"></div>
        <div>{{(formItem.sportTime*100/24).toFixed(2)}}%</div>
      </div>
      <div class="item danger">
        <span  class="title">😷外出 </span>
        <div class="progress" :style="{ width: (formItem.outTime*100/24/60)/2+ 0.5 + 'vw'  }"></div>
        <div>{{((formItem.outTime/60)*100/24).toFixed(2)}}%</div>
      </div>
    </div>
    <div class="btm">
      <img class="btm-img" src="../assets/img/log_view_back.png" alt="">
    </div>
    <div class="tip-btm">
      <p>特此纪念 2020 这个难忘的春节。</p>
      <p>战役未止，别放松警惕，我们会胜利！</p>
    </div>
    <div class="btm">
      <img class="qrcode-img" src="../assets/img/log_view_qrcode.png" alt="">
    </div>
    <p class="last-tip">- 上述内容为用户自行填写创建，真实性由其本人负责 -</p>
  </div>
<div @click="toImg">生成图片</div>
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
      dataURL: '',
      formItem: {
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
      const localStorageData = JSON.parse(localStorage.getItem('myLog'));
      this.formItem = Object.assign({}, this.formItem, localStorageData);
    },
    toImg() {
      this.$html2canvas(this.$refs.imageWrapper, { backgroundColor: null }).then((canvas) => {
        const imgUri = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        const saveLink = document.createElement('a');
        saveLink.href = imgUri;
        saveLink.download = saveLink.click();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.log-view {
  padding: 30px 30px 60px 30px;
  color: #17569F;
  font-family: PingFangSC-Semibold;
  font-size: 12px;
  text-align: left;
  .last-tip{
    text-align: center;
  }
  .top {
    margin-bottom: 30px;
    .title{
      text-align: center;
    }
  }

  .title {
    font-size: 15px;
    color: #17569F;
    text-align: left;
  }

  ;

  .num {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    margin-bottom: 30px;
  }
  .list {

    .item {
      display: flex;
      align-items: baseline;
      margin-bottom:8px;
      .progress {
        // flex: 1;
        height: 11px;
        margin: 0 12px;
        background: #17569F
      }
      .title{
        display: inline-block;
        width: 70px;
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
    margin-top: 25px;
    text-align: center;
    .btm-img{
      width: 100%;
    }
    .qrcode-img{
      width: 60px;
      margin-bottom: 20px;
    }
  }
  .tip-btm{
    margin-top: 30px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #17569F;
    p:last-of-type{
      font-weight: bold;
      margin-top: 5px;
    }
  }
}
</style>
