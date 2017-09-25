<template>
  <div class="login">
    <router-view></router-view>
    <header class="MyepetHeader">
      <div class="login_bg">
        <div class="rela ftc head-top">
          <a href="#" class="aback page-top"></a>
          <div class="zfont ft16 block">
            <router-link to="/zhuce" class="afff">注册</router-link>

          </div>
        </div>
        <div class="mlogo">
          <img src="//static.epetbar.com/mpet/images/login/logo.png">
        </div>
        <div class="es_por4">
          <ul id="tags4" class="clearfix login_style">
            <li class="selectTag4" @click="toggleActive(true)"  :class="{isActive:isCommon}">
              <a href="javascript:;">普通登录</a>
              <i class="li_i"></i>
            </li>
            <li  @click="toggleActive(false)"  :class="{isActive:!isCommon}">
              <a href="javascript:;">手机动态密码登录</a>
              <i class="li_i"></i>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="login_input bgfff">
      <div class="mformBox">
        <div class="Content4" id="Content0" v-show="isCommon">
          <ul class="mform">
            <li>
              <span class="mNameIco"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="password" placeholder="输入密码" class="text" name="password" id="password">
            </li>
          </ul>
        </div>
        <div class="Content4" id="Content1" v-show="!isCommon">
          <ul class="mform">
            <li>
              <span class="mNameIco phone_Number"></span>
              <input type="text" placeholder="已注册的手机号" class="text" name="username" id="phoneNumber">
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="number" placeholder="输入图形验证码" class="text" name="password" id="pic_number">
              <span class="veritycode">
                <img src="https://wap.epet.com/share/seccode.html?hash=5157&height=30&width=85" alt="">
              </span>
            </li>
            <li>
              <span class="mpasswordIco"></span>
              <input type="number" placeholder="动态密码" class="text" name="password" id="message_number">
              <a href="javascript:;" class="get_phonepass afff ft14 w9 nocode">获取动态密码</a>
              <a href="javascript:;" class="get_phonepass afff ft12" style="display: none">短信已发送</a>
              <a href="javascript:;" class="resend_phonepass afff ft14 w9" style="display: none"> xx秒可重新获取</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="forget ftc">
      <a href="javascript:;" class="btn-register ft14 forget_click pull-right">忘记密码</a>
    </div>
    <div class="ftc pt5 loginbtn" id="Content0_btn">
      <a href="javascript:;" class="btn-login afff">登 录</a>
    </div>
    <div class="ft12 c666 ftc mt_12">
      APP专享:E宠团5折包邮,首单满99送99
      <a href="javascript:;" class="cblue">去下载</a>
    </div>
    <div style="height:3em"></div>
    <div class="other-login">
      <div class="ftc ft16 mt c666 partners"><b>合作网站登录</b></div>
      <ul class="uList1 clearfix">
        <li>
          <a href="javascript:;"><img src="//static.epetbar.com/mpet/images/login/login_ico4.png"></a>
        </li>
        <li>
          <a href="javascript:;"><img src="//static.epetbar.com/mpet/images/login/login_ico2.png"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        isActive:'active',
        isCommon:true
      }
    },
    methods:{
      toggleActive(isActive){
        this.isCommon = isActive
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.css"
  .login
    z-index 11
    .MyepetHeader
      background: url('https://img1.epetbar.com/2017-09/21/11/2ac7b0a4f0ab1e4a63819e0668d1cb39.png') no-repeat;
      background-size: 100% 100%
      .login_bg
        .head-top
          height 45px
          .page-top
            height: 50px;
            line-height: 50px;
            position: relative;
            padding: 0 1em;
          .aback
            display: block;
            width: 22px;
            height: 20px;
            position: absolute;
            margin-top: 16px;
            margin-left: 10px;

          .zfont
            position: absolute;
            top 0
            right 10px
            margin-top 10px
            a
              font-size: 18px;
              color white
        .mlogo
          padding: 1em 0 2em 0;
          img
            display: block;
            margin: 0 auto;
            width: 20%;
            vertical-align: middle;

        .es_por4
          overflow hidden
          background-color: rgba(255,255,255,0.3);
          .login_style
            li
              float: left;
              width: 50%;
              text-align: center;
              height: 44px;
              line-height: 44px;
              position: relative;
              a
                font-size: 15px;
                color: #fff;
                display: block;
            .isActive
              .li_i
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid #fff;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin auto
    .login_input
      .mformBox
        background: #fff;
        border-radius: 0.5em;
        margin: 0em 4% 1em 4%;
        padding: 0 1.6%;
        .Content4
          .mform
            li
              border-bottom: #e2e2e2 solid 1px;
              padding: 12px 0 12px 30px;
              position: relative;
              .mNameIco
                float: left;
                display: inline;
                width: 17px;
                height: 21px;
                background: url('https://static.epetbar.com/mpet/images/ico3.png') no-repeat;
                background-size: contain;
                margin: 1px 0 0 -25px;
              .phone_Number
                background: url('https://static.epetbar.com/mpet/images/ico1.png') no-repeat;
                float: left;
                display: inline;
                width: 17px;
                height: 17px;
                background-size: contain;
                margin: 2px 0 0 -25px;
              .mpasswordIco
                float: left;
                display: inline;
                width: 17px;
                height: 20px;
                margin: 0px 0 0 -25px;
                background: url('https://static.epetbar.com/mpet/images/ico4.png') no-repeat;
                background-size: contain;
              .get_phonepass, .resend_phonepass
                background: #fff;
                color: #ff4259;
                border: 1px solid #eb4c33;
                position: absolute;
                right: 0;
                top: 11px;
                border-radius: 3px;
                width: 100px;
                text-align: center;
                padding: 0.3em 0;
              /*<!--.nocode-->
                <!--background: #f5f5f5;-->
                <!--color: #b8b8b8;-->
                <!--border: 1px solid #b8b8b8;-->*/
              .veritycode
                img
                  display: block;
                  position: absolute;
                  top: 5px;
                  right: 0px;
              input
                display: block;
                height: 21px;
                width: 100%;
                font-size: 15px;
                border: none;
                padding: 0;
                color: #665;
                font-family: "Microsoft Yahei",tahoma,arial;
                outline: none;


    .forget
      padding-left: 17rem;
      .btn-register:hover
        color #898989
    .loginbtn
      .btn-login
        display: block;
        letter-spacing: 5px;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        padding: .6em 0;
        text-align: center;
        margin: 5%;
    .other-login
      margin o auto
      .partners
        color #d7d7d7;
        margin-top 0.5em;
      .uList1
        padding: 1.5em 0;
        li
          width: 37%;
          padding: 0 1.2em;
          float: left;
          display: inline;
          flex: 1;
          a
            display: block;
            img
              width: 60%;
              height: auto;
              display: block;
              margin: auto;
              max-width: 176px;


</style>
