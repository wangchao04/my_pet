<template>

  <div class="wipe">


    <mt-navbar v-model="selected" class="first">
      <mt-tab-item id="a" ><div class="one">分类</div></mt-tab-item>
      <mt-tab-item id="b" ><div class="two">品牌</div></mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="a">
        <!--hehe-->
<div class="xScroll">
  <mt-navbar v-model="selected2" class="second" >
    <mt-tab-item id="1">为您推荐</mt-tab-item >
    <mt-tab-item id="2">猫粮主食</mt-tab-item>
    <mt-tab-item id="3">猫粮零食</mt-tab-item>
    <mt-tab-item id="4">为您推荐</mt-tab-item >
    <mt-tab-item id="5">猫粮主食</mt-tab-item>
    <mt-tab-item id="6">猫粮零食</mt-tab-item>
    <mt-tab-item id="7">为您推荐</mt-tab-item >
    <mt-tab-item id="8">猫粮主食</mt-tab-item>
    <mt-tab-item id="33">猫粮零食</mt-tab-item>
    <mt-tab-item id="1434">为您推荐</mt-tab-item >
    <mt-tab-item id="223434">猫粮主食</mt-tab-item>
    <mt-tab-item id="3234">猫粮零食</mt-tab-item>
    <mt-tab-item id="1234">为您推荐</mt-tab-item >
    <mt-tab-item id="2234">猫粮主食</mt-tab-item>
    <mt-tab-item id="321234">猫粮零食</mt-tab-item>
    <mt-tab-item id="23141">为您推荐</mt-tab-item >
    <mt-tab-item id="222">猫粮主食</mt-tab-item>
    <mt-tab-item id="333">猫粮零食</mt-tab-item>
  </mt-navbar>

</div>


        <mt-tab-container v-model="selected2">
          <mt-tab-container-item id="1">
           aaaaaaaaaaaa
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
           bbbbbbbbbbb
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            cccccccccc
          </mt-tab-container-item>
        </mt-tab-container>
        <!--hehe-->
      </mt-tab-container-item>
      <mt-tab-container-item id="b">
        222
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        selected:'a',
        selected2:'1'
      }
    },
      methods: {
        _scroll(){
          new BScroll(this.$refs.xScroll, {

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
    .one
      font-size 16px
    .two
      font-size 16px

  .second
    float left
    display flex
    flex-direction column
    .mint-tab-item
      padding: 15px 0;
      border-bottom: 1px solid #f3f4f5;
      width: 100px;
      height: 30px;
      font-size: 19px;
      background: #fff;
      .mint-tab-item-label
        line-height 30px
    .is-selected
      background: #f3f4f5;
      .mint-tab-item-label
        font-size 16px
        color: #ed4044;

</style>
