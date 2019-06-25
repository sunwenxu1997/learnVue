<template>
  <div>
    <div class="box">
      <!-- DatePicker 日期选择器范围限制 -->
      <section>
        <span>前后日期控制：</span>
        <el-date-picker
          v-model="DateTime"
          :picker-options="pickerOptions"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          :editable="false"
          @change="firstChangeDate = ''"
        ></el-date-picker>
      </section>
      <section>
        <span>当前往后控制：</span>
        <el-date-picker
          v-model="DateDay.new"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
          @focus="firstChangeDate1 = new Date(DateDay.old).getTime()"
          :picker-options="pickerOptions1"
          :editable="false"
        ></el-date-picker>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    DateTime() {
      console.log(this.DateTime); //返回的是一个数组，[0]为开始时间，[1]为结束时间
    }
  },
  data() {
    let _this = this;
    return {
      DateTime: [],
      DateDay: {
        old: "", //此处定义为当前时间
        new: ""
      },
      // 时间开始到结束控制前后3天
      pickerOptions: {
        onPick(time) {
          _this.firstChangeDate = time.minDate.getTime();
        },
        disabledDate(time) {
          let curDate = _this.firstChangeDate;
          let limitDate = 3 * 24 * 3600 * 1000; //指定日期限制规则 3为选择后的前后3天
          let oldDate = curDate - limitDate; //之前的日期
          let newDate = curDate + limitDate; //之后的日期
          if (_this.firstChangeDate == "") {
            return false;
          } else {
            return time.getTime() < oldDate || time.getTime() > newDate;
          }
        },
        // date第一次选中时间
        firstChangeDate: ""
      },
      // 当前时间到结束控制后3天
      pickerOptions1: {
        disabledDate(time) {
          let curDate = _this.firstChangeDate1;
          let limitDate = 3 * 24 * 3600 * 1000; //指定日期限制规则 3为只能选择后3天
          let oldDate = curDate; //无之前的日期
          let newDate = curDate + limitDate; //有之后的日期
          if (_this.firstChangeDate1 == "") {
            return false;
          } else {
            return time.getTime() < oldDate || time.getTime() > newDate;
          }
        },
        // date第一次选中时间
        firstChangeDate1: ""
      }
    };
  },
  created() {
    this.DateDay.old = new Date();
  }
};
</script>

<style scoped>
.box {
  margin-top: 20%;
  display: inline-block;
}
.box section{
    margin: 50px 0;
    display: flex;
    align-items: center;
}
</style>
