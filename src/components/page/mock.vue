<template>
  <div>
    <p v-for="(i,index) in list" :key="index">{{`名字：${i.name},姓氏：${i.cfirst},年龄:${i.natural}`}}</p><br><br>
    <h2 v-for="(j,indexJ) in other" :key="indexJ">{{j.city}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      other:[]
    };
  },
  mounted() {
    this.getList();
    this.getOther()
  },
  methods: {
    getList() {
      this.$axios
        .get("/api/data")
        .then(res => {
          console.log(res.data);
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getOther() {
      this.$axios
        .post("/api/other")
        .then(res => {
          console.log(res.data);
          this.other = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped >
</style>
