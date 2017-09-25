<template>
  <div class="wipe">
    <div class="header">
      <span class="aback" @click="showCity1(false)"></span>
      <span class="topbar-title">选择收货地区</span>
      <span class=" Jbur "></span>
      <div v-if="this.select1.area">当前收获地区为:{{select1.area.value}}</div>
      <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    data(){
      return{
        select1:{},

      }

    },
    components:{
      VDistpicker
    },
    props:['showCity1'],
    methods:{
      onSelected(data){
        this.select1=data


        this.showCity1(false)
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wipe
    width 100%
    z-index 500
    position fixed
    .header
      padding 17px
      height 800px
      .aback
        background: url(./personal-bico1.png) no-repeat;
        background-size: 9px 17px;
        display: inline-block;
        width: 22px;
        height: 20px;
        margin-top 2px

      .topbar-title
        font-size 18px
        display: inline-block;
        margin: 0 auto;
      .Jbur
        background: url(./imgtk-new.png) no-repeat
        background-size: 20px 20px
        display: inline-block;
        width: 22px;
        height: 20px;
        position: absolute
        top: 20px
        right: 3em
</style>
