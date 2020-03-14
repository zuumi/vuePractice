<template>
  <div>
    <nav style="width=700px; margin= auto; padding-top:10px;">
      <router-link to="/" class="link" active-class="link-active" exact >HOME</router-link>
      <router-link :to="{name:'user-id-profile',params:{id:1}}" class="link" active-class="link-active" exact >USERS</router-link>
    </nav>
    <hr>
    <transition name='fade' mode= 'out-in'>
      <router-view></router-view>
    </transition>
    <hr>
    <router-view name="head"></router-view>
  </div>
</template>

<style scoped>
.link{
  padding-right: 10px;
}
.link-active{
  font-size: 20px;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}
</style>
