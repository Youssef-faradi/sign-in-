import { FirstSectionHome } from './components/section1.jsx'

export const Home = (props) => {
    return (
        <>  
            <FirstSectionHome DB={props.DB} setDB={props.setDB}/>
        </>
    )
}
