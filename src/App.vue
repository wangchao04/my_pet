<template>
<div>
  <router-view></router-view>
  <catFooter></catFooter>
</div>



</template>

<script>
import catFooter from './components/catFooter/catFooter.vue'
export default {
  components:{
    catFooter
  }
}
</script>

<style>

</style>
