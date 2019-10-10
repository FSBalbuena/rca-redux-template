import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../components/HomeComponent'
/*generally containers dispatch actions*/
import {exampleAction} from '../redux/actions/example-actions'

const HomeContainer= ({exampleAction,isMobile})=>{
    useEffect(
        ()=>{
            exampleAction()
        }
    )
    return (<HomeComponent isMobile={isMobile}/>)
}

/* react-redux settings */
const mapStateToProps=(state,ownProps)=>({
    isMobile:state.ui.isMobile
})
const mapDispatchToProps=(dispatch,ownProps)=>({
    exampleAction:()=>dispatch(exampleAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
