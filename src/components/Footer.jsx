import React from "react";
import { Box, VStack, Text, Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.800"} minH={"48"} px={"16"} py={["16", "8"]}>
      <VStack>
        <Text color={"whiteAlpha.900"}>Copyrights &copy; 2022 </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
