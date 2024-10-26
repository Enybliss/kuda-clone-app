import Personal from "./pages/Home/Personal";
import Business from "./pages/Home/Business";
import Companies from "./pages/Home/Companies";
import Header from "./static/header/Header";
import Footer from "./static/Footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  const d =2+3

  return(
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route  path="/business" element={<Business />}/>
          <Route path="/companies" element={<Companies/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default App






