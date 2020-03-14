<template>
  <div>
    <h1>Users No. {{id}} </h1>
    <router-link :to="{name:'user-id-profile',params:{id:Number(id)-1}}">前のユーザー</router-link>
    <router-link :to="{name:'user-id-profile',params:{id:Number(id)+1}}">次のユーザー</router-link>
    <router-view></router-view>
    <router-view name="posts"></router-view>
  </div>
</template>

<script>
export default{
  props:["id"],
  beforeRouteEnter(to,from,next){
    console.log("beforeRouteEnter");
    next(vm => {
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to,from,next){
    next();
  },
  beforeRouteLeave(to,from,next){
    console.log("beforeRouterLeave");
    const isLeave = window.confirm("本当にこのページを離れますか？");
    if (isLeave){
      next();
    }else{
      next(false);
    }
  }
}
</script>
