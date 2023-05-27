import { Box, Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";

export default function Home({ user }) {
  const username = user;
  // get repos from octokit
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getRepos();
  });
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
        setLoading(false);
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
      >
        <Center p={"5"} fontSize={"8xl"}>
          <Heading textColor={"white"}>Select Projects</Heading>
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
                  }}
                  transition={"all 0.3s ease"}
                  cursor={"pointer"}
                  onClick={() => {
                    if (selected.includes(item.name)) {
                      setSelected(selected.filter((i) => i !== item.name));
                    } else {
                      setSelected([...selected, item.name]);
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
              <GridItem
                backgroundColor={"whiteAlpha.400"}
                p={"4"}
                borderRadius={"lg"}
              >
                <Text fontSize={"3xl"} color={"white"} fontWeight={"bold"}>
                  Loading...
                </Text>
              </GridItem>
            )}
          </Grid>
        </Center>
      </Box>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { user } = query;
  return { user };
};
