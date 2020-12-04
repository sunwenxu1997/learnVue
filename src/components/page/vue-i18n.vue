<template>
  <div style="margin:100px">
    <span>{{$t('message.title')}}</span>
    <button @click="changeLang">切换</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeLang() {
      let lang = this.$i18n.locale
      this.$i18n.locale = lang == 'zh' ? 'en' : 'zh'
    }
  }
}
</script>

<style>
</style>