<template>
  <div class="overall">
      <iframe id="previewPdf" :src="'/static/pdf/web/viewer.html?file=' + url"></iframe>
  </div>
</template>

<script>
export default {
data(){
    return{
        url:'https://en.oollee.com/pres.pdf'
    }
}
}
</script>

<style lang="scss" scoped>
#previewPdf{
    width: 500px;
    height: 800px;
}
</style>