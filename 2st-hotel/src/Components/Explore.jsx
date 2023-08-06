import React from 'react'
import './Explore.css'
import Query from './Query'


const Explore = () => {
    return (
        <div>
            <div className="Homes2">
                <div className="img5"></div>
                <div className="txts5">
                    <p className='t7'>Discover Our History</p>
                    <p className='t8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <p className='t9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> 
                    <div className='btn4'><input type="button" value="Explore More"/></div>         
                </div>
            </div>
            <Query/>
        </div>
    )
}

export default Explore
