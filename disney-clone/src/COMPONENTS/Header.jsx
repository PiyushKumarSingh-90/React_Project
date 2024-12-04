//Header.jsx
import styled from "styled-components";
import { useEffect } from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import 
{
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
} from "../features/user/userSlice";

const Header = () => 
{
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Update to useNavigate
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => 
    {
        const unsubscribe = auth.onAuthStateChanged(async (user) => 
        {

            if (user) 
            {
                setUser(user);
                navigate("/home"); // Use navigate for routing
            }

        });

        return () => unsubscribe(); // Cleanup subscription

    }, [userName, navigate]); // Added navigate to dependency array

    const handleAuth = async () => 
    {
        if (!userName) {
            try {
                const result = await signInWithPopup(auth, provider); // Correct usage of signInWithPopup
                setUser(result.user);
            } catch (error) {
                alert(error.message);
            }
        } 
        else 
        {
            auth.signOut()
                .then(() => 
                {
                    dispatch(setSignOutState());
                    navigate("/");
                })
                .catch((err) => alert(err.message));
        }
    };
    

    const setUser = (user) => 
    {
        dispatch(
            setUserLoginDetails(
            {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <Logo>
                <img src="https://i.pinimg.com/564x/bc/2b/4b/bc2b4bc91cf38497e3058533399566d7.jpg" alt="Disney logo" />
            </Logo>

            {!userName ? 
            (

                <Login onClick={handleAuth}>Login</Login>

            ) : 

            (
                <>
                    <NavMenu>
                        <a href="/home">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png" alt="HOME" />
                            <span>HOME</span>
                        </a>
                        <a href="/search">
                            <img src="https://static-00.iconduck.com/assets.00/search-icon-1023x1024-cz5u4134.png" alt="SEARCH" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/watchlist">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/015/286/969/small/plus-sign-icon-free-png.png" alt="WATCHLIST" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/originals">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1mGzmHxaB2tsOFD-zKVtZFD69CswPK-ANg&s" alt="ORIGINALS" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/movie">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs82lgU1CLvFOxHsmyIbR85bbIx2qX6wS-fA&s" alt="MOVIE" />
                            <span>MOVIE</span>
                        </a>
                        <a href="/series">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3fSFcKkxY2BgN3vYuxjYbvnPUh6J2sdmkw&s" alt="SERIES" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>

                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            )}
        </Nav>
    );
};

// Styled components remain unchanged
const Nav = styled.nav`
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    height: 70px;
    width: 15%;
    max-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        position: relative;
        text-decoration: none;

        img {
            height: 20px;
            width: 20px;
            min-width: 20px;
            padding: 2px;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            margin-left: 8px;
            padding: 2px 0px;
            letter-spacing: 1.42px;
            position: relative;

            &:before {
                content: "";
                position: absolute;
                background-color: rgb(249, 249, 249);
                height: 2px;
                left: 0;
                right: 0;
                bottom: -6px;
                border-radius: 0 0 4px 4px;
                transform: scaleX(0);
                transform-origin: left center;
                transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover span:before {
            transform: scaleX(1);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const Login = styled.a`
    background-color: black;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border: 1px solid white;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #0483ee;
        color: white;
        border: 1px solid white;
        border-radius: 4px;
    }
`;

const UserImg = styled.img`
    height: 100%;
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header;
