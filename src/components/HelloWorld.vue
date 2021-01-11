<template>
  <div class="hello">
    <img src="../assets/img/logo.png" />
    <h1>{{ msg }}</h1>
    <ul>
      <li @click="getPermission" v-for="(item,index) in RouterList" :key="index">
        <router-link :to="{name:item.name}">{{item.meta.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import newRouter from '@/router/index.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Vue,Hei Hei',
      RouterList: newRouter.options.routes
    }
  },
  methods: {
    getPermission() {
      if (
        typeof window.DeviceMotionEvent !== 'undefined' &&
        typeof window.DeviceMotionEvent.requestPermission === 'function'
      ) {
        window.DeviceMotionEvent.requestPermission()
          .then(function(state) {
            if ('granted' === state) {
            } else {
             alert('请重启应用后，再次进行授权')
            }
          })
          .catch(function(err) {
            alert('error: ' + err)
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  cursor: default;
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding: 30px;
}
h1 {
  margin: 0;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #338d65;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  font-weight: bold;
}
</style>
