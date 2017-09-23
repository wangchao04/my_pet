<template>
  <scroller>
    <div class="shouye" >
      <div class="shouye-content">
        <div class="swipeWiper">
          <mt-swipe :auto="2000" class="swipeWiper2">
            <mt-swipe-item><img src="./1.jpg" alt="" ></mt-swipe-item>
            <mt-swipe-item><img src="./2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./3.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="go">
          <a href="#"><img src="./go.gif"/></a>
        </div>
        <list></list>
        <split></split>
        <div class="surprise-day">
          <div class="surprise-title">
            <div class="surprise-icon"><img src="//static.epetbar.com/static_web/wap/src/images/suprice.png"></div>
            <div class="timeOver">距本场结束 <span class="time">01</span> : <span class="time">01</span> : <span class="time">01</span></div>
            <div class="more">
              <a href="javascript: void(0)">
                <img src="https://img2.epetbar.com/nowater/2016-10/24/20/30b2568de06cb7c96a9af9ad4be3cae5.png" alt="">
              </a>
            </div>
          </div>
          <div class="surprise-list" ref="surpriseList">
            <ul>
              <li>
                <a href="#">
                  <img src="https://img1.epetbar.com/2016-02/22/10/ac151ea7a8d8ff782925fb753db4ad7b.jpg"/>
                  <span class="c-red">￥15.6</span>
                  <span>省￥3.5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://img1.epetbar.com/2016-02/22/10/ac151ea7a8d8ff782925fb753db4ad7b.jpg"/>
                  <span class="c-red">￥15.6</span>
                  <span>省￥3.5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://img1.epetbar.com/2016-02/22/10/ac151ea7a8d8ff782925fb753db4ad7b.jpg"/>
                  <span class="c-red">￥15.6</span>
                  <span>省￥3.5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://img1.epetbar.com/2016-02/22/10/ac151ea7a8d8ff782925fb753db4ad7b.jpg"/>
                  <span class="c-red">￥15.6</span>
                  <span>省￥3.5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://img1.epetbar.com/2016-02/22/10/ac151ea7a8d8ff782925fb753db4ad7b.jpg"/>
                  <span class="c-red">￥15.6</span>
                  <span>省￥3.5</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://img1.epetbar.com/2016-02/22/10/ac151ea7a8d8ff782925fb753db4ad7b.jpg"/>
                  <span class="c-red">￥15.6</span>
                  <span>省￥3.5</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <split></split>
        <div class="hot">
          <div class="hot-title">
            <a href="#">
              <img src="https://img2.epetbar.com/nowater/2017-03/09/18/ca98c516add7611e3d0d810d58c087bf.jpg">
            </a>
          </div>
          <div class="divboximg">
            <div class="divimg" style="width: 42.53%;">
              <a href="#">
                <img name="319x379" src="https://img2.epetbar.com/nowater/2017-09/21/09/03f51eb78add57a87f2619517758cbf4.jpg@!water" lazy="loaded">
              </a>
            </div>
            <div class="divimg" style="width: 57.33%;">
              <a href="#">
                <img name="430x189" src="https://img2.epetbar.com/nowater/2017-09/21/09/042df360a733282ab3544ce261e0a75d.jpg@!water">
              </a>
              <a href="#">
                <img name="430x189" src="https://img2.epetbar.com/nowater/2017-09/21/10/fcb76da8467e018d480207720f0bd74a.jpg@!water">
              </a>
            </div>
          </div>
        </div>
        <split></split>
        <div class="hot fashion">
          <div class="hot-title fashion-title">
            <img src="https://img2.epetbar.com/nowater/2017-07/06/8/7b40d88fc2263cf593bf07559e71cec0.png">
            <a href="#">
              <img src="https://img2.epetbar.com/nowater/2017-07/06/10/54d9f002646c397b6b19abefbe6c155b.png"/>
            </a>
          </div>
          <div class="fashion-pic">
            <img src="https://img1.epetbar.com/2017-07/28/13/2506a15cf4e969125891d29f869b8572.jpg@!500w0h" alt="">
          </div>
          <div class="fashion-detail">
            <p class="f12 c333">神奇饮水除口臭</p>
            <p class="f12 c999">
              <i></i> 20465 | 01:13
            </p>
          </div>
        </div>
        <split></split>
        <div class="hot fashion">
          <div class="hot-title fashion-title">
            <img src="https://img2.epetbar.com/nowater/2017-04/19/18/9cfe1253127a6fa47de6e711e216d1ee.png">
            <a href="#">
              <img src="https://img2.epetbar.com/nowater/2017-07/06/10/54d9f002646c397b6b19abefbe6c155b.png"/>
            </a>
          </div>
          <div class="fashion-pic">
            <img src="https://img2.epetbar.com/nowater/2017-09/14/09/3862fcd9c0004d91a81ad63a494b82a0.jpg@!water" alt="">
          </div>
        </div>
        <split></split>
        <div class="hot fashion discount">
          <div class="hot-title fashion-title discount-title">
            <img src="https://img2.epetbar.com/nowater/2017-04/19/20/7f62736d64ad9222875ff3f36d094997.png">
          </div>
          <div class="fashion-text f15">伯纳天纯</div>
          <div class="fashion-pic">
            <img src="https://img2.epetbar.com/nowater/2017-09/20/09/88edca1b9538b28257f4c14fa546d55e.jpg@!water" alt="">
          </div>
        </div>

        <div class="hot fashion discount">
          <div class="fashion-text f15">冠能</div>
          <div class="discount-pic">
            <img src="https://img2.epetbar.com/nowater/2017-09/20/09/88edca1b9538b28257f4c14fa546d55e.jpg@!water" alt="">
          </div>
        </div>
        <split></split>
        <div class="hot fashion discount">
          <div class="fashion-text f15">丝倍亮</div>
          <div class="discount-pic">
            <img src="https://img2.epetbar.com/nowater/2017-09/20/09/88edca1b9538b28257f4c14fa546d55e.jpg@!water" alt="">
          </div>
        </div>
        <split></split>
        <div class="hot fashion discount">
          <div class="fashion-text f15">荣耀马氏</div>
          <div class="discount-pic">
            <img src="https://img2.epetbar.com/nowater/2017-09/20/09/88edca1b9538b28257f4c14fa546d55e.jpg@!water" alt="">
          </div>
        </div>
        <split></split>
        <div class="hot fashion gongyi">
          <div class="hot-title fashion-title gongyi-title">
            <img src="https://img2.epetbar.com/nowater/2016-12/02/12/617e8ae8c72da60d562a30170c26c118.jpg">
            <a href="#">
              <img src="https://img2.epetbar.com/nowater/2016-12/02/16/0d2acd3b4d742a510dfa0142d493e145.png"/>
            </a>
          </div>
          <div class="fashion-pic gongyi-pic">
            <img src="https://img2.epetbar.com/nowater/2016-12/02/12/20c6bcc947e062dae210b391e2fa6a98.jpg" alt="">
            <div class="gongyi-text ft14 bold cfff ftc">
              <p class="mt5">截止今日，TA公益已联合E宠商城和<b class="bgfff cred round5 pl5 pr5 mr5 ml5">15</b>家品牌</p>
              <p class="mt5">累积捐赠<b class="bgfff cred round5 pl5 pr5 mr5 ml5">857,272.44</b>元</p>
              <p class="mt5">已合作<b class="ml5 mr5">7</b>家公益组织，举办参与<b class="bgfff cred round5 pl5 pr5 mr5 ml5">2</b>场公益活动,助养<b class="bgfff cred round5 pl5 pr5 mr5 ml5">34</b>位领养人</p>
            </div>
          </div>
          <div class="gongyi-brand">
            <div class="brand-name">
              <img src="https://img2.epetbar.com/nowater/2016-12/02/12/c31f5c121481db47aaf92f04d6be2d6e.png" alt="">
            </div>
            <div class="brand-scroll" ref="brandScroll">
              <div class="brand-content">
                <div class="brand-item">
                  <img src="https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg" alt="">
                  <br>
                  <span>已捐助￥16870000000</span>
                </div>
                <div class="brand-item">
                  <img src="https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg" alt="">
                  <br>
                  <span>已捐助￥16870000000</span>
                </div>
                <div class="brand-item">
                  <img src="https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg" alt="">
                  <br>
                  <span>已捐助￥16870000000</span>
                </div>
                <div class="brand-item">
                  <img src="https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg" alt="">
                  <br>
                  <span>已捐助￥16870000000</span>
                </div>
                <div class="brand-item">
                  <img src="https://img2.epetbar.com/nowater/2016-08/18/16/637879a33f1ea84ccdbfa2dc1b3de16e.jpg" alt="">
                  <br>
                  <span>已捐助￥16870000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <split></split>
        <div class="hot ratings gongyi ratings">
          <div class="hot-title fashion-title gongyi-title ratings-title">
            <img src="https://img2.epetbar.com/nowater/2017-01/13/20/a1225213b3d2bc9067676102e629bf1e.png">
            <a href="#">
              好评率97.44%<i></i>
            </a>
          </div>
          <div class="ratings-wrap">
            <ul class="ratings-list">
              <li>
                <a href="#">
                  <div class="pic-box">
                    <img src="https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c" alt="">
                    <span class="text">加入E宠物2年2月</span>
                  </div>
                  <h3><span class="l-text">红***w</span><span class="l-right">中华田园猫</span></h3>
                  <p class="desc">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="pic-box">
                    <img src="https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c" alt="">
                    <span class="text">加入E宠物2年2月</span>
                  </div>
                  <h3><span class="l-text">红***w</span><span class="l-right">中华田园猫</span></h3>
                  <p class="desc">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="pic-box">
                    <img src="https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c" alt="">
                    <span class="text">加入E宠物2年2月</span>
                  </div>
                  <h3><span class="l-text">红***w</span><span class="l-right">中华田园猫</span></h3>
                  <p class="desc">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="pic-box">
                    <img src="https://img1.epetbar.com/2017-03/29/14/d1cf520f66912ee6adcb29ffebe2efc8.jpg@!200w-c" alt="">
                    <span class="text">加入E宠物2年2月</span>
                  </div>
                  <h3><span class="l-text">红***w</span><span class="l-right">中华田园猫</span></h3>
                  <p class="desc">
                    包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="contact">
          <p>
            <a href="#" class="cred">触屏版</a>&nbsp;&nbsp;
            <a href="#">手机客户端</a>&nbsp;&nbsp;
            <a href="#">关于我们</a>&nbsp;&nbsp;
            <a href="#">联系我们</a>
          </p>
          <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
        </div>
      </div>
    </div>
    <div class="last"></div>
  </scroller>



</template>

<script>
  import Swiper from 'swiper'
  import list from '../list/list.vue'
  import split from '../split/split.vue'
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.$nextTick(() => {
        this._initScroll ()
      })
    },
    methods: {
      _initScroll () {
        new BScroll(this.$refs.surpriseList, {
          click: true,
          scrollX: true
        })
        new BScroll(this.$refs.brandScroll,{
          scrollX: true
        })
      }
    },
    components: {
      list,
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shouye
    margin-top 96px
    margin-bottom 100px
    height 100%
    .shouye-content
      padding-bottom 45px
      .swipeWiper
        .swipeWiper2
          height 230px
          img
            width:100%;
            height:100%;
      .go
        height 120px
        img
          width 100%
      .surprise-day
        .surprise-title
          padding 10px
          overflow hidden
          .surprise-icon
            float left
            margin-left -10px
            img
              height 24px
          .timeOver
            float left
            font-size 13px
            .time
              border 1px solid #ccc
              display inline-block
              width 20px
              height 20px
              text-align center
              line-height 20px
          .more
            width 45px
            float right
            a
              display block
              position relative
              top -10px
              img
                height 35px
        .surprise-list
          width 100%
          overflow hidden
          ul
            white-space nowrap
            float left
            li
              display inline-block
              width 85px
              height 130px
              margin 0 5px
              a
                display block
                height 100%
                img
                  width 100%
                span
                  display block
                  text-align center
                  font-size 13px
                  line-height 18px
                .c-red
                  color red
      .hot
        margin-top 10px
        .hot-title
          a
            display block
            img
              max-height 73px
              max-width 100%
        .divboximg
          display flex
          a
            display block
            img
              width 100%
              display block
        .fashion-title
          position relative
          &>img
            display block
            max-width 50%
            max-height 73px
            margin 0 auto
          a
            display block
            position absolute
            right 0
            top 0
            width 60px
            height 47px
            img
              display block
              width 100%
        .fashion-pic

          img
            display block
            width 100%
        .fashion-detail
          padding 10px
          text-align center
          line-height 18px
          .c333
            color #333
          .c999
            color #999
      .discount
        margin-top 0
        .discount-title
          &:after
            content ''
            position absolute
            left 0
            bottom 0
            width 100%
            height 1px
            background-color #ccc
            transform scaleY(0.3)
        .discount-pic
          height 155px
          img
            display block
            width 100%
        .fashion-text
          padding 10px
          font-size 15px
          line-height 21px
        .fashion-pic
          img
            display block
            height 155px
      .gongyi

        .gongyi-title
          &>a
            right 5px
            img
              margin-top 20px
              marign-right 10px
        .gongyi-pic
          position relative
          height 140px
          img
            position absolute
          .gongyi-text
            position absolute
            top 15%
            left 0
            width 100%
            font-size 14px
            p
              line-height 22px
              font-weight bold
        .gongyi-brand
          padding-left 10px
          display flex
          margin-top 10px
          .brand-name
            width 70px
            padding 10px 5px 5px 0
            border-right 1px #ccc solid
            img
              display block
              width 90%
          .brand-scroll
            flex 1
            overflow hidden
            .brand-content
              white-space nowrap
              float left
              .brand-item
                position relative
                display inline-block
                width 110px
                height 70px
                margin 5px
                margin-bottom 0
                text-align center
                padding-right 5px
                &:not(:last-child):after
                  content ""
                  position absolute
                  right 0
                  top 5px
                  width 1px
                  height 100%
                  background #ccc
                  transform scaleX(0.3)
                img
                  width 80%
                  margin 0 auto
                span
                  font-size 12px
                  color #666
                  margin 2px 0
                  display inline-block
                  width 100%
                  overflow hidden
                  text-overflow ellipsis


      .ratings
        .ratings-title
          a
            width 70px
            line-height 47px
            font-size 10px
        .ratings-wrap
          padding-right 10px
          .ratings-list
            overflow hidden
            li
              float left
              padding-left 10px
              width 50%
              box-sizing border-box
              margin-bottom 10px
              a
                display block
                background #f5f5f5
                padding-bottom 10px
                .pic-box
                  position relative
                  img
                    width 100%
                    display block
                  .text
                    position absolute
                    left 0
                    bottom 0
                    background rgba(0,0,0,.5)
                    display block
                    line-height 20px
                    text-align center
                    font-size 12px
                    color #ffffff
                    width 100%

                h3
                  margin-top 5px
                  font-size 13px
                  overflow hidden
                  padding 0 5px
                  .l-text
                    float left
                  .l-right
                    float right
                    background #ddd
                    border-radius 5px
                    padding 0 5px
                    line-height 20px
                .desc
                  font-size 13px
                  line-height 20px
                  margin 5px 5px 0 5px
                  height 60px
                  overflow hidden

      .contact
        margin-top 15px
        border-top 5px solid #f3f4f5
        p
          text-align center
          line-height 30px
          &:first-child
            font-size 14px
            margin-top 10px
            a
              color #333
            .cred
              color red
          &:last-child
            font-size 12px
  .last
    height 20px
    width 20px
</style>
