<template>
    <div class="ct">
    <el-tabs type="border-card">
  <el-tab-pane label="天气">
    <div style="height:200px;">天气</div>
  </el-tab-pane>
  <el-tab-pane label="备忘">备忘</el-tab-pane>
  <el-tab-pane label="账单">账单</el-tab-pane>
</el-tabs>
  </div>
</template>
<script>
export default {
  name: 'Sto',
  data(){
	return{
		date:this.$route.params.date,
		location:this.$route.params.location,
		days:this.$route.params.days
	}
  }
}
</script>
<style scoped>

</style>