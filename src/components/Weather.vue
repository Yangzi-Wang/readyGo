<template>
  <div>
    <el-card :body-style="{ padding: '0px',height:'180px',textAlign:'center' }" class="card">
      <img src="../assets/weather.jpg" alt="" width="90%" height="90%">
      
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Weather",
  data() {
    return {};
  }
};
</script>
<style>
	.card{
		position: relative;
		animation: slied 1s ease;
		-webkit-animation:slied 1s ease;
	}
	@-wekit-keyframes slied{
		from{left: -100vw;}
		to{left: 0;}
	}
	@keyframes slied{
		from{left: -100vw;}
		to{left: 0;}
	}
</style>