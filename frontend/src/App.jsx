import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import { Suspense, lazy } from "react"
import Spinner from "./components/Spinner"
import "./assets/css/index.css";

const LazyAbout = lazy(() => import("./pages/About"));
const LazyContact = lazy(() => import("./pages/Contact"));
const LazyLogin = lazy(() => import("./pages/Login"));
const LazySignup = lazy(()=>import("./pages/Signup"));
const LazyAddCourse = lazy(()=>import("./pages/AddCourse"));
const LazyViewCourse = lazy(()=>import("./pages/ViewCourse"));
const LazyEnquires = lazy(()=>import("./pages/Enquires"));
const LazyEnrolled = lazy(()=>import("./pages/Enrolled"));
const LazyUserQuery = lazy(()=>import("./pages/UserQuery"));
const LazyDashboard = lazy(()=>import("./pages/Dashboard"));
const LazySidebar = lazy(()=>import("./components/CustomSidebar"));
const LazyAdminNav = lazy(()=>import("./components/AdminNav"));
const LazyAdminView = lazy(()=>import("./pages/AdminView"));
const LazyAdAbout = lazy(()=>import("./pages/AdAbout"));
const LazyAdContact = lazy(()=>import("./pages/AdContact"));
const LazyPayment = lazy(()=>import("./pages/Payment"));
const LazyFooter = lazy(()=>import("./pages/Footer"));
const LazyGetUserDetails = lazy(()=>import("./pages/GetUserDetails"));


const App = () => {
  const router = createBrowserRouter([
  {
    path : '/home',
    element : <Suspense fallback={<Spinner/>}><Home/></Suspense>
  },
  {
    path : '/about',
    element : <Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
  },
  {
    path : '/contact',
    element : <Suspense fallback={<Spinner/>}><LazyContact/></Suspense>
  },
  {
    path : '/',
    element : <Suspense fallback={<Spinner/>}><LazyLogin/></Suspense>
  },
  {
    path : '/signup',
    element : <Suspense fallback={<Spinner/>}><LazySignup/></Suspense>
  },
  {
    path : '/addcourse',
    element : <Suspense fallback={<Spinner/>} ><LazyAddCourse/></Suspense>
  },
  {
    path : '/viewcourse',
    element : <Suspense fallback={<Spinner/>} ><LazyViewCourse/></Suspense>
  },
  {
    path : '/enquires',
    element : <Suspense fallback={<Spinner/>} ><LazyEnquires/></Suspense>
  },
  {
    path : '/enrolled',
    element : <Suspense fallback={<Spinner/>} ><LazyEnrolled/></Suspense>
  },
  {
    path : '/userquery',
    element : <Suspense fallback={<Spinner/>} ><LazyUserQuery/></Suspense>
  },
  {
    path : '/dash',
    element : <Suspense fallback={<Spinner/>} ><LazyDashboard/></Suspense>
  },
  {
    path : '/side',
    element : <Suspense fallback={<Spinner/>} ><LazySidebar/></Suspense>
  },
  {
    path : '/adminnav',
    element : <Suspense fallback={<Spinner/>} ><LazyAdminNav/></Suspense>
  },
  {
    path : '/adminview',
    element : <Suspense fallback={<Spinner/>} ><LazyAdminView/></Suspense>
  },
  {
    path : '/getusers',
    element : <Suspense fallback={<Spinner/>} ><LazyGetUserDetails/></Suspense>
  },
  {
    path : '/adabout',
    element : <Suspense fallback={<Spinner/>} ><LazyAdAbout/></Suspense>
  }, 
  {
    path : '/adcontact',
    element : <Suspense fallback={<Spinner/>} ><LazyAdContact/></Suspense>
  },
  {
    path : '/payment',
    element : <Suspense fallback={<Spinner/>} ><LazyPayment/></Suspense>
  },
  {
    path : '/footer',
    element : <Suspense fallback={<Spinner/>} ><LazyFooter/></Suspense>
  }
])
  return (
   <RouterProvider router={router}/>
  )
}

export default App
