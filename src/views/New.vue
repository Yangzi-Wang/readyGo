<template>
  <div class="new">
	<el-card class="card">
		<div class="label">这次将出发去哪</div>
		<el-input class="location" placeholder="目的地" v-model="location"></el-input>
	</el-card>
	<el-card class="card">
		<div class="label">出发日期</div>
		<el-date-picker class="date" v-model="date" type="date" placeholder="选择日期">
		</el-date-picker>
	</el-card>
	<el-card class="card">
		<div class="label">行程天数</div>
		<el-slider :max="20" :step="1" v-model="days">
		</el-slider>
	</el-card>
    <el-button class="btn" @click="goto()">开始定制</el-button>
  </div>
</template>
<script>
export default {
  name: 'New',
  data(){
    return {
    date:'',
	days:0,
	location:''
    }
  },
  methods:{
	goto(){
		this.$router.push({
			path:'/sto',
			name:'Sto',
			params:{
				location:this.location,
				date:this.date,
				days:this.days
			}
		})
	}
  }
}
</script>
<style scoped>
.new{
	margin: auto;
	width: 85vw;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
}
.card{
	width: 80vw;
	border-radius: 8px;
	height: 120px;
	margin-top: 30px;
	text-align: center;
	animation: slied 1s ease;
	-webkit-animation:slied 1s ease;
	position: relative;
}
@-wekit-keyframes slied{
	from{left: -100vw;}
	to{left: 0;}
}
@keyframes slied{
	from{left: -100vw;}
	to{left: 0;}
}
.label{
	margin-bottom: 8px;
}
.btn{
	margin-top: 30px;
	background-color: #F57B59;
	color: #FFFFFF;
}
.location{
	width: 60vw;
	
}
.date{
	width: 60vw;
}
.el-slider__bar{
	background-color: #F57B59;
}
.el-slider__button {
	border: 2px solid #F57B59;
}
.el-input__inner{
	text-align: center;
}
</style>