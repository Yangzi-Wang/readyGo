<template>
  <div class="home">
    <router-view></router-view>
    <!-- tab -->
    <tabbar></tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabbar from '@/components/Tabbar.vue'

export default {
  name: 'Home',
  components: {
    Tabbar
  }
}
</script>
<style scoped>
.home{
  /* background-color: #eee; */
}
</style>>

