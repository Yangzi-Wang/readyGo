<template>
    <div class="container">
		<div class="head">
			<img src="../assets/notice.png" width="20vw" height="25vh" />
			<img src="../assets/more.png" width="20vw" height="25vh" />
		</div>
		<div class="mainCtn">
			<div class="block"><el-avatar shape="square" class="avatar" :size="80" :src="avatar"></el-avatar></div>
			<div class="cardCtn">
				<el-card class="name card">
					<img class="edit" src="../assets/edit.png" width="18vw" height="18vh"/>
					<div style="font-size: 0.4rem;">夏日限定</div>
					<div style="font-size: 0.2rem;">世界那么大，我想去看看</div>
				</el-card>
				<el-card class="mine card">
					<div class="collection small_card">
						<div>{{collection}}</div>
						<div>我的收藏</div>
					</div>
					<div class="small_card">
						<div>{{tour}}</div>
						<div>我的行程</div>
					</div>
				</el-card>
				<el-card class="card share">
					<span>我的分享</span>
					<span>
						{{share}}
						<img src="../assets/open.png" width="14vw" height="14vh"/>
					</span>
				</el-card>
				<el-card class="box-card card">
					<div slot="header" class="clearfix">
						<span>寄出的明信片</span>
						<span>
							{{send}}
							<img src="../assets/open.png" width="14vw" height="14vh"/>
						</span>
					</div>
					<div class="ctn">
						<div class="card_img_left">
							<img src="../assets/card.jpg" width="180vw" />
						</div>
						<div class="card_img_right">
							<div class="right_1">
								<img src="../assets/card.jpg" width="90vw" />
							</div>
							<div class="right_2">
								<img src="../assets/card.jpg" width="90vw" />
							</div>
						</div>
					</div>
				</el-card>
			</div>
			
		</div>
	</div>
</template>
<script>
export default {
  name: 'Me',
  data(){
    return {
    collection:3,
	tour:3,
	share:1,
	send:1,
	avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  }
}
</script>
<style>
	.head{
		height: 20px;
		display: flex;
		padding: 12px;
		justify-content: space-between;
	}
	.mainCtn{
		padding-top: 30px;
		display: flex;
		justify-content: center;
		margin-bottom: 10vh;
	}
	.block{
		position: absolute;
		z-index: 99;
	}
	.avatar{
		box-shadow: #C0C0C0 0px 1px 10px;
	}
	.cardCtn{
		margin-top: 40px;
		width: 90vw;
	}
	.card{
		border-radius: 8px;
		margin-bottom: 3vh;
	}
	.edit{
		position: relative;
		left: 45%;
		margin-bottom: 2vh;
	}
	.name{
		text-align: center;
		height: 22vh;
		line-height: 0.6rem;
	}
	.mine{
		height: 13vh;
	}
	.small_card{
		text-align: center;
		float: left;
		width: 38vw;
		padding-top:1vh;
		height: 6vh;
	}
	.collection{
		border-right: solid 1px #C0C0C0;
	}
	.share{
		height: 6vh;
		line-height: 0.3vh;
	}
	.share span{
		display: inline-block;
		margin-top: -2vh;
	}
	.share span:nth-child(1){
		margin-right: 52vw;
	}
	.clearfix span:nth-child(1){
		margin-right: 42vw;
	}
	.ctn{
		padding-left: 1vw;
		width: 100vw;
		display: flex;
	}
	.card_img_left{
		width: 50vw;
		height: 25vh;
		overflow: hidden;
	}
	.right_1,.right_2{
		width: 30vw;
		height: 12vh;
		margin-bottom:1vh ;
		overflow: hidden;
	}
</style>