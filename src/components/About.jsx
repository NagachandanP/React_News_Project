import React, { useContext, useState } from "react";
import { Box, VStack, Text, Button } from "@chakra-ui/react";
import noteContext from "../context/noteContext";
const About = () => {
  const a = useContext(noteContext);
  return (
    <>
      <Box bgColor={"blackAlpha.800"} minH={"48"} p={"20"}>
        <VStack justifyContent={"space-evenly"}>
          <Text color={"whiteAlpha.900"} fontSize={"3xl"}>
            Developed by Nagachandan P & Amruth Kumar M V
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default About;
