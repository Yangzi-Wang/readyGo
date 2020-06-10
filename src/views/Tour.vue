<template>
    <div class="demo-input-suffix tour">
        <!-- search -->
        <el-input class="input"
    placeholder="搜索目的地"
    v-model="inputHandle">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>

<!-- banner -->
<div style="width:95%;margin:0 auto;margin-top:10px;">
  <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="item in banner" :key="item">
        <img :src="item" width="100%" height="auto"/>
      </el-carousel-item>
    </el-carousel>
</div>

<!-- 游记 -->
<div class="article">
    <div>
        <div v-for="i in article" :key="i.title" style="width:45vw;margin-bottom:13px;">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="i.imageUrl" class="cover">
      <div style="padding: 12px;text-align:left;font-size:12px;">
          {{i.title}}
      </div>
    </el-card>
        </div>
    </div>
    <div>
    <div v-for="i in article2" :key="i.title" style="width:45vw;margin-bottom:13px;">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="i.imageUrl" class="cover">
      <div style="padding: 12px;text-align:left;font-size:12px;">
          {{i.title}}
      </div>
    </el-card>
        </div>
    </div>
</div>
    <div style="height:9.3vh;"></div>
  
    </div>
</template>
<script>
export default {
  name: 'Tour',
  data(){
      return{
          banner:[
              require('../assets/banner1.png'),
              require('../assets/banner2.png'),
              require('../assets/banner3.png')
          ],
          article:[
              {imageUrl:require('../assets/arti4.png'),title:'冬季恋歌|韩国首尔之旅'},
              {imageUrl:require('../assets/arti3.png'),title:'去重庆 | 重庆四日精致行'},
              {imageUrl:require('../assets/arti2.png'),title:'海南 | 我和夏天有个约会'},
              {imageUrl:require('../assets/arti1.png'),title:'东京游记 | 回忆起对这座城市念念不忘的情感'},
          ],
          article2:[
              {imageUrl:require('../assets/arti2.png'),title:'海南 | 我和夏天有个约会'},
              {imageUrl:require('../assets/arti1.png'),title:'东京游记 | 回忆起对这座城市念念不忘的情感'},
              {imageUrl:require('../assets/arti4.png'),title:'冬季恋歌|韩国首尔之旅'},
              {imageUrl:require('../assets/arti3.png'),title:'去重庆 | 重庆四日精致行'},
          ]
      }
  }
}
</script>
<style scoped>
.tour{
    text-align: center;
    width: 100%;

}
.input{
    width: 90%;
    margin-top: 12px;
}
.article{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
}
.cover {
    width: 100%;
    display: block;
  }

</style>