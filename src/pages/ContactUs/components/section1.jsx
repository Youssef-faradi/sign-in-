import { Link, useParams } from "react-router-dom"

export const FirstSectionContactUs = (props) => {
    const { id } = useParams()

    const DB = props.DB
    console.log(DB)
    return (
        <>

            <div className="w-100 h-screen bg-[url('https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
                bg-cover bg-center relative flex justify-center items-center ">
                <div className="w-100 h-screen flex justify-center items-center absolute rounded">
                    <div className=" w-[25%] h-[70%] rounded-s-lg">
                        <img className="w-100 h-100 rounded-s-lg"  src={DB[0].profile} alt="" />
                    </div>
                    <div className="backdrop-blur w-[30%] h-[70%] rounded-e-lg flex flex-col justify-evenly items-center">
                        <h2 className="text-sky-300">Name : <span className="text-rose-500">{DB[0].name.toUpperCase()}</span></h2>
                        <h4 className="text-sky-300">Email : <span className="text-rose-500">{DB[0].email}</span></h4>
                        <Link  to={"/about-us"} className="w-[70%] py-2 rounded-full px-3 bg-white text-rose-400 font-bold no-underline text-center " >Sign Out </Link>
                    </div>
                </div>
            </div>

        </>
    )
}
