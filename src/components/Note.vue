<template>
  <div>
    <el-card :body-style="{ padding: '0px',height:'180px' }">
      <el-tabs :tab-position="'left'" style="height: 180px;">
        <el-tab-pane label="物品">
          <div class="tag" v-show="edit?false:true">
            <el-checkbox
              v-for="(item,index) in items1"
              :key="index"
              style="margin:5px;"
              v-model="item.check"
            >
              <span :class="item.check?'lt':''">{{item.note}}</span>
            </el-checkbox>
            <!-- <el-tag style="margin:5px;"
    v-for="(item,index) in items1"
    :key="index"
    type="danger"
    size="medium"
    :effect="item.check?'dark':'plain'">
    {{ item.note }}
            </el-tag>-->
            <div class="editbtn" @click="editHandle"><i class="el-icon-edit"></i></div>
          </div>

          <!-- 编辑页 -->
          <div class="tag" v-show="edit?true:false">
            <el-tag
              style="margin:5px;"
              v-for="(item,index) in items1"
              :key="index"
              type="info"
              size="medium"
              closable
              :disable-transitions="true"
              @close="handleClose(index,'items1')"
              :effect="item.check?'dark':'plain'"
            >{{ item.note }}</el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="mini"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            ></el-input>
            <el-button v-else class="button-new-tag" size="mini" @click="showInput">+ New </el-button>
            <div class="confirmbtn" @click="confirm"><i class="el-icon-finished"></i></div>
          </div>
        </el-tab-pane>
        
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Note",
  data() {
    return {
      edit: false,
      inputVisible: false,
      inputValue: "",
      closable1: false,
      check: true,
      closable2: true,
      closable3: true,
      // items1:['相机','耳机','手机充电器','插头','电池','充电线','充电宝'],
      items2: ["短袖 短裙*2", "连衣裙*2", "泳衣"],
      items3: ["身份证", "驾驶证", "护照"],
      items1: [
        {
          note: "相机",
          check: false
        },
        {
          note: "耳机",
          check: true
        },
        {
          note: "手机充电器",
          check: false
        },
        {
          note: "电池",
          check: false
        }
      ]
    };
  },
  methods: {
    handleClose(index, item) {
      this[item].splice(index, 1);
    },
    editHandle() {
      this.edit = true;
    },

    confirm(){
      this.edit = false;

    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(()=> {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.items1.push({
          note: inputValue,
          check: false
        });
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>
<style scoped>
.tag {
  padding: 4px;
  height: 165px;
}
.lt {
  text-decoration: line-through;
}
.editbtn,.confirmbtn{
bottom: 2px;
  right: 10px;
  position: absolute;
  font-size: .5rem;

}
/* .editbtn {
  background-image: url(../assets/edit.png);
  background-size: contain;
  width: 0.45rem;
  height: 0.45rem;
  position: absolute;
  
} */

.button-new-tag,.input-new-tag {
  margin: 5px;
}
.button-new-tag {
  height: 28px;
  line-height: 26px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  vertical-align: bottom;
}
</style>