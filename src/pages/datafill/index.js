import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Flex,
  Input,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import Link from "next/link";

export default function Home({ user }) {
  const username = user;

  // collecting data from github api and storing it in state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    getRepos();
    getUserData();
  });

  // using octokit to get repos and user data
  async function getUserData() {
    const octokit = new Octokit({
      auth: process.env.GITHUB_API_KEY,
    });
    const data = await octokit.request("GET /users/{username}", {
      username: username,
    });
    // .then((response) => {
    //   console.log(response.data);
    //   setUserData(response.data);
    //   setLoading(false);
    // });
    await setUserData(data.data);
    await setLoading(false);
  }

  function getRepos() {
    const octokit = new Octokit({
      auth: process.env.GITHUB_API_KEY,
    });
    octokit
      .request("GET /users/{username}/repos", {
        username: username,
      })
      .then((response) => {
        setData(response.data);
      });
  }

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
        p={"8"}
        overflow={"scroll"}
        gap={"40px"}
      >
        <Center p={"5"}>
          <Heading fontSize={"6xl"} textColor={"white"}>
            Fill Your Data
          </Heading>
        </Center>
        <Center p={"5"}>
          <Heading fontSize={"3xl"} textColor={"white"}>
            Select Projects
          </Heading>
        </Center>

        <Center w={["90%", "100%"]} p={"5"}>
          <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={"10"}>
            {!loading &&
              data.map((item) => (
                <GridItem
                  backgroundColor={
                    selected.includes(item.name)
                      ? "whiteAlpha.400"
                      : "whiteAlpha.200"
                  }
                  backdropBlur={"40px"}
                  p={"4"}
                  borderRadius={"lg"}
                  key={item.name}
                  _hover={{
                    backgroundColor: "whiteAlpha.300",
                    shadow: "xl",
                  }}
                  transition={"all 0.3s ease"}
                  cursor={"pointer"}
                  onClick={() => {
                    if (selected.includes(item.name)) {
                      console.log("removing");
                      setSelected(selected.filter((i) => i !== item.name));

                      console.log("removed");
                    } else {
                      console.log("adding");
                      if (selected.length >= 3)
                        return alert("You can only select 3 projects");
                      setSelected([...selected, item.name]);
                      console.log("added");
                    }
                  }}
                >
                  <Text fontSize={"2xl"} color={"white"} fontWeight={"bold"}>
                    {item.name && item.name.length > 9
                      ? item.name.substring(0, 30) + "..."
                      : item.name}
                  </Text>
                  <Text color={"whiteAlpha.600"}>
                    {item.description && item.description.length > 30
                      ? item.description.substring(0, 30) + "..."
                      : item.description}
                  </Text>
                </GridItem>
              ))}
            {loading && (
              <Text fontSize={"3xl"} color={"white"} fontWeight={"bold"}>
                Loading...
              </Text>
            )}
          </Grid>
        </Center>
        {/* <Center p={"40px"}>
          <Link
            href={{
              pathname: `info`,
            }}
          >
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
              onClick={() => console.log("clicked")}
            >
              Submit
            </Button>
          </Link>
        </Center> */}
        {!loading && (
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            w={"100%"}
            gap={"10"}
            marginTop={"100px"}
          >
            <Heading fontSize={"3xl"} textColor={"white"}>
              Enter Your Details
            </Heading>
            <Flex
              w={"60%"}
              direction={"column"}
              gap={"40px"}
              backgroundColor={"whiteAlpha.200"}
              p={"10"}
              borderRadius={"lg"}
              backdropBlur={"40px"}
              borderColor={"whiteAlpha.400"}
              border={"3px solid whiteAlpha.700"}
              _hover={{
                borderColor: "whiteAlpha.500",
                shadow: "xl",
              }}
            >
              <Stack gap={"1"} w={"100%"} justify={"center"} align={"center"}>
                <FormLabel color={"whiteAlpha.700"} fontSize={"2xl"}>
                  Name
                </FormLabel>
                <Input
                  placeholder={"Enter Name"}
                  width={["60%", "60%", "70%"]}
                  height={["50px", "55px", "60px"]}
                  color={"white"}
                  backgroundColor={"whiteAlpha.200"}
                  backdropBlur={"40px"}
                  borderColor={"whiteAlpha.300"}
                  _outline={{ borderColor: "whiteAlpha.300" }}
                  focusBorderColor="whiteAlpha.200"
                  _placeholder={{ color: "white", fontSize: "xl" }}
                  _hover={{ borderColor: "whiteAlpha.400" }}
                  onChange={(e) => setName(e.target.value)}
                />
              </Stack>

              <Stack gap={"1"} w={"100%"} justify={"center"} align={"center"}>
                <FormLabel color={"whiteAlpha.700"} fontSize={"2xl"}>
                  Email{" "}
                </FormLabel>
                <Input
                  placeholder={"Enter Email"}
                  width={["60%", "60%", "70%"]}
                  height={["50px", "55px", "60px"]}
                  color={"white"}
                  backgroundColor={"whiteAlpha.200"}
                  backdropBlur={"40px"}
                  borderColor={"whiteAlpha.300"}
                  _outline={{ borderColor: "whiteAlpha.300" }}
                  focusBorderColor="whiteAlpha.200"
                  _placeholder={{ color: "white", fontSize: "xl" }}
                  _hover={{ borderColor: "whiteAlpha.400" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Stack>

              <Stack gap={"1"} w={"100%"} justify={"center"} align={"center"}>
                <FormLabel
                  color={"whiteAlpha.700"}
                  fontSize={"2xl"}
                  justify={"left"}
                >
                  Bio{" "}
                </FormLabel>
                <Input
                  value={userData.bio}
                  width={["60%", "60%", "70%"]}
                  height={["50px", "55px", "60px"]}
                  color={"white"}
                  backgroundColor={"whiteAlpha.200"}
                  backdropBlur={"40px"}
                  borderColor={"whiteAlpha.300"}
                  _outline={{ borderColor: "whiteAlpha.300" }}
                  focusBorderColor="whiteAlpha.200"
                  _placeholder={{ color: "white", fontSize: "xl" }}
                  _hover={{ borderColor: "whiteAlpha.400" }}
                  onChange={(e) => setBio(e.target.value)}
                />
              </Stack>
              <Center>
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
                  onClick={() => console.log("clicked")}
                >
                  Submit
                </Button>
              </Center>
            </Flex>
          </Flex>
        )}
      </Box>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { user } = query;
  return { user };
};
