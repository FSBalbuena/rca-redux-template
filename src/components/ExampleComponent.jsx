import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Component=()=>{
  const [value,setValue]=useState("")
  return (<input 
          value={value} 
          onChange={
                    (e)=>setValue(e.target.value)
                  }
          />)
}

Component.propTypes={
   /*
   ----------basic-------------
   email:      PropTypes.string,
  seats:      PropTypes.number,
  callback:   PropTypes.func,
  isClosed:   PropTypes.bool,
  any:        PropTypes.any
  */ 
}

export default Component