<template>
    <div class="ct">
      
    <div class="top">
      <div class="topnav">
        <div :class="index===0?'active':''" @click="index=0;">天气</div>
        <div :class="index===1?'active':''" @click="index=1;">备忘</div>
        <div :class="index===2?'active':''" @click="index=2;">账单</div>
      </div>
      <div class="topct">
        <component :is="currentView"></component>
      </div>
    </div>
    <div style="width:85%;margin:0 auto;margin-top:18px;">
      <div style="padding:12px;text-align:center;">行程</div>
      <el-collapse>
  <el-collapse-item v-for="(item,index) in tours" :key="index" :title="item.title">
    <el-timeline style="margin-left:10px;">
    <el-timeline-item
      v-for="(activity, index) in item.activities"
      :key="index"
      :color="activity.over?'#f57b59':''"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
  </el-collapse-item>
</el-collapse>
    </div>
  </div>
</template>
<script>
import Weather from '@/components/Weather.vue'
import Note from '@/components/Note.vue'
import Bill from '@/components/Bill.vue'

export default {
  name: 'Sto',
  components: {
    Weather,Note,Bill
  },
  data(){
    return{
      index:0,
      comps:['Weather','Note','Bill'],
      activeNames: ['1'],
      
      tours:[
          {
            title:'Day1',
            activities: [{
          content: '香港国际机场',
          timestamp: '7am',
          over:true
        }, {
          content: '香港迪士尼乐园',
          timestamp: '10am-9pm',
          over:false
        }, {
          content: '香港迪士尼酒店',
          timestamp: '10pm',
          over:false
        }],
          },
          {
            title:'Day2',
            activities: [{
          content: '活动按期开始',
          timestamp: '7am',
          over:true
        }, {
          content: '通过审核',
          timestamp: '10am-9pm',
          over:false
        }, {
          content: '创建成功',
          timestamp: '10pm',
          over:false
        }],
          },
          {
            title:'Day3',
            activities: [{
          content: '活动按期开始',
          timestamp: '7am',
          over:true
        }, {
          content: '通过审核',
          timestamp: '10am-9pm',
          over:false
        }, {
          content: '创建成功',
          timestamp: '10pm',
          over:false
        }],
          }
        ]
    }
  },
   computed:{
    currentView(){
        return this.comps[this.index];
    },
    
  },
  methods:{
    handleChange(val) {
        console.log(val);
      }
  }
}
</script>
<style scoped lang="scss">
@import "../_variables.scss";

.ct{
  padding-top: 20px;
}

.topnav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  margin:0 auto;
  
  div{
    height: 35px;
    width: 20vw;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding-top: 7px;
    // background-color: #eee;
  }
  .active{
  background-color: $color1;
  color: #eff;
}
}

.topct{
  margin:0 auto;
  width: 90vw;
  z-index: 1;
}
</style>