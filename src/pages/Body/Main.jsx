import { Box, Heading, Image, Flex, HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Main = () => {
  return (
    <div style={{ backgroundColor: "black", padding: "20px" }}>
      <Box>
        <br /><br /><br />
        <Heading color="white" ml={{ base: '20px', md: '200px', lg: '400px' }} fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Deliver Delightful In-App Experience that Drive <br /> Adoption, Engagement & Retention
        </Heading>
        <Text color="gray" ml={{ base: '20px', md: '200px', lg: '400px' }} mt="10px">
          50+ Pre-Built In-app Components to get started within minutes
        </Text>

        <Image ml={{ base: '10px', md: '50px', lg: '100px' }} w={{ base: '90%', md: '80%', lg: '1000px' }} src='https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg' />

        <Box>
          <Heading color='white' ml={{ base: '20px', md: '150px', lg: '300px' }} fontSize={{ base: '20px', md: '25px', lg: '30px' }} mt='100px'>
            Let our AI find the best ways to <br /> engage & convert your users
          </Heading>
          <Text color="gray" ml={{ base: '20px', md: '150px', lg: '300px' }} mt="10px">
            Generate Personalized In-App Text, Image, UI at Scale for Millions of Users without engineering team
          </Text>

          <Flex direction={{ base: 'column', lg: 'row' }} alignItems="center" mt="20px">
            <Image src="https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg" w={{ base: '90%', lg: '50%' }} mb={{ base: '20px', lg: '0' }} />
            <Box textAlign={{ base: 'center', lg: 'left' }} ml={{ lg: '20px' }}>
              <Heading as="h2" color='white' fontSize={{ base: '18px', lg: '20px' }}>
                AI generated mini-segments to target <br /> inactive users
              </Heading>
              <Text color='gray' mt="10px">
                Our analytical models find common traits for users that are not active <br /> and create thousands of segments to activate them.
              </Text>
            </Box>
          </Flex>

          <Flex direction={{ base: 'column', lg: 'row' }} alignItems="center" mt="20px">
            <Box textAlign={{ base: 'center', lg: 'left' }} mr={{ lg: '20px' }}>
              <Heading as="h2" color='white' fontSize={{ base: '18px', lg: '20px' }}>
                Our models generate AI <br /> variants to optimize text, <br /> images, and UI layouts for <br /> each segment.
              </Heading>
              <Text color='gray' mt="10px">
                Easily find winning variants among millions of <br /> variants to power users across the customer <br /> journey.
              </Text>
            </Box>
            <Image src="https://www.questlabs.ai/assets/AiGenerate-JqljUpyB.svg" w={{ base: '90%', lg: '50%' }} mt={{ base: '20px', lg: '0' }} />
          </Flex>
        </Box>

        <Box ml={{ base: '20px', md: '200px', lg: '400px' }} mt='80px'>
          <Heading color='white' fontSize='20px'>FEATURES</Heading>
          <Heading color='white' fontSize='30px' mt="10px">Robust & Scalable Platform & SDK</Heading>
          <Text color="gray" mt="10px">Low-Code Dashboard, SDKs & APIs to drive product growth</Text>
          <br /><br />
          <Flex direction={{ base: 'column', lg: 'row' }} flexWrap="wrap">
            <Box flex={{ base: '0 0 100%', lg: '0 0 50%' }} maxWidth={{ base: '100%', lg: '50%' }}>
              <Image src="https://www.questlabs.ai/assets/image1-y7VvY8jh.svg" w="100%" h="auto" mb={{ base: '20px', lg: '0' }} />
            </Box>
            <Box flex={{ base: '0 0 100%', lg: '0 0 50%' }} maxWidth={{ base: '100%', lg: '50%' }}>
              <Image src="https://www.questlabs.ai/assets/image2-0qa_GPAl.svg" w="100%" h="auto" />
            </Box>
            <Box flex={{ base: '0 0 100%', lg: '0 0 33.33%' }} maxWidth={{ base: '100%', lg: '33.33%' }}>
              <Image src="https://www.questlabs.ai/assets/image3-m-7EaNFv.svg" w="100%" h="auto" mb={{ base: '20px', lg: '0' }} />
            </Box>
            <Box flex={{ base: '0 0 100%', lg: '0 0 33.33%' }} maxWidth={{ base: '100%', lg: '33.33%' }}>
              <Image src="https://www.questlabs.ai/assets/image4-HZbCJwM5.svg" w="100%" h="auto" mb={{ base: '20px', lg: '0' }} />
            </Box>
            <Box flex={{ base: '0 0 100%', lg: '0 0 33.33%' }} maxWidth={{ base: '100%', lg: '33.33%' }}>
              <Image src="https://www.questlabs.ai/assets/image5-67XH74ID.svg" w="100%" h="auto" />
            </Box>
          </Flex>
          <br /><br />
        </Box>

        <Box>
          <Flex direction={{ base: 'column', lg: 'row' }} alignItems="center" ml={{ base: '10px', lg: '30px' }} mt="40px">
            <VStack spacing="20px" mb="20px" w={{ base: '100%', lg: 'auto' }}>
              <Box border="1px solid gray" p={4} borderRadius="20px" w="100%">
                <Image w="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnVqU-oelLAB5xQpcKVPpuv4BOJGkGQ5FKg&s" />
                <Heading color="white" size="md" mt={2}>AI Personalization</Heading>
                <Text color="gray">AI-driven personalization enhances user engagement with unique experiences.</Text>
              </Box>

              <Box border="1px solid gray" p={4} borderRadius="20px" w="100%">
                <Image w="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnVqU-oelLAB5xQpcKVPpuv4BOJGkGQ5FKg&s" />
                <Heading color="white" size="md" mt={2}>AI Personalization</Heading>
                <Text color="gray">AI-driven personalization enhances user engagement with unique experiences.</Text>
              </Box>

              <Box border="1px solid gray" p={4} borderRadius="20px" w="100%">
                <Image w="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnVqU-oelLAB5xQpcKVPpuv4BOJGkGQ5FKg&s" />
                <Heading color="white" size="md" mt={2}>AI Personalization</Heading>
                <Text color="gray">AI-driven personalization enhances user engagement with unique experiences.</Text>
              </Box>
            </VStack>

            <VStack spacing="20px" mb="20px" w={{ base: '100%', lg: 'auto' }}>
              <Box border="1px solid gray" p={4} borderRadius="20px" w="100%">
                <Image w="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnVqU-oelLAB5xQpcKVPpuv4BOJGkGQ5FKg&s" />
                <Heading color="white" size="md" mt={2}>AI Personalization</Heading>
                <Text color="gray">AI-driven personalization enhances user engagement with unique experiences.</Text>
              </Box>

              <Box border="1px solid gray" p={4} borderRadius="20px" w="100%">
                <Image w="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnVqU-oelLAB5xQpcKVPpuv4BOJGkGQ5FKg&s" />
                <Heading color="white" size="md" mt={2}>AI Personalization</Heading>
                <Text color="gray">AI-driven personalization enhances user engagement with unique experiences.</Text>
              </Box>

              <Box border="1px solid gray" p={4} borderRadius="20px" w="100%">
                <Image w="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnVqU-oelLAB5xQpcKVPpuv4BOJGkGQ5FKg&s" />
                <Heading color="white" size="md" mt={2}>AI Personalization</Heading>
                <Text color="gray">AI-driven personalization enhances user engagement with unique experiences.</Text>
              </Box>
            </VStack>
          </Flex>
        </Box>
        
      </Box>
    </div>
  )
}

export default Main;