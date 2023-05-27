import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  return (
    <>
      <Box
        w={"100%"}
        h={"100vh"}
        bgSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundImage={
          "url(https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?w=740&t=st=1685090878~exp=1685091478~hmac=9dc5f235602db5cfc684f5770b5bab12eb0d120145799a6767c5c8fbef2b51aa)"
        }
      >
        <Center h={"100vh"} w={["90%", "100%"]}>
          <Flex
            align={"center"}
            justify={"center"}
            gap={"6"}
            direction={"column"}
          >
            <Text
              color={"white"}
              fontWeight={"extrabold"}
              fontSize={["xl", "3xl", "5xl"]}
              fontFamily={"sans-serif"}
              size={"xl"}
            >
              Dont have your resume and Need it Urgent ?
            </Text>
            <Text
              fontWeight={"extrabold"}
              fontSize={["md", "lg", "3xl"]}
              color={"whiteAlpha.800"}
              fontFamily={"sans-serif"}
            >
              Do you have Your Github Account ?
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              direction={"row"}
              width={"80%"}
              gap={"7"}
            >
              <Input
                placeholder="Enter Github Username"
                width={["30%", "40%", "50%"]}
                height={["50px", "55px", "60px"]}
                color={"white"}
                backgroundColor={"whiteAlpha.200"}
                backdropBlur={"40px"}
                borderColor={"whiteAlpha.300"}
                _outline={{ borderColor: "whiteAlpha.300" }}
                focusBorderColor="whiteAlpha.200"
                _placeholder={{ color: "whiteAlpha.400", fontSize: "xl" }}
                _hover={{ borderColor: "whiteAlpha.400" }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Link href={{ pathname: `/projects`, query: { user: username } }}>
                <Button
                  width={["120px", "190px"]}
                  height={["50px", "60px"]}
                  borderRadius={"10px"}
                  color={"whiteAlpha.700"}
                  bgColor={"whiteAlpha.200"}
                  _hover={{ bgColor: "whiteAlpha.400" }}
                  backdropBlur={"40px"}
                  borderColor={"whiteAlpha.400"}
                  focusBorderColor="whiteAlpha.200"
                  fontSize={["xs", "xl"]}
                  onClick={() => console.log(username)}
                >
                  Get Your Resume
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
