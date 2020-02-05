<template>
  <div class="my-log">
    <el-form :model="formItem" :rules="rules"
    :inline="true" class="log-form" ref="ruleForm"
    :hide-required-asterisk="true" >
      <el-form-item prop="city" label="来自🏠" class="form-item">
        <el-input type="text" v-model="formItem.city" class="city" placeholder="填写你的城市" />
      </el-form-item>
      <el-form-item prop="name" label="的" class="form-item form-item-name">
        <el-input type="text" v-model="formItem.name" class="city" placeholder="填写你的昵称" />
      </el-form-item>
      <div class="tip">积极响应号召，每天的<span class="bold-span">24小时</span>分别用于：</div>
      <div class="box">
        <el-form-item prop="phoneTime" label="📱刷手机" class="form-item form-item-num">
          <el-input-number v-model="formItem.phoneTime"
          :step="0.5" @change="handleChange" :min="0" size="small" :max="24" /> <span>小时</span>
        </el-form-item>
        <el-form-item prop="tvTime" label="📺看电视" class="form-item  form-item-num">
          <el-input-number v-model="formItem.tvTime"
          :step="0.5" @change="handleChange" :min="0" size="small" :max="24" /> <span>小时</span>
        </el-form-item>
        <el-form-item prop="gameTime" label="🎮打游戏" class="form-item form-item-num">
          <el-input-number v-model="formItem.gameTime"
          @change="handleChange" :min="0" size="small" :max="24" /> <span>小时</span>
        </el-form-item>
        <el-form-item prop="sportTime" label="🧘‍♀️做运动" class="form-item form-item-num">
          <el-input-number v-model="formItem.sportTime"
          @change="handleChange" :min="0" size="small" :max="24" /> <span>小时</span>
        </el-form-item>
        <el-form-item prop="studyTime" label="📖搞学习" class="form-item form-item-num">
          <el-input-number v-model="formItem.studyTime"
          @change="handleChange" :min="0" size="small" :max="24" /> <span>小时</span>
        </el-form-item>
        <el-form-item prop="sleepTime" label="😪睡大觉" class="form-item form-item-num">
          <el-input-number v-model="formItem.sleepTime"
          @change="handleChange" :min="0" size="small" :max="24" /> <span>小时</span>
        </el-form-item>
        <el-form-item prop="outTime" label="😷外出" class="form-item form-item-num go-out">
          <el-input-number v-model="formItem.outTime"
          @change="handleChange" :min="0" size="small" :max="999" /> <span>分钟</span>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')" class="submit-btn">
          生成我的记录
        </el-button>
      </el-form-item>
    </el-form>
    <p class="left">- 剩下的 16 小时 59 分钟，可能都用来思考和吃吃喝喝了 -</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import {
  Toast,
} from 'mint-ui';

export default {
  name: 'myLog',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      rules: {
        name: [{
          required: true,
          message: '请输入昵称',
          trigger: 'blur',
        },
        {
          min: 1,
          max: 12,
          message: '应为1-12字符',
          trigger: 'blur',
        }],
        city: [{
          required: true,
          message: '请输入城市',
          trigger: 'blur',
        },
        {
          min: 1,
          max: 12,
          message: '应为1-12字符',
          trigger: 'blur',
        }],
      },
      formItem: {
        city: '',
        name: '',
        phoneTime: 0,
        studyTime: 0,
        tvTime: 0,
        gameTime: 0,
        sportTime: 0,
        sleepTime: 0,
        outTime: 0,
      },
    };
  },
  methods: {
    handleChange() {
      // console.log('kdkdkk');
    },
    sendReq() {
      // console.log('kdkdkk');
      const api = 'http://www.baidu.com';
      this.$http.get(api, { params: { data: this.formItem } }).then((response) => {
        this.formData = response.data;
      });
    },
    onSubmit(formName) {
      const totalTime = this.formItem.phoneTime * 60
      + this.formItem.studyTime * 60
      + this.formItem.tvTime * 60
      + this.formItem.gameTime * 60
      + this.formItem.sportTime * 60
      + this.formItem.sleepTime * 60
      + this.formItem.outTime;
      if (totalTime > 24 * 60) {
        Toast('一天只有24小时哦');
        return;
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sendReq();
          localStorage.setItem('myLog', JSON.stringify(this.formItem));
          this.$router.push({ name: 'logview' });
        } else {
          Toast('请完善全部信息');
          return false;
        }
        return null;
      });
    },
  },
  submitReq() {
    console.log('000');
  },
};
</script>

<style lang="less" scoped>
.my-log {
  padding-top: 30px;

  /deep/.el-form-item__content {
    line-height: 25px;
  }

  /deep/.el-input-number--small .el-input-number__decrease {
    width: 17px;
  }

  /deep/.el-input-number--small .el-input-number__increase {
    width: 17px;
  }

  /deep/.ivu-form-item {
    margin-bottom: 0;
  }

  /deep/.el-form--inline .el-form-item {
    margin-right: 0;
    margin-bottom: 5px;
  }

  /deep/.el-input-number--small .el-input__inner {
    padding: 0 24px;
    background: #17569F;
    border: 1px solid #17569F;
    height: 27px;
    color: #fff;
  }

  /deep/.el-input__inner {
    padding: 0 5px;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .log-form {
    text-align: left;
    padding: 0 14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .tip {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #17569F;
    margin: 10px 0 30px 0;

    span {
      font-weight: bold;
      margin: 0 4px;
    }
  }

  .form-item {
    width: 145px;

    span {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #17569F;
    }

    /deep/.el-form-item__label {
      padding-right: 5px;
      font-family: AppleColorEmoji;
      font-size: 12px;
      color: #17569F;
      text-align: center;
      font-weight: bold;
      line-height: 25px;
    }

    /deep/.el-input-number--small {
      width: 75px;
      height: 25px;
      line-height: 25px;
    }
  }

  .el-form--inline {
    .form-item-num {
      width: 110px;
      margin-bottom: 30px;

      /deep/.el-form-item__label {
        margin: 0 0 10px 5px;
      }
    }

    .go-out {
      /deep/.el-form-item__label {
        color: #FF5F7A;
      }

      span {
        color: #FF5F7A;
      }
    }
  }

  .form-item-name {
    width: 122px;
  }

  .city {
    width: 92px;

    /deep/input {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      height: 30px;
    }
  }

  .left {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #17569F;
    text-align: center;
  }

  /deep/.submit-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border: none;
    background: #17569F;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #FFFFFF;
    border-radius: initial;
    padding: 20px 0;
  }
}
</style>
