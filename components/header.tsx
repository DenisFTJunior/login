import style from "../styles/css/Header.module.css"
import Img from "next/image"
import Login from "./login"
import { useEffect, useState } from "react"

export default function Header(){
    const [visibilityIn, setVisibilityIn] = useState(false)
    const [loginClass, setLoginClass] = useState(style.none)

    const signinHandler = e=> {
        setVisibilityIn(true)
    }
    useEffect(()=>{
        if(visibilityIn) return setLoginClass(style.out)
        return setLoginClass(style.none)
    },[visibilityIn])

    const content = 
    <header className = {style.container}>
        <div className = {style.logo}><Img src ="/logo.png" width="" height=""></Img></div>
        <div className = {style.containerButton}>
            <input className={style.buttonSignin} type = "button" value = "Sign In" onClick={signinHandler}/>
            <input className={style.buttonSignup} type = "button" value = "Sign Up" />
        </div>
        <div className = {loginClass} onClick ={()=>{setVisibilityIn(false)}}></div>
        <Login visibility = {visibilityIn}/>
        
    </header>
    return content
} 