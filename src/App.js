import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Features from './pages/Features/Features'
import CourseDetails from './pages/CourseDetails/CourseDetails'
import QnA from './pages/Q&A/Q&A'
import Dashboard from './pages/Dashboard/Dashboard'
import Contact from './pages/Contact/Contact'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Navbar from './pages/Navbar/Navbar'
import Pricing from './pages/Pricing/Pricing'
import Footer from './pages/Footer/Footer'
import Page404 from './pages/404/Page404'
// import Payments from './pages/Payments/Payments'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EnrolledCourses from './pages/EnrolledCourses/EnrolledCourses'
import Services from './pages/Services/Services'

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pro' component={Pricing} />
        <Route path='/features' component={Features} />
        <Route path='/our-services' component={Services} />
        <Route path='/course-details/:_id' component={CourseDetails} />
        <Route path='/qna' component={QnA} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/login' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        {/* <Route path="/payments" component={Payments} /> */}
        <Route path='*' component={Page404} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
