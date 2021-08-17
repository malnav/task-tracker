import Button from './Button'
import { useLocation } from 'react-router-dom'



const Header = ({title, showAdd, onClickAddButton}) => {
    
    const location = useLocation()
    return(    
        <header className='header'>
            <h2>
                {title}
            </h2> 
            {
                (location.pathname === '/task-tracker') && <Button onClick={onClickAddButton} color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"}  />
            }
        </header>
    )
}



//const h1Style = {
//    color:'orange',
//    backgroundColor:'yellow'
//}

export default Header