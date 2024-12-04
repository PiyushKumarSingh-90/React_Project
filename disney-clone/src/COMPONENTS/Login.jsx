//Login.jsx
import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>

                <Premium>

                    <PremiumLogo src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17f26397-fad3-4f1c-9503-a7924e05bb2d/dfzepit-6d94f93e-2a54-49a1-af7e-00c0248dad9f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3ZjI2Mzk3LWZhZDMtNGYxYy05NTAzLWE3OTI0ZTA1YmIyZFwvZGZ6ZXBpdC02ZDk0ZjkzZS0yYTU0LTQ5YTEtYWY3ZS0wMGMwMjQ4ZGFkOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Q5s11LMMOv0qifGsW9cFUTQ77kUzR0JOGm5LL5A1gLA" />

                    <SignUp>GET THE DISNEY PREMIUM
                    </SignUp>

                    <Description>Get endless entertainment,live sports,and the shows and movies you love.
                    </Description>

                    <LogoTwo src="/images/cta-logo-two.png" />

                </Premium>

                <BgImage>
                    <Overlay />
                </BgImage >

            </Content>
        </Container>
    );
};

const Container = styled.section
`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    position: relative;
    height: 100vh; 
`;

const Content = styled.div
`
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40% 5%;
`;

const BgImage = styled.div
`
    height: 100vh;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/netflix-india.jpeg?ssl=1");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent black */
    z-index: 1; /* Ensure it's above the BgImage */
`;

const Premium= styled.div
`
    
    mix-width:650px;
    display:flex;
    flex-direction: column;
    
    
`;

const PremiumLogo= styled.img 
`
    
    width:100%;
    max-width: 750px;
    

`;

const SignUp= styled.button
`
    width:100%;
    max-width:700;
    margin-bottom:1%;
    margin-top:2%;
    font-weight: bold;
    font-size:18px;
    letter-spacing:1.5px;
    color: white;
    background-color:#0063e5;
    padding: 25px 40px; 
    border: none;  
    border-radius: 5px;  
    cursor: pointer; 

    &:hover 
    {
        background-color: #0483ee; /* Darken the button color on hover */
    }
    
    &:focus 
    {
        outline: none; /* Removes the focus outline */
    }

`

const Description = styled.p
`
    font-size:17px;
    margin-left:5%;
    margin-top:1%;
    line-height:1.5;
    letter-spacing:1.5px;

`
const LogoTwo = styled.img
`
    width:100%;
    max-width: 750px;
    margin-top:5%;

`


export default Login;
