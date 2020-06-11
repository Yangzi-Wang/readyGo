<template>
  <div>
    <el-card :body-style="{ padding: '10px',height:'160px' }">
      <div class="top">
        <div>
          <span>单位：</span>
        <el-dropdown trigger="click" size="mini">
  <span class="el-dropdown-link">
    ￥<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>￥</el-dropdown-item>
    <el-dropdown-item>$</el-dropdown-item>
    <el-dropdown-item>日元</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </div>
        <div>编辑</div>
      </div>
      <div class="billct">
        <div class="pay"><div class="bname">预算</div><div class="bud">400</div></div>
        <div class="pay"><div class="bname">实际</div><div class="fact">550</div></div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Bill',
  data(){
    return {
      
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
  .bname{
    font-size: 18px;
    padding-bottom: 10px;
  }
  .bud{
    font-size: 30px;
    color: $color2;
  }
  .fact{
    font-size: 30px;
    color: $color1;
  }
  .billct{
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
</style>