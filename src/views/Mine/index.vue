<template>
   <div id="main">
    <Header title="我的喵喵"></Header>
    <div id="content">
      <Login></Login>
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/header"
    import Tabbar from "@/components/tabbar"
    import Login from '@/components/login'
    export default {
        name:"mine",
        components:{
            Header,
            Tabbar,
            Login
        }
    }
</script>

<style>

</style>
