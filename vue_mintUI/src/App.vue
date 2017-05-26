<template>
  <div id="app">
  <mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>

</mt-header>

  <mt-button type="default">default</mt-button>
  <mt-button type="primary">primary</mt-button>
  <mt-button type="danger">danger</mt-button>
  <mt-search v-model="value"></mt-search>
 <mt-switch v-model="value"></mt-switch>
 <mt-badge type="primary">30</mt-badge>
<mt-badge type="error">10</mt-badge>
<mt-badge type="success">10</mt-badge>
<mt-badge type="warning">10</mt-badge>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.mint-search{
  height:52px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
