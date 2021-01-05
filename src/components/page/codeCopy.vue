<template>
  <div class="codeContent">
    <div v-html="MarkdownMsg"></div>
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
  </div>
</template>

<script>
import README from '../README.md'
import marked from 'marked'
import CodeCopy from '../common/CodeCopy'
import Vue from 'vue'
export default {
  data() {
    return {
      MarkdownMsg: '',
      textarea:''
    }
  },
  updated() {
    this.update()
  },
  mounted() {
    this.getMardownFileContent(README)
  },
  methods: {
    //处理markdown数据，data为markdown文件读出的字符串
    getMardownFileContent(data) {
      this.MarkdownMsg = marked(data || '', {
        /* 默认为false，为true时显示代码标签 */
        sanitize: false
      })
    },
    //获取对应markdown代码块标签
    update() {
      setTimeout(() => {
        document.querySelectorAll('pre').forEach(el => {
          //   console.log(el)
          if (el.classList.contains('code-copy-added')) return
          //   https://cn.vuejs.org/v2/api/index.html#Vue-extend
          /* 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象 */
          let ComponentClass = Vue.extend(CodeCopy)
          let instance = new ComponentClass()
          instance.code = el.innerText
          instance.parent = el
          /* 手动挂载 */
          instance.$mount()
          el.classList.add('code-copy-added')
          el.appendChild(instance.$el)
        })
      }, 100)
    }
  }
}
</script>

<style lang="scss" >
.codeContent {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 25vh;
}
.code-copy-added {
  background-color: #282c34;
  color: white;
  padding: 25px 20px;
  margin: 10px 0;
  text-align: left;
  border-radius: 3px;
  position: relative;
}
.code-copy-added:hover .copy-btn {
  opacity: 1;
}
</style>