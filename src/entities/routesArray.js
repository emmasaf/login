import ForgetComponent from "../features/forget/Forget"
import LoginComponent from "../features/login/Login"
import NewComponent from "../features/new/New"


const routesArray = [
  { id: 1, name: 'login', component: <LoginComponent/>, path: '/' },
  { id: 2, name: 'forget  password', component: <ForgetComponent/>, path: '/forget-password' },
  { id: 3, name: 'new password', component: <NewComponent/>, path: '/new-password' },
]

export default routesArray
