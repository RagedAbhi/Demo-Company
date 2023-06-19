import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterIcons from './parts/FilterIcons';
import { motion } from "framer-motion"

const Topbar = () => {
    return (
        <div className='topbar'>
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>We tackle interesting topics every day</motion.p>
            <motion.div className="searchline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
                <div className="searchbox">
                    <SearchRoundedIcon style={{ margin: "15px", color: "#757B8C" }} />
                    <input placeholder='Find Courses' />
                </div>
                <FilterIcons />
            </motion.div>
        </div>
    )
}

export default Topbar