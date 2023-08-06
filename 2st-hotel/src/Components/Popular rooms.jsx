import React from 'react'
import "./Popular.css"
import img2 from "../Assets/img2.png"
import img3 from "../Assets/img3.png"
import img4 from "../Assets/img4.png"
import GradeIcon from '@mui/icons-material/Grade';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Facilities from './Facilities'

const Popularrooms = () => {
    return (
        <div>
                <div className='heading'>Our Most Popular Rooms</div>
                <div className="btn2"><input type="button" value="view all" /></div>
                <div className='room_img'>
                    <div className='rooms'><img src={img2} alt='img2'/><p className="t4">Executive Room</p><p1>$200 Par Night</p1>&ensp;&ensp;&ensp;<p2><GradeIcon className='icn'/><GradeIcon className='icn'/><GradeIcon className='icn'/><GradeIcon className='icn'/><StarBorderIcon className='icnn'/>&ensp;</p2>4.8</div>
                    <div className='rooms'><img src={img3} alt='img3'/><p className="t4">Premium Room</p><p1>$200 Par Night</p1>&ensp;&ensp;&ensp;<p2><GradeIcon className='icn'/><GradeIcon className='icn'/><GradeIcon className='icn'/><GradeIcon className='icn'/><StarBorderIcon className='icnn'/>&ensp;</p2>4.8</div>
                    <div className='rooms'><img src={img4} alt='img4'/><p className="t4">Basic Room</p><p1>$200 Par Night</p1>&ensp;&ensp;&ensp;<p2><GradeIcon className='icn'/><GradeIcon className='icn'/><GradeIcon className='icn'/><GradeIcon className='icn'/><StarBorderIcon className='icnn'/>&ensp;</p2>4.8</div>
                </div>
                <Facilities/>
        </div>
    )
}

export default Popularrooms
