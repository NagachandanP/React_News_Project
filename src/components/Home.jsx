import React, { useEffect, useState, useContext } from "react";
import { server } from "../index";
import NewsCard from "./NewsCard";
import {
  Select,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
// import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import About from "./About";
import xtype from "xtypejs";

import "../App.css";
import noteContext from "../context/noteContext";

const Home = () => {
  const context = useContext(noteContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  // const [nation, setNation] = useState("in");

  useEffect(() => {
    setLoading(true);
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          `${server}/top-headlines?country=${context.nation}&category=${context.category}&apiKey=Your_API_Key`
        );

        setNews(data.articles);

        console.log("News[]: ", news.length);

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchNews();
  }, [context.nation, context.category]);

  if (error) return <ErrorComponent message={"Error While Fetching News"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {news.map((i, index) => (
              <NewsCard
                key={index}
                imgs={i.urlToImage}
                title={i.title}
                url={i.url}
                author={i.author}
                content={i.content}
                desc={i.description}
                ind={index}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Home;
