import ForgetComponent from "../features/forget/Forget"
import LoginComponent from "../features/login/Login"
import NewComponent from "../features/new/New"
import Profile from "../features/profile/Profile"


const routesArray = [
  { id: 1, name: 'login', component: <LoginComponent/>, path: '/' },
  { id: 2, name: 'forget  password', component: <ForgetComponent/>, path: '/forget-password' },
  { id: 3, name: 'new password', component: <NewComponent/>, path: '/new-password' },
  { id: 4, name: 'profie', component: <Profile/>, path: '/profile' },

]

export default routesArray
