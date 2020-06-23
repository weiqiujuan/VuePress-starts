# Hello VuePress
### demo: 这是vuepress的第一个demo
```
<template>
   <div class="test-demo">
     {{ msg }}
     <my-hello></my-hello>
     <el-button>button</el-button>
   </div>
 </template>
 
 <script>
 export default {
   data () {
     return {
       msg: 'Hello VuePress!'
     }
   }
 }
 </script>