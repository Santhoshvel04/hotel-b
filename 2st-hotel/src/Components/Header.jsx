import React from 'react'
import "./Header.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Popular from './Popular rooms';

const Header = () => {
    return (
        <div className='text'>
            <div className="container">
                <div className="loginbtn"><input type="button" value="login" /></div>
                <div className="Home">
                    <div className="txt">
                        <p className='t1'>Find your perfect to place to stay</p>
                        <p className='t2'>Our exquisite rooms offers a perfect blend of contemporary
                            elegance and warm hospitality</p>
                        <div className='t3'>
                            <div><PlayArrowIcon className='icon' style={{ fontSize: "35px" }} />
                                <span>Watch Video</span>
                            </div>
                        </div>
                    </div>
                    <div className="img"></div>
                    <div className='search'>
                        <div className='bar'>
                            <div className='content'>
                                <div className='items'>< LocationOnIcon className='Sicon' />&ensp;<p1>Location</p1><p>Abuja</p></div>
                                <div className='items'><InventoryIcon className='Sicon' />&ensp;<p1>Check In </p1><p>10 jun 2023</p></div>
                                <div className='items'><InventoryIcon className='Sicon' />&ensp;<p1>Check Out</p1><p>10 jun 2023</p></div>
                                <div className='items'><PersonIcon className='Sicon' />&ensp;<p1>Rooms For</p1><p>1 room, 2 guests</p></div>
                            </div>
                            <div className='var'><SearchIcon />&ensp;Search...</div>
                        </div>
                    </div>
                </div>
                <Popular rooms/>
            </div>
        </div>
    )
}

export default Header
