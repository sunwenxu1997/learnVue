<template>
    <div>
        <!-- 日期进度条 -->
        <div class="date">
            <div class="strip"  :style="` background: linear-gradient(to right,#B3D8FF 0%,#B3D8FF ${dateReach + dateSchedule}%,#e6e6e6  ${dateReach + dateSchedule}%,#e6e6e6 100%);`">
                <div class="dot" v-for="(i,index) in dateList" :key="index" :style="`left:${index*(100/(dateList.length - 1))-0.5}%;background:${(index*(100/(dateList.length - 1)) <= dateReach) ?'#409EFF':'white'}`">
                <section class="time">{{i.date}}</section>
                <section class="title">{{i.title}}</section>
                </div>
            </div>
        </div>
         <el-date-picker v-model="nowDate" type="date" placeholder="选择日期" style="margin-top:50px"></el-date-picker>
    </div>
</template>

<script>
// 时间格式化工具
import moment from 'moment'
export default {
   data(){
       return{
           nowDate:'',
           dateReach:0,//时间进度(按阶段 =)
           dateSchedule:0,//时间进度(按区间 +)
           dateList:[
               {
                   date:'2019-07-25',
                   title:'购买日'
               },
               {
                   date:'2019-07-29',
                   title:'起息日'
               },
               {
                   date:'2019-12-12',
                   title:'履约日'
               },
               {
                   date:'2019-08-20',
                   title:'到期日'
               }
           ]
       }
   },
   watch:{
     nowDate(){
         this.dateCompare()
     }
   },
   created(){
    //    new Date()
       this.nowDate = this.dateFormatting(new Date())
       this.dateCompare()
   },
   methods:{
        //时间格式转换
    dateFormatting(val) {
      return moment(val).format("YYYY-MM-DD");
    },
    //日期比较
    dateCompare(){
       this.nowDate = this.dateFormatting(this.nowDate)
       function sortDate(a,b) {
           let A = new Date(a.date.replace(/-/g,'/')).getTime()
           let B = new Date(b.date.replace(/-/g,'/')).getTime()
           return A - B
       }
       this.dateList.sort(sortDate)
       let nowDate = new Date(this.nowDate.replace(/-/g,'/')).getTime()
       for (let i = 0; i < this.dateList.length-1; i++) {
          let date = new Date(this.dateList[i].date.replace(/-/g,'/')).getTime()
          let dateNext = new Date(this.dateList[i+1].date.replace(/-/g,'/')).getTime()
          //   时间进度(按阶段 =)
          if (new Date(this.dateList[0].date.replace(/-/g,'/')).getTime() > nowDate) {
               this.dateReach = -1
               this.dateSchedule = 0;
           }
           if (date <= nowDate) {
                this.dateReach = i * (100/(this.dateList.length - 1));
           }
           if (dateNext <= nowDate) {
                this.dateReach = 100
           }

          //时间进度(按区间 +)
          if (date <= nowDate && nowDate < dateNext) {
            //  例如： dateSchedule = (当前日期 - 购买日) / (起息日 - 购买日)/(1000*60*60*24) 转化为天数
              let date_c = Date.parse(this.dateList[i].date.replace(/-/g,'/'))/(1000*60*60*24)
              let dateNext_c = Date.parse(this.dateList[i+1].date.replace(/-/g,'/'))/(1000*60*60*24)
              let nowDate_c = Date.parse(this.nowDate.replace(/-/g,'/'))/(1000*60*60*24)
              this.dateSchedule = Number(((nowDate_c - date_c)/(dateNext_c - date_c)/(this.dateList.length-1)*100).toFixed(2))
          }

       }
    }
   }
}
</script>

<style scoped lang="scss">
.date{
    margin: 0 auto;
    margin-top: 50%;
    height: 50px;
    display: flex;
    align-items: center;
    overflow: hidden;
    // 背景进度颜色
    .strip{
       width: 100%;
       margin: 0 40px;
       height: 5px;
       background: rgb(245, 244, 244);
       position: relative;
       .dot{
           width: 8px;
           height: 8px;
           border-radius: 50%;
        //    background: white;
        background: #3676c0;
           box-shadow: 1px 1px 5px rgb(165, 164, 164);
           position: absolute;
           top: -2px;
           section{
               width: 100%;
               font-size: 0.75rem;
               color: #808080;
               min-width: 100px;
               position: relative;
               left: -45px;
           }
           .time{
               top: -20px;
           }
       }
    }
}
</style>
