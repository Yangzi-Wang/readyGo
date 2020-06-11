<template>
  <div>
    <el-card :body-style="{ padding: '20px',height:'140px' }" class="card">
      <div class="top">
        <div>
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
		<i class="el-icon-edit" style="font-size: 0.45rem;" @click="goto"></i>
      </div>
      <div class="billct">
        <div class="pay left"><div class="bname">预算</div><div class="bud">{{budget}}</div></div>
        <div class="pay"><div class="bname">实际</div><div class="fact">{{fact}}</div></div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Bill',
  data(){
	return {
		unit:'￥',
		budget:400,
		fact:550
	}
  },
  methods:{
	handleCommand(command) {
		this.unit=command;
	},
	goto(){
		this.$router.push({
			path:'/editBill',
			name:'editBill'
		})
	}
  }
}
</script>
<style scoped lang="scss">
@import "../_variables.scss";

.top{
  display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.el-dropdown-link {
    cursor: pointer;
    color: $color4;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .pay{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left{
	border-right: solid 1px #C0C0C0;
	padding-right: 20vw;
  }
  .bname{
    font-size: 18px;
    padding-bottom: 10px;
  }
  .bud{
    font-size: 25px;
    color: $color2;
  }
  .fact{
    font-size: 25px;
    color: $color1;
  }
  .billct{
	height: 120px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
  }
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