<template>
  <div class="footer">
    <ul>
      <li class="home">
        <router-link to="/home"><img src="./main_tab_1.png"/></router-link>
      </li>
      <li class="category">
        <router-link to="/classify"><img src="./main_tab_2.png"/></router-link>
      </li>
      <li class="shopcart">
        <router-link to="/shopCart"><img src="./main_tab_3.png"/></router-link>
      </li>
      <li class="myepet">
        <router-link to="/myPet"><img src="./main_tab_4.png"/></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    position fixed
    width 100%
    height 44px
    bottom 0
    left 0
    z-index 10
    background-color white
    &:before
      content ''
      position absolute
      width 100%
      height 1px
      background-color #ccc
      transform scaleY(0.3)
    &>ul
      display flex
      &>li
        flex 1
        height 44px
        a
          display block
          height 100%
          text-align center
          img
            width 40px
            height 38px
            margin-top 3px
</style>
