import Home from './components/home.vue'
import Follow from './components/follow.vue'
import Column from './components/column.vue'
import UserInfo from './components/UserInfo.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from './components/UserReg.vue'
import Article from './components/Article.vue'

export default[
	{
		path:'/home',
		component:Home
		
	},
	{
		path:'/follow',
		component:Follow
	},
	{
		path:'/column',
		component:Column
	},
	{
		path:'/user-info',
		component:UserInfo
	},
	{
		path:'/',
		redirect:Home
	},
	{
		path:'*',
		component:Home
	},
	{
    path:'/user-login',
    component:UserLogin
    },
  	{
    path:'/user-reg',
    component:UserReg
  	},
  	{
    path:'/article/:id',
    component:Article,
    /*children:[
      {
        path:'/:id',
        component:Article
      }
    ]*/
  	}
]