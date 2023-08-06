import React from 'react'
import './Query.css'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Map from './Map';

const Query = () => {
    return (
        <div>
            <div className='two_div'>
                <div className="txts6">
                    <p className='t10'>Frequently Asked  <span>Questions</span></p>
                    <p className='t11'>Lorem Ipsum and typesetting industry. Lorem Ipsum industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className='Qry'>
                    <div className='query_txt'>
                        <div className='lg_txt'>
                            <div><h5>How Far is Nearest Bus  Station ? </h5></div>
                            <div><KeyboardArrowUpOutlinedIcon /></div>
                        </div>
                        <div><p>Lorem Ipsum and typesetting industry. Lorem Ipsum industry's standard dummy text ever since the 1500s</p></div>
                    </div>
                    <div className='same_txt'>
                        <div><h5>What Makes Us Different</h5></div>
                        <div><KeyboardArrowDownOutlinedIcon /></div>
                    </div>
                    <div className='same_txt'>
                        <div><h5>What Time is Checking Out ?</h5></div>
                        <div><KeyboardArrowDownOutlinedIcon /></div>
                    </div>
                </div>
            </div>
            <Map/>
        </div>
    )
}

export default Query
