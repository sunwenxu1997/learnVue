<template>
  <div class="overall">
    <div class="box">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box {
  background: #ccc;
  display: grid;
  place-content: center;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  /* 每个网格的间距为 5vh */
  grid-gap: 1px;
}
.box span {
  background: white;
  width: 100px;
  height: 100px;
  line-height: 100px;
}
</style>