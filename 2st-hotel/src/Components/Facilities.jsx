import React from 'react'
import './Facilities.css'
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import Explore from './Explore';

const Facilities = () => {
  return (
    <div>
       <div className='faci'>
        <div className='Ftxt'>
            <p className='t5'>We do our best facilities provide you</p>
            <p className='t6'>Discover Your ideal Haven : Find Your Perfect Stay at Golden Sands Resort</p>
            <div className='btn3'><input type="button" value="Contact Now"/></div>    
        </div>
        <div className='separateIcons'>
            <div className='boxes'>
                <div className='box1'>
                    <div className='box_border'><p><DesktopWindowsOutlinedIcon className='icnss'/></p><p>Private workspace</p></div>
                    <div className='box_border'><p><LocalParkingOutlinedIcon className='icnss'/></p><p>Parking Area</p></div>
                    <div className='box_border'><p><FreeBreakfastOutlinedIcon className='icnss'/></p><p>Breakfast</p></div>
                    <div className='box_border'><p><WifiOutlinedIcon className='icnss'/></p><p>Free Wifi</p></div>
                </div>
                <div className='box2'>
                    <div className='box_border2'><p><TungstenOutlinedIcon className='icnss'/></p><p>Free Electricity</p></div>
                    <div className='box_border2'><p><PoolOutlinedIcon className='icnss'/></p><p>Swimming Pool</p></div>
                    <div className='box_border2'><p><FitnessCenterOutlinedIcon className='icnss'/></p><p>Exercise space</p></div>
                    <div className='box_border2'><p><SmsOutlinedIcon className='icnss'/></p><p>Other Services</p></div>
                </div>
            </div>
        </div>
       </div>
       <Explore/>
    </div>
  )
}

export default Facilities
