import React from 'react'
import './Map.css'
import Footer from './Footer'

const Map = () => {
    return (
        <div>
            <div className='map'>
                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tiruchengode+(hotels)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
            </div>
            <div>
                <div className='visit'>
                    <div className='bar2'>
                        <div className='Content'>
                            <div className='para_Head'>Visit Us</div>
                            <div className='para'>Lorem Ipsum and typesetting industry. Lorem Ipsum industry's standard dummy text ever since the 1500s</div>
                        </div>
                        <div className='Enter'>
                            <div className='txtbox'><input type="Email" value="Enter Your email" /></div>
                            <input type="button" value="Contacts" className='Con_btns' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Map
