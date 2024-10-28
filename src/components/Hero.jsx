import styled from "styled-components"
import { FaApple } from "react-icons/fa"
import { BiLogoPlayStore } from "react-icons/bi"


const Hero = () => {
    return(
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>The money app for Africans.</h1>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <Buttons>
                    <button> <FaApple /> <span>App Store</span></button>
                    <button><BiLogoPlayStore/> <span>Play Store</span></button>
                    </Buttons>
                </TextBox>
                <ImageBox>
                    <img src="https://res.cloudinary.com/df5zacepv/image/upload/v1729875646/heroImage_afvu7k.png" alt="" />
                </ImageBox>
            </Wrapper>
        </Container>
    )
}

export default Hero

const Container = styled.div`
background-color: yellow;
max-width: 1280px;
padding: 0px 10px;
display: flex;
align-items: centre;
justify-content: center;
min-height: calc(100vh - 70px);
`
const Wrapper = styled.div`
width: 85%;
display: flex;
justify-content: space-between;
`
const TextBox = styled.div``
const ImageBox = styled.div`
img{
height: 80%;
width: 100%;
padding: 30px;

}
`
const Buttons = styled.div``
