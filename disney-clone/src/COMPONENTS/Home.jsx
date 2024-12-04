//Home.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { db } from "../Firebase";  

import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import ImgSlider from "./ImgSilder";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { collection, getDocs } from "firebase/firestore"; 
const Home = () => 
{
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        const fetchMovies = async () => 
        {
            const moviesCollection = collection(db, "movies"); 
            const snapshot = await getDocs(moviesCollection); 
            const moviesList = snapshot.docs.map((doc) => (
            {
                id: doc.id,
                ...doc.data()
            }));
    
        
            console.log("Fetched Movies List:", moviesList);
    
            
            let recommends = [];
            let newDisneys = [];
            let originals = [];
            let trending = [];
    
            moviesList.forEach(movie => {
                switch (movie.type) {
                    case "recommend":
                        recommends.push(movie);
                        break;
                    case "new":
                        newDisneys.push(movie);
                        break;
                    case "original":
                        originals.push(movie);
                        break;
                    case "trending":
                        trending.push(movie);
                        break;
                    default:
                        break;
                }
            });
    
            // Log categorized arrays
            console.log("Recommends:", recommends);
            console.log("New Disney:", newDisneys);
            console.log("Originals:", originals);
            console.log("Trending:", trending);
    
            // Dispatch the movies to Redux
            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        };
    
        fetchMovies();
    }, [userName, dispatch]);
    

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
