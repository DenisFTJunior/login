import axios from "axios"
import { useEffect, useState } from "react"
import style from "../styles/css/Login.module.css"

export default function Login(props){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [visibility, setVisibility] = useState(style.none)

    useEffect(()=>{
        if(props.visibility) return setVisibility(style.container)
        return setVisibility(style.none)
    },[props.visibility])
    const submitHandler = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post("api/login", {username,password})
        }catch(err){
            console.log(err)
        }
    }
    
    const content = 
        <div className = {visibility}>
        <form onSubmit = {submitHandler}>
            <input className =  {style.input} type = "text" placeholder = "Username"  onChange={(e)=>setUsername(e.target.value)} required/>
            <input className =  {style.input} type = "password" placeholder = "Password" onChange={(e)=>setPassword(e.target.value)} required/>
            <input className={style.submitButton}type ="submit" value= "Login"/>
        </form>
        </div>
    return content;
}