import { useState } from "react";
import addNotification from "react-push-notification";
import { Link } from "react-router-dom"


export const FirstSectionAboutUs = (props) => {
    const DB = props.DB
    const [Input, setInput] = useState("");
    const [PassWord, setPassWord] = useState("");
    const [cd, setcd] = useState("");
    const [code, setCode] = useState(Math.floor(1000 + Math.random() * 9000));
    
    
    // const code = Math.floor(1000 + Math.random() * 9000) 
    const notify = ()=>{
        addNotification({
            title:"Verification Code",
            message: code,
            duration: 4000,
            native: true,
            tag:'code'
        })
    }
    const searchUser = () => {
        const user = DB.find((user) => user.name === Input);
        return user;
    };
    const user = searchUser();

    const check =(e) => {
        if ( Input.trim() === "" || PassWord.trim() === "" || cd.trim() === "" ) {
            console.log("empty inputs")
            return;
        }
        if (!searchUser()){
            return;
        }
        if(user.password !== PassWord){
            console.log("password incorrect")
            return;
        }
        if(cd != code){
            console.log("verification is incorect")
            return;
        }
        console.log("waaaaaaaach")
    }
    return (
        <>
            <div className="w-100 h-screen bg-[url('https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                bg-cover bg-center relative flex justify-center items-center ">
                <div className="h-[50vh] w-[30%] absolute backdrop-blur ">
                    <form action="" className=" h-fit w-100 flex flex-col gap-4  justify-center items-center pt-5">
                        <input onChange={(e)=>setInput(e.target.value)} value={Input} className="w-[70%] py-2 rounded-full px-3 bg-transparent text-white border-2 border-white focus:outline-none placeholder-white" type="text" placeholder="Username" />
                        <input onChange={(e)=>setPassWord(e.target.value)} value={PassWord} className="w-[70%] py-2 rounded-full px-3 bg-transparent text-white border-2 border-white focus:outline-none placeholder-white" type="password" placeholder="Password" />
                    </form>
                    <div className="flex flex-wrap justify-center pt-4 gap-y-4 gap-x-1">
                        <button onClick={notify}  className="w-[30%]  py-2 rounded-full px-3 bg-white text-rose-400 font-bold no-underline text-center ">Get code</button>
                        <input type="text" onChange={(e)=>setcd(e.target.value)} value={cd}  className="w-[40%] py-2 rounded-full px-3 bg-transparent text-white border-2 border-white focus:outline-none placeholder-white"placeholder="Verif code"/> 
                        <Link to={`/contact-us`} onClick={(e)=>check(e)} className="w-[70%]  py-2 rounded-full px-3 bg-white text-rose-400 font-bold no-underline text-center ">Sign In</Link>
                        <p className="text-white w-[70%] text-center">don't have an account? <Link to="/" className="no-underline text-rose-400 font-bold">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
