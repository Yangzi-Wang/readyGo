<template>
	<div>
		<div>
			<Back :title="title"></Back>
		</div>
		<div class="Ctn">
			<el-card class="mainCtn" :class="change?'change':''">
			</el-card>
			<div class="content">
				<div class="unit">
					<span>单位：</span>
					<el-dropdown trigger="click" size="mini" @command="handleCommand">
					<span class="el-dropdown-link">
						{{unit}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="￥">￥</el-dropdown-item>
						<el-dropdown-item command="$">$</el-dropdown-item>
						<el-dropdown-item command="日元">日元</el-dropdown-item>
					</el-dropdown-menu>
					</el-dropdown>
				</div>
				<div class="category" v-show="!change">
					<div class="header">
						<div class="item">类目</div>
						<div class="item">预算</div>
						<div class="item">实际</div>
					</div>
					<div v-for="(item,index) in bill" :key="item.category" class="cate_ctn" @click="detail(index)">
						<div class="item">{{item.category}}</div>
						<div class="item">{{item.budget}}</div>
						<div class="item">{{item.fact}}</div>
					</div>
				</div>
				<div class="category_add" v-show="change">
					<div class="bill_img">
						<img style="float: left;border-radius: 10px;" :src="bill_img" width="200px"/>
						<div style="float: left;margin-left: 10px;margin-top: 40px;">
							<el-upload
							class="upload-demo"
							action="https://jsonplaceholder.typicode.com/posts/"
							multiple
							:limit="1">
							<img src="../assets/camera.png" width="30vw" height="22vh" />
							</el-upload>
						</div>
					</div>
					<div class="form">
						<span>类目</span>
						<el-input placeholder="类目" style="width: 55vw;margin-left: 5vw;" v-model="category"></el-input>
					</div>
					<div class="form">
						<span>预算</span>
						<el-input placeholder="预算" style="width: 55vw;margin-left: 5vw;" v-model="budget"></el-input>
					</div>
					<div class="form">
						<span>实际</span>
						<el-input placeholder="实际" style="width: 55vw;margin-left: 5vw;" v-model="fact"></el-input>
					</div>
				</div>
			</div>
			<i v-show="!change" class="del el-icon-delete"></i>
			<i class="plus" :class="change?'el-icon-success':'el-icon-circle-plus'" @click="add" style="color: #452B4E;font-size: 0.6rem;"></i>
		</div>
	</div>
</template>
<script>
	import Back from '@/components/back.vue'
	export default {
		components: {
			Back
		},
		data(){
			return{
				title:'账单',
				unit:'￥',
				change:false,
				category:'',
				budget:0,
				fact:0,
				bill_img:require('../assets/banner2.jpg'),
				bill:[{
					category:'酒店',
					budget:200,
					fact:350
				},{
					category:'交通',
					budget:30,
					fact:59
				},{
					category:'餐饮',
					budget:230,
					fact:180
				},{
					category:'娱乐门票',
					budget:199,
					fact:199
				}]
			}
		},
		methods: {
			handleCommand(command) {
				this.unit=command;
			},
			goBack() {
				this.$router.go(-1);
			},
			add(){
				var flag=false;
				this.change=!this.change;
				this.plus_btn=require('../assets/new-a.png');
				if(!this.change&&this.category!=''){
					for(let i=0;i<this.bill.length;i++){
						if(this.bill[i].category==this.category){
							this.bill[i].budget=this.budget;
							this.bill[i].fact=this.fact;
							flag=true;
						}
					}
					if(!flag){
						let item={
							category:this.category,
							budget:this.budget,
							fact:this.fact
						}
						this.bill.push(item);
					}
					this.category='';
					this.budget=0;
					this.fact=0;
				}
			},
			detail(index){
				this.change=!this.change;
				this.category=this.bill[index].category;
				this.budget=this.bill[index].budget;
				this.fact=this.bill[index].fact;
			}
		}
	}
</script>
<style scoped lang="scss">
	@import "../_variables.scss";
	.Ctn{
		display: flex;
		justify-content: center;
		margin-top: 8vh;
	}
	.content{
		position: absolute;
		top:20vh;
	}
	.mainCtn{
		width: 70vw;
		height: 65vh;
		padding: 20px;
		padding-top: 0;
		animation: slide 1.5s ease;
	}
	@-wekit-keyframes slide{
		from{transform:rotateY(180deg)}
		to{transform:rotateY(0deg)}
	}
	@keyframes slide{
		from{transform:rotateY(180deg)}
		to{transform:rotateY(0deg)}
	}
	.change{
		animation: change 1s ease;
		transform:rotateY(180deg);
	}
	@-wekit-keyframes change{
		from{transform:rotateY(0deg)}
		to{transform:rotateY(180deg)}
	}
	@keyframes change{
		from{transform:rotateY(0deg)}
		to{transform:rotateY(180deg)}
	}
	.unit{
		width: 70vw;
	}
	.category{
		margin-top:5vh;
		width: 60vw;
		margin-left: 5vw;
		margin-right: 5vw;
	}
	.category div{
		display: flex;
		justify-content: space-between;
	}
	.item{
		flex:0 0 100px;
		margin-bottom: 20px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cate_ctn div:nth-child(2){
		color: $color2;
	}
	.cate_ctn div:nth-child(3){
		color: $color1;
	}
	.plus{
		position: absolute;
		left: 75vw;
		top:75vh;
	}
	.del{
		position: absolute;
		left: 20vw;
		top:75vh;
		color: #452B4E;
		font-size: 0.55rem;
	}
	.bill_img{
		margin-top: 15px;
		margin-left: 10px;
		height: 20vh;
	}
	.form{
		margin-top: 10px;
	}
	.form span{
		background-color: $color2;
		border-radius: 10px;
		display: inline-block;
		height: 25px;
		width: 50px;
		text-align: center;
		color:#FFFFFF;
	}
</style>