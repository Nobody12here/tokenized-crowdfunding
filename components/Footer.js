import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color={useColorModeValue("teal.800", "white")}
          as="h2"
          size="lg"
        >
          <Box
            as={"span"}
            color={useColorModeValue("teal.400", "teal.300")}
            position={"relative"}
            zIndex={10}
            _after={{
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              w: "full",
              h: "30%",
              bg: useColorModeValue("teal.100", "teal.900"),
              zIndex: -1,
            }}
          >
            <NextLink href="/">Tokenized Crowdfunding</NextLink>
          </Box>
        </Heading>
      </Container>
    </Box>
  );
}
