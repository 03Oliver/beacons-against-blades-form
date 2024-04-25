import { Box, Flex, FormControl, FormLabel, Input, Select, Button, Heading, Text } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Box bgGradient="linear(to-r, blue.100, blue.300)" minH="100vh" p={4}>
      <Flex align="center" justify="center" h="100vh">
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
          <Heading mb={6} textAlign="center">
            Beacons Against Blades
          </Heading>
          <Text mb={4} fontSize="lg" textAlign="center">
            Application Form
          </Text>
          <form action="https://formsubmit.co/2a1c0dcb2462e2fd543a1e589aa91e99" method="POST">
            <FormControl id="full-name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Enter Full Name" name="FullName"/>
            </FormControl>
            <FormControl id="email" mt={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter Email" name="email"/>
            </FormControl>
            <FormControl id="phone" mt={4} isRequired>
              <FormLabel>Phone</FormLabel>
              <Input type="tel" placeholder="Enter Phone" name="tel"/>
            </FormControl>
            <FormControl id="interest" mt={4} isRequired>
              <FormLabel>Select Interest</FormLabel>
              <Select placeholder="Select option" name="interest">
                <option>I am looking for mentorship and opportunities</option>
                <option>I am looking to donate time or activities</option>
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="blue" mt={4} w="full" rightIcon={<FaPaperPlane />}>
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
