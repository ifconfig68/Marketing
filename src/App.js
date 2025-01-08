import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import React from 'react'
import store from 'store'
import { Provider  } from 'react-redux'
import Error404 from 'containers/errors/Error404'
import Home from 'containers/pages/Home'
import './styles/index.css'


export default function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        {/*Eror Display*/}
        <Route path="*" element={<Error404/>}/>

        {/*Home Display*/}

        <Route path="/" element={<Home/>}/>

      </Routes>
    </Router>






    </Provider>
  )
}