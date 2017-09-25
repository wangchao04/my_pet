<template>
  <div class="wipe">
    <mt-navbar v-model="selected" class="first">
      <mt-tab-item id="a" ><div class="one">分类</div></mt-tab-item>
      <mt-tab-item id="b" ><div class="two">品牌</div></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="firstContent">
      <mt-tab-container-item id="1">

          <div class="left" ref="yScroll">
            <div>
              <ul>
                <li>为您推荐</li>
                <li>狗狗主粮</li>
                <li>狗狗零食</li>
                <li>狗狗日用</li>
                <li>狗狗玩具</li>
                <li>狗狗保健</li>
                <li>狗狗医疗</li>
                <li>狗狗服饰</li>
                <li>狗狗牵引</li>
                <li>狗狗美容</li>
                <li>狗狗香波</li>
                <li>狗狗书籍</li>
                <li>狗狗周边</li>
                <li>狗狗定制</li>
              </ul>
              <div class="leftBottom"></div>
            </div>

          </div>



      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        22222
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        selected:'1'
      }
    },
      methods: {
        _scroll(){
          new BScroll(this.$refs.yScroll, {

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
  .first
    padding  0 140px
    background white
  .firstContent
    .left
      width 70px
      height 627px

      li
        background gray
        padding: 15px 0;
        border-bottom: 1px solid #f3f4f5;
        width: 70px;
        height: 50px;
        font-size: 13px;

      .leftBottom
        width 70px
        height 70px
</style>
