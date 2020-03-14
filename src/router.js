import Vue from 'vue';
import Router from 'vue-router';

// import Home from './views/Home.vue';
// import Users from './views/Users.vue';
// import UsersPosts from './views/UsersPosts.vue';
// import UsersProfile from './views/UsersProfile.vue';
// import HeadNamedview from './views/HeadNamedview.vue';

const Home = ()=> import(/*webpackChunkName:"home"*/"./views/Home.vue");
const Users = ()=> import(/*webpackChunkName:"users"*/ "./views/Users.vue");
const UsersPosts = ()=> import(/*webpackChunkName:"usersposts"*/ "./views/UsersPosts.vue");
const UsersProfile = ()=> import(/*webpackChunkName:"usersprofile"*/ "./views/UsersProfile.vue");
const HeadNamedview = ()=> import(/*webpackChunkName:"named"*/ "./views/HeadNamedview.vue");

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      components:{
        default:Home,
        head:HeadNamedview
      },
      beforeEnter(to,from,next){
        next(true);
      }
    },
    {
      path:'/users/:id',
      components:{
        default:Users,
        head:HeadNamedview
      },
      props:{ default:true,head:false},
      children:[
        {path:"profile",components:{default:UsersProfile,posts:UsersPosts}, name:'user-id-profile'}
      ]
    }
  ]
});
