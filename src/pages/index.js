import { Box, Button, Center, Flex, Heading, Input } from "@chakra-ui/react";

export default function Home() {
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
        <Center h={"100vh"} w={"100%"}>
          <Flex
            align={"center"}
            justify={"center"}
            gap={"6"}
            direction={"column"}
          >
            <Heading
              as={"h1"}
              color={"white"}
              fontFamily={"sans-serif"}
              size={"xl"}
            >
              Dont have your resume and Need it Urgent ?
            </Heading>
            <Heading as={"h1"} color={"white"} fontFamily={"sans-serif"}>
              Do you have Your Github Account ?
            </Heading>
            <Flex
              align={"center"}
              justify={"center"}
              direction={"row"}
              width={"80%"}
              gap={"7"}
            >
              <Input
                placeholder="Enter Github Username"
                width={"40%"}
                height={"50px"}
                color={"white"}
                backgroundColor={"whiteAlpha.200"}
                backdropBlur={"40px"}
                borderColor={"whiteAlpha.300"}
                _outline={{ borderColor: "whiteAlpha.300" }}
                focusBorderColor="whiteAlpha.200"
                _placeholder={{ color: "whiteAlpha.400" }}
              />
              <Button
                width={"150px"}
                height={"50px"}
                borderRadius={"10px"}
                color={"white"}
                bgColor={"whiteAlpha.200"}
                _hover={{ bgColor: "whiteAlpha.400" }}
                backdropBlur={"40px"}
                borderColor={"whiteAlpha.400"}
                focusBorderColor="whiteAlpha.200"
              >
                Get Your Resume
              </Button>
            </Flex>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
