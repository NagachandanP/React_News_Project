import React, { useEffect, useContext } from "react";

import "../App.css";
import noteContext from "../context/noteContext";
import {
  Select,
  Container,
  Heading,
  Box,
  HStack,
  Image,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import xtype from "xtypejs";

const NewsCard = ({ imgs, title, url, author, desc, ind }) => {
  const context = useContext(noteContext);
  let ab = "extitle" + ind;
  let cd = "exmod1" + ind;
  let es = "#" + cd;
  //////////////////////////////////Fade //////////////////////////

  var Styled = {};
  useEffect(() => {
    // const options = {
    //   rootMargin: "20px 0px 0px 0px",
    // };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      }
      // { threshold: 0.05 }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  ////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Container
        maxW={"container.xl"}
        p={"8"}
        marginTop={"10"}
        className="hidden"
      >
        {/* className="hidden" */}
        <button
          type="button"
          padding="0px"
          // className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={es}
        >
          {/* <a href={url} target={"blank"}> */}
          <HStack id="cards" rounded={"2xl"} padding={"8"} shadow={"dark-lg"}>
            {/* <Image
              src={s}
              minW={"200"}
              minH={"150"}
              maxW={"200"}
              maxH={"150"}
              alt={"Picture"}
              boxShadow="dark-lg"
            /> */}
            <div className="row">
              {/* <Box bgColor={"green"}> */}

              <Image
                src={imgs}
                alt="Picture"
                className="col col-lg-4 col-md-2"
                shadow={"dark-lg"}
              />

              <VStack className="col col-lg col-md">
                <Text size={"md"} noOfLines={[4, 5, 6]} fontWeight={"bold"}>
                  {title}
                </Text>

                <Text
                  size={"md"}
                  // noOfLines={[4, 5, 6]}
                  fontStyle={"italic"}
                >
                  {desc}
                </Text>
              </VStack>
            </div>
          </HStack>

          {/* //////////////////////////////////Modal////////////////////////////////////////////////////////////// */}
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id={cd}
          tabIndex="-1"
          role="dialog"
          aria-labelledby={ab}
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content ">
              <div className="modal-header">
                <h5 className="modal-title" id={ab}>
                  {author}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">{desc}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  <a href={url} target="_blank">
                    More Info...
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* //////////////////////////////////////////////Modal-End/////////////////////////////////////////////////////////// */}
      </Container>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* <!-- Modal --> */}
    </>
  );
};

export default NewsCard;
