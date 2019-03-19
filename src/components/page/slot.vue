<template>
    <div>
        <v-slot :list="tabList">
           <p slot="left">L</p>
        </v-slot>
    </div>
</template>

<script>
import vSlot from '@/components/common/slot'
export default {
  components:{
      vSlot
  },
  data(){
      return{
          tabList:['1','2','3','4','5','6','7','8']
      }
  }
}
</script>

<style>

</style>
