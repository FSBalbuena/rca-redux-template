import React from 'react'
import PropTypes from 'prop-types'

const HomeComponent=({isMobile})=>{

    return (
        <p>
            {isMobile?
            "Mobile View Enable"
            :
            "Normal Layout enable"
            }
        </p>
    )
}

HomeComponent.propTypes={
   isMobile:PropTypes.bool
}

export default HomeComponent