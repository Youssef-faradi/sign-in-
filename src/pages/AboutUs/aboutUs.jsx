import { FirstSectionAboutUs } from './components/section1.jsx'

export const AboutUs = (props) => {
    return (
        <>  
            <FirstSectionAboutUs DB={props.DB} setDB={props.setDB} />
        </>
    )
}
