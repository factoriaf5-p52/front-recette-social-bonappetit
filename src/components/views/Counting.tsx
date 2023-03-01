import React from 'react'
import view from "../../assets/views.png"
import './views.css'
const Counting: React.FC = () => {
    const [views, setViews] = React.useState(45)    
    return (            
    <div>
        < img className='views' src={view} alt="" onLoad={()=> {
        setViews(views + 1)
        }}/>
        <p>{views}</p>
        </div>    )
}

export default Counting