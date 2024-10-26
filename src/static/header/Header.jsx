import styled from 'styled-components';
import { MdArrowDropDown } from "react-icons/md";
import {Link} from "react-router-dom";
import Sidebar from "../SideBar";
import { useState } from "react";
import { IoReorderTwoOutline } from "react-icons/io5";




const Header = () =>{
  const [toggle, setToggle] = useState(false)

  const handleToggle =()=>{
    setToggle(!toggle)
  }

  console.log(toggle);

  return(
    <>
      
    <Container>
      <LogoNav>
        <Logo>
            <img src="https://res.cloudinary.com/df5zacepv/image/upload/v1729876573/images_vbezjv.png" alt="" />
        </Logo>

        <Navigation>
          <Link to="/">
            <nav>
              <span>Personal</span>
              <MdArrowDropDown size={20} />
            </nav>
          </Link>

          <Link to="/business">
            <nav>
              <span>Business</span>
              <MdArrowDropDown size={20} />
            </nav>
          </Link>
            
          <Link to="/companies">
            <nav>
              <span>Company</span>
              <MdArrowDropDown size={20} />
            </nav>
          </Link>
            
          <Link to="/">
            <nav>
              <span>Help</span>
              <MdArrowDropDown size={20} />
            </nav>
          </Link>
        </Navigation>  
      </LogoNav>

      <Buttons>
        <SignBtn>Sign In</SignBtn>

        <Link to="/companies">
          <JoinBtn>Join Kuda</JoinBtn>
        </Link>
          
        <ConBtn>
            <img src="https://res.cloudinary.com/df5zacepv/image/upload/v1729875621/nigeria_exuvhz.png" alt="" />
        </ConBtn>

        <SideNav onClick={handleToggle}>
          <IoReorderTwoOutline />
        </SideNav>
        
      </Buttons>

    </Container>
    {toggle === false ? null : <Sidebar toggle={toggle} setToggle={setToggle} />} 
    </>
  )
}

export default Header

const Container = styled.div`
height: 70px;
/* background-color: blueviolet; */
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const LogoNav = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.div`
margin: 0px 80px 0px 50px;
img{
  width: 100px;
}
`
const Navigation = styled.div`
display: flex;
nav{
  display: flex;
  align-items: center;
  color: #5e025e;
  margin:  0px 20px;
  span{
    margin-right: 3px;
    font-size: 13px;
    font-weight: 600;
  }
}

@media (max-width: 800px){
  display: none;
}
`
const Buttons = styled.div`
display: flex;
align-items: center;


@media (max-width: 800px) {
    margin-right: 30px;
}
`
const SignBtn = styled.div`
background-color: transparent;
border: none;
outline: none;
font-weight: 600;
color: #40196D;

@media (max-width: 800px) {
  display: none;
}
`
const JoinBtn = styled.div`
width: 150px;
height: 45px;
border-radius: 10px;
color: #fff;
background-color: #5e025e;
outline: none;
font-weight: 700;
line-height: 1;
display: flex;
justify-content: center;
align-items: center;
padding: 5px;
text-decoration: none;
margin: 0px 25px;

@media (max-width: 800px) {
display: none;
}
`
const ConBtn = styled.div`
background-color: #a4e3c6;
outline: none;
border: none;
height: 40px;
width: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 50px;

img{
    width: 20px;
}
`
const SideNav = styled.div`
  display: none;
  font-size: 30px;
  margin-left: -30px;
  
@media (max-width: 800px){
  display: flex;
  align-items: center;
  cursor: pointer;
    
}
`





