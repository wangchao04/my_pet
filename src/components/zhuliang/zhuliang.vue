<template>
  <div>
    <scroller>
      <div class="catContent">
        <div class="swipeWiper">
          <mt-swipe :auto="2000" class="swipeWiper2">
            <mt-swipe-item><img src="./1.jpg" alt="" ></mt-swipe-item>
            <mt-swipe-item><img src="./2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="./3.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
        <xline></xline>
        <div class="switch">
          <div class="switchable">
            <ul>
              <li>
                <img src="./jinkou-a.jpg" alt="">
              </li>
              <li>
                <img src="./guochan.jpg" alt="">
              </li>
              <li>
                <img src="./kouwei.jpg" alt="">
              </li>
              <li>
                <img src="./danjin.jpg" alt="">
              </li>
            </ul>
          </div>
          <div class="switchContent">
            <div class="switchItem">
              <a href="#">
                <img src="./you.jpg" alt="">
              </a>
            </div>
            <div class="switchItem">
              <a href="#">
                <img src="./cheng.jpg" alt="">
              </a>
            </div>
            <div class="switchItem">
              <a href="#">
                <img src="./quan.jpg" alt="">
              </a>
            </div>
            <div class="switchItem">
              <a href="#">
                <img src="./lao.jpg" alt="">
              </a>
            </div>
            <div class="switchItem">
              <a href="#">
                <img src="./yun.jpg" alt="">
              </a>
            </div>
            <div class="switchItem">
              <a href="#">
                <img src="./qita.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
        <xline></xline>
        <div class="boxImg">
          <div class="boxImg-left">
            <a href="">
              <img src="./get.jpg" alt="">
            </a>
          </div>
          <div class=" boxImg-right">
            <a href="">
              <img src="./cs.jpg" alt="">
            </a>
            <a href="">
              <img src="./zj.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="imgText">
          <img src="./text.jpg" alt="">
        </div>
        <div class="discount">
          <div class="bigImg">
            <a href="#">
              <img src="./1.jpg">
            </a>
          </div>
          <div class="xScroll" ref="xScroll">
            <ul class="list">
              <li class="item">
                <a href="#">
                  <div class="imgWipe">
                    <img src="./l1.jpg">
                  </div>
                  <div class="textWipe">
                    美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)
                  </div>
                  <div class="price">￥380.00</div>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <div class="imgWipe">
                    <img src="./l1.jpg">
                  </div>
                  <div class="textWipe">
                    美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)
                  </div>
                  <div class="price">￥380.00</div>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <div class="imgWipe">
                    <img src="./l1.jpg">
                  </div>
                  <div class="textWipe">
                    美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)
                  </div>
                  <div class="price">￥380.00</div>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <div class="imgWipe">
                    <img src="./l1.jpg">
                  </div>
                  <div class="textWipe">
                    美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)
                  </div>
                  <div class="price">￥380.00</div>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <div class="imgWipe">
                    <img src="./l1.jpg">
                  </div>
                  <div class="textWipe">
                    美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)
                  </div>
                  <div class="price">￥380.00</div>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <div class="imgWipe">
                    <img src="./l1.jpg">
                  </div>
                  <div class="textWipe">
                    美国原装进口Lucy 三文鱼南瓜藜麦配方全猫粮 10磅(4.56kg)
                  </div>
                  <div class="price">￥380.00</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <xline></xline>
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
      <div class="lastt"></div>
    </scroller>

  </div>


</template>

<script>
  import xline from '../xline.vue'
  import BScroll from 'better-scroll'

  export default {

    components: {
      xline
    },
    methods: {
      _scroll(){
        new BScroll(this.$refs.xScroll, {
          ScrollY:false,
          scrollX:true
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this._scroll()
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .catContent
      margin-top 96px

      .swipeWiper
        .swipeWiper2
          height 230px
          img
            width:100%;
            height:100%;
      .switch
        overflow hidden
        .switchable
          ul
            display flex
            li
              flex 1
              img
                width: 100%;
        .switchContent
          .switchItem
            float left
            width 33.33%
            img
              width 100%
              display block
      .boxImg
        height 100%
        overflow hidden
        .boxImg-left
          float left
          width 50%
          img
            width 100%
            display block
        .boxImg-right
          float right
          width 50%
          img
            width 100%
            display block
      .imgText
        margin 5px 0
        img
          display block
          max-width: 50%;
          max-height: 73px;
          margin: 0 auto;
      .discount
        height 100%
        .bigImg
          width 100%
          img
            width 100%

        .xScroll
          overflow hidden
          width 100%
          height 100%
          .list
            float left
            display: flex;
            .item
              margin  10px
              border-right: 1px solid #e7e7e7;
              .imgWipe
                height 72px
                img
                  display block
                  margin 0 auto
                  height 100%
              .textWipe
                margin 0 auto
                width 85px
                white-space normal
                padding 5px
                height 28px
                color #666
                font-size: 12px;
                line-height 18px
                overflow hidden
              .price
                height 22px
                color: #e35356;
                font-size: 14px;
                margin-top: 5px;
                text-align: center;
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
    .lastt
      height: 20px;
      width: 20px;
</style>
