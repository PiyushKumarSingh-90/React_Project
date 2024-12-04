//ImgSilder.jsx
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => 
{
    let settings = 
    {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>

            {/* <div>
                <h1>1</h1>
            </div>
            <div>
                <h1>2</h1>
            </div>
            <div>
                <h1>3</h1>
            </div> */}

            <Wrap>
                <a>
                    <img src="https://ctr-01273-ap-in.playflix-vod-hls.qwilted-cds.cqloud.com/onetake/playflix/thumbnails/slider_images/Kiss_Goblin_Watch_Now.jpg" alt="img3" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="https://i.ytimg.com/vi/FLoQUxtRQG4/maxresdefault.jpg" alt="img3" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-111425258/111425258.jpg" alt="Demon slayer" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="https://m.media-amazon.com/images/M/MV5BMDE5M2ZlMTktZTliNC00YWUxLWFjOTUtODg1OTc4OTEwNDU2XkEyXkFqcGc@._V1_.jpg" alt="doom" />
                </a>
            </Wrap>
        </Carousel>
    );
};

const Carousel = styled(Slider)
`
    margin-top: 20px;

    & > button 
    {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover 
        {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button 
    {
        &:before 
        {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before 
    {
        color: white;
    }

    .slick-list 
    {
        overflow: initial;
    }

    .slick-prev 
    {
        left: -75px;
    }

    .slick-next 
    {
        right: -75px;
    }
`;

const Wrap = styled.div
`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a 
    {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img 
        {
            width: 100%;  
            height:380px;
            border-radius: 4px; /* Add border-radius to images */
            transition: transform 0.3s ease; /* Smooth zoom effect */
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.9);
            transition-duration: 300ms;

        //     img {
        //         transform: scale(1.05); /* Slightly zoom on hover */
        //     }
        // }
    }
`;

export default ImgSlider;

