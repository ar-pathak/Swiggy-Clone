import React from 'react'
import { Link } from 'react-router'

const HomeHeroCards = ({ imgSrc }) => {
    return (
        <div className='min-h-[320px] max-w-[80%]' >
            <Link >
                <img src={imgSrc} />
            </Link>
        </div>
    )
}

export default HomeHeroCards