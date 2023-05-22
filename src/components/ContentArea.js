import React, { Suspense, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Header from "./Header";
// import Poster from "./Poster";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/Action";
import FallbackPoster from "./FallbackPoster";
 const Poster = React.lazy(() => import("./Poster"));

const ContentAreaStyled = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background,

  color: theme.palette.text.secondary,
}));

export default function ContentArea() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([])
  const dispatch = useDispatch();

  const movieData = useSelector((state) => state.movieData);
  const { title, content } = movieData;

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1)
    }
    }
    
    useEffect(() => {
      setData([...data, ...content])
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
    }, [content])


    const getPageData = () => {
      let importJson;
      if(page === 1){
        importJson =  import('../Data/CONTENTLISTINGPAGE-PAGE1.json')
      }
      else if(page ===  2){
        importJson =  import('../Data/CONTENTLISTINGPAGE-PAGE2.json')
      }
      else if(page ===  3){
        importJson =  import('../Data/CONTENTLISTINGPAGE-PAGE3.json')
      }
      return importJson
    }

  useEffect(() => {

    getPageData() && getPageData().then((res) => {
      console.log('fetching for page', page);
      // console.log(res.page);
      const data = {
        title: res.page.title,
        total: res.page["total-content-items"],
        pageNum: res.page["page-num-requested"],
        pageSize: res.page["page-size-returned"],
        content: res.page["content-items"].content,
      };
      dispatch(getMovies(data));
    });
  }, [page]);

  return (
    <ContentAreaStyled>
      <Header title={title} />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((poster) => {
          return (
            <Grid item xs={4}>
              <Suspense fallback = {<FallbackPoster />}>
              <Poster name = {poster.name} image = {poster["poster-image"]}/>
              </Suspense>
              
            </Grid>
          );
        })}
      </Grid>
    </ContentAreaStyled>
  );
}
