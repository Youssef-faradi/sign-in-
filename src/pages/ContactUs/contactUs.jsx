import { FirstSectionContactUs } from './components/section1.jsx'

export const ContactUs = (props) => {
    return (
        <>  
            <FirstSectionContactUs DB={props.DB} setDB={props.setDB}/>
        </>
    )
}
