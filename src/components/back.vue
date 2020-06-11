<template>
	<div class="head">
		<img @click="goBack" src="../assets/back.png" width="18vw" height="18vh" />
		<span>{{title}}</span>
	</div>
</template>

<script>
	export default{
		name:'head',
		props:['title'],
		methods:{
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.head{
		height: 20px;
		display: flex;
		padding: 18px;
	}
	.head span{
		flex-grow: 1;
		text-align: center;
		
	}
</style>
