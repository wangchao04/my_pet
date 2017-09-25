<template>
  <div class="wipe">
    <div class="next" v-show="isShow">
      <div class="mformBox">
        <form action="">
          <ul class="mform">
            <li>
              <span class="mNameIco"></span>
              <span>手机号</span>
            </li>
            <li>
              <span class="mNameIco"></span>
              <input type="number" placeholder="图片验证码">
            </li>
            <li>
              <span class="mNameIco"></span>
              <input type="number" placeholder="验证码">
            </li>
            <li>
              <span class="mNameIco"></span>
              <input type="number" placeholder="你的昵称/用户名">
            </li>
            <li>
              <span class="mNameIco"></span>
              <input type="number" placeholder="请设置密码">
            </li>
            <li>
              <span class="mNameIco"></span>
              <input type="number" placeholder="请确认密码">
            </li>
          </ul>
        </form>
        <div class="nextButton">
          <span @click="showNext(false)">上一步</span>
        </div>
      </div>
    </div>
    <router-link to="/myPet">返回</router-link>
    <div class="mformBox">
      <ul class="mform">
        <li>
          <span class="mNameIco"></span>

           <!-- <form >
              <input type="text"  placeholder="请输入手机号">
            </form>-->




        </li>
      </ul>
    </div>
    <div class="nextButton">
      <span @click="showNext(true)">下一步</span>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      showNext(isShow){
        this.isShow=isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wipe
    width 100%
    height 800px
    background white
    .next
      height 800px
      width 100%
    .mformBox
      background: #fff;
      border-radius: 0.5em;
      margin: 0em 4% 1em 4%;
      padding: 0 1.6%;
      .mform
        li
          border-bottom: #e2e2e2 solid 1px;
          padding: 12px 0 12px 30px;
          position: relative;
          input
            outline:medium
          .mNameIco
            float: left;
            display: inline;
            width: 17px;
            height: 21px;
            background: url('https://static.epetbar.com/mpet/images/ico3.png') no-repeat;
            background-size: contain;
            margin: 1px 0 0 -25px;
    .nextButton
      width 100%
      margin-top: 4em;
      span
        text-align center
        width 300px
        height 30px
        margin 0 auto
        display block
        background: #d7d7d7;
        color: #fff;
        border-radius 20px
        line-height 24px


</style>
