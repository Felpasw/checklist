
//import Lottie from "react-lottie";
import { Fragment } from 'react'
import ChecklistSample from '../animations/ChecklistSample.json'
import FormLogin from '../components/formLogin'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import NavbarLogin from "../components/navbarLogin";

export default function init(){

  return( 
    <Fragment>
    <NavbarLogin/>
    <FormLogin/>
    <Footer/>
    </Fragment> )
}