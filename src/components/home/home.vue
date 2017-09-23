<template>
  <div>
    <div class="header">
        <div class="search">
          <div class="location">
            <a href="#">
              <span class="f14">猫猫站</span>
              <span>|</span>
              <span class="f12">重庆</span><i></i>
            </a>
          </div>
          <div class="search-epet">
            <a href="#">
              <input type="text" placeholder="搜索商品和品牌" disabled/>
              <span></span>
            </a>
          </div>
          <a href="#" class="epet-category"><img src="./mydope.png"/> </a>
        </div>
        <div class="tab" ref="tabDiv">
          <ul class="tab-menu">
            <li class="tab-item">
              <router-link to="/home/shouye"><span>首页</span></router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/zhuliang"><span>主粮</span></router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/maosha"><span>猫砂</span></router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/yiliao"><span>医疗保健</span></router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/lingshi"><span>零食玩具</span></router-link>
            </li>
            <li class="tab-item">
              <router-link to="/home/meirong"><span>美容香波</span></router-link>
            </li>
          </ul>
        </div>
      </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.$nextTick(() => {
        this.initScroll ()
      })
    },
    methods: {
      initScroll () {
        let tabDiv = this.$refs.tabDiv
        new BScroll(tabDiv, {
          click: true,
          scrollX: true,
          bounce: false
        })
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    z-index 300
    width 100%
    position fixed
    background #fff
    .search
      overflow hidden
      padding 16px
      display flex
      .location
        position relative
        font-size 18px
        line-height 20px
        margin-right 20px
        i
          position: absolute;
          top: 10px;
          right: -11px;
          border-width: 4px;
          font-size: 0;
          line-height: 0;
          border-style: solid solid dotted;
          border-color: #898989 transparent transparent;
      .search-epet
        margin-right 10px
        flex 1
        input
          width 100%
          border 0
          height 28px
          background #e9e9e9
          border-radius 4px
          color #bcbcbc
          text-indent 10px
          font-size 16px
          outline 0
      .epet-category
        display block
        img
          width 25px
    .tab
      width 100%
      overflow hidden

      ul
        white-space nowrap
        float left

        li
          font-size 18px
          display inline-block
          width 74px
          height 36px
          line-height 36px
          a
            display block
            text-align center
            font-size 14px
            color #333
            span
              font-size 16px
          .router-link-active span

            height 100%
            padding 6px 0
            border-bottom 2px #459d36 solid
            color #459d36

</style>
