import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ImgBox from './components/ImgBox'
import {GlobalStyle, ImageContainer, Wrapper} from './styles'

const App = () => {
  return (
    <>
      < GlobalStyle />
      < Header />
      < Footer />
      < Wrapper >
        < ImageContainer >
          < ImgBox />
        < /ImageContainer >
      </ Wrapper >
    </>
  );
}

export default App
