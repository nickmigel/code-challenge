import React from 'react';
import NavBar from './component/navbar/NavBar'
import Header from './component/hero/Header'
import About from './component/about/About'
import Featured from './component/featuredItems/Featured'
import Testimonial from './component/testimonial/Testimonial'
import DownloadBox from './component/downloadBox/DownLoadBox'
import Footer from './component/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Featured />
      <Testimonial />
      <DownloadBox />
      <Footer />
    </div>
  );
}

export default App;
