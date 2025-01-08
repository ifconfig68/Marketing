import { connect } from "react-redux"
import React from 'react'

function Navbar  (){
  return (
    <nav w-full py-6 shadow-md fixed>
        Navbar
    </nav>
  )
}

const mapStateToProps=state =>({

})

export default connect(mapStateToProps, {

})(Navbar)
