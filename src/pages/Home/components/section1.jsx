import { useState } from "react";
import { Link } from "react-router-dom";


export const FirstSectionHome = (props) => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    class clients {
        constructor(name, mail, phone, password,profile) {
            this.name = name
            this.mail = mail
            this.phone = phone
            this.password = password
            this.profile = profile

        }
    }
    
    const  user = new clients()
    user.profile=file
    const DB = props.DB

    const PushArray = () =>{
        let newtable=[...DB, user]
        props.setDB(newtable)
        console.log(DB);
    }


    

    return (
        <>
            <div className="w-100 h-screen bg-[url('https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                bg-cover bg-center relative flex justify-center items-center ">
                <div className="h-[70vh] w-[30%] absolute backdrop-blur ">
                    <form action="" className="flex flex-wrap gap-3 justify-center pt-4">
                        <input onChange={(e)=>  user.name = e.target.value } className="w-[70%] py-2 rounded-full px-3 bg-transparent text-white border-2 border-white focus:outline-none placeholder-white" type="text"  placeholder="Username" />
                        <input onChange={(e)=>  user.mail = e.target.value} className="w-[70%] py-2 rounded-full px-3 bg-transparent text-white border-2 border-white focus:outline-none placeholder-white" type="email"  placeholder="Email" />
                        <input onChange={(e)=>  user.phone = e.target.value} className="w-[70%] py-2 rounded-full px-3 bg-transparent text-white border-2 border-white focus:outline-none placeholder-white" type="text"  placeholder="Phone number" />
                        <input onChange={(e)=>  user.password = e.target.value} className="w-[70%] py-2 rounded-full px-3 bg-transparent text-white border-2 border-white focus:outline-none placeholder-white" type="password"  placeholder="Password" />
                        <input className="w-[70%] py-2 rounded-full px-3 bg-transparent text-white border-2 border-white focus:outline-none placeholder-white" type="password"  placeholder="Confirm password" />
                    </form>
                    <div className="flex flex-wrap justify-center pt-4 gap-3">
                        <button onClick={PushArray}  className="w-[70%] py-2 rounded-full px-3 bg-white text-rose-400 font-bold no-underline text-center ">Sign Up</button>
                        <p className="text-white w-[70%] text-center">Already have an account? <Link to="/about-us" className="no-underline text-rose-400 font-bold">Sign In</Link></p>
                            <div className="w-100  flex justify-evenly">
                                <input type="file" onChange={handleChange}  id="img" className="hidden"/>
                                <label htmlFor="img" className=" w-[40%] py-2 text-center rounded-full px-3 bg-white">Insert Your Image</label>
                                <img src={file} alt="" width={"40px"} height={"40px"} />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}


