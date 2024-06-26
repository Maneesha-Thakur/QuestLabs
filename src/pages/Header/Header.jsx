

import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {Box, Heading ,Input,Button,Image} from '@chakra-ui/react'

const Header = () => {

  const [email, setEmail] = useState('');
  return (
    <div >
      

      <Box backgroundColor='#2c3227' padding='20px' w="100%" >
        <Heading color='white' w='100%' textAlign='center' p='1rem' mt='1rem' fontSize='40px'   >
          Transform Your Product with <br />Intelligent In-App Experiences
        </Heading>
        
      <p  style={{ color: 'white', marginTop: '1rem', padding: '0 1rem', marginLeft:'390px',fontSize:'20px', }}>
        Empower growth & Marketing Teams to Boost Engagement and conversion <br /> 10x faster without data or engineering team 

      </p>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your mail address'
        ml='500px'
        p='15px'
        w='300px'
        borderRadius='10px'
        bg='gray.700'
        color='white'
      />
     
      <Button bg='blue' p='15px' borderRadius='10px' >
        <Link to="https://calendly.com/shubham-quest/chat" style={{textDecoration:'none' ,color:"white" }} >
        Book Demo
        </Link>
        </Button> 
<p style={{color:'white',marginLeft:'650px'}} >No credit card required</p>

      </Box>

      <Box bg='indigo'>
        <br /><br /><br /><br />
        <Image src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg" ml='200px' />
      </Box>

<Box bg='black' w="100%" color='white' paddingTop='70px' >
  <Heading fontSize="35px" color='white' ml='400px' >AI-Driven Personalized UI</Heading>

  <p style={{marginLeft:'100px',fontSize:"20px",color:'gray'}} >Enhance your app with AI-driven personalized UI, seamlessly integrated with your data stack for a tailored user experience</p>

  <Box 
      bg='black' 
      m='100px' 
      w='40%' 
      h='100px' 
      ml='400px' 
      border='1px solid gray' 
      display='flex' 
      alignItems='center' 
      justifyContent='center'
      borderRadius="20px"
    >
      <Image ml='10px' mr='10px' w='30px' src='https://www.questlabs.ai/assets/snowflack-X_nYrDCM.svg' />
      <Image w='30px' mr='10px' src='https://www.questlabs.ai/assets/AMPL-MScmEe7Q.svg' />
      <Image mr='10px' w='30px' src='https://www.questlabs.ai/assets/AMPL-MScmEe7Q.svg' />
      <Image mr='10px' w='50px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVzCFZqs7ofvJ28-w_9EXjTQa9I836ul0FA&s' />
      <Image mr='10px' w='30px' src='https://www.questlabs.ai/assets/segmentIcon-18JVZ7QZ.svg' />
      <Image mr='10px' w='30px' src='https://www.questlabs.ai/assets/firebase-gDRaRdGY.svg' />
      <Image mr='10px' w='30px' src='https://www.questlabs.ai/assets/firebase-gDRaRdGY.svg' />
      <Image w='30px' src='https://www.questlabs.ai/assets/stack-MxdB7c0M.svg' />
<br />

    </Box>
<Box> 
  <Button bg='black' color='white' border='1px solid whitesmoke' mb="180px" ml='400px' > 📋 AI Segmentation </Button>
   

   <Image   src="https://www.questlabs.ai/assets/logoWithLines-L5NiNPgQ.svg" />
  <Button bg='black' color='white' border='1px solid whitesmoke' mb="180px"  ml='' > 📋 Design Agents </Button>
  



<Button 
        position="absolute" 
        
        left="400px" 
        mb="100px"
        border="1px solid white"
        mt='170px'
        bg='black'
        color='white'
        >
  📠Analytics and insight
</Button>

<Button bottom='280px' ml='850px'mb='100px' mt='170px' bg='black' color='white' border='1px solid white' >🃏AI Growth competition</Button>
<br /><br />
<Box display="flex" alignItems="center" justifyContent="center" mt="20px">
      <Image src='https://www.questlabs.ai/assets/prod1-zH-HEurn.svg' alt='Product 1' mx="10px"/>
      <Image src='https://www.questlabs.ai/assets/prod2-9HJtgJO1.svg' alt='Product 2' mx="10px"/>
      <Image src='https://www.questlabs.ai/assets/product3-JMywLrns.svg' alt='Product 3' mx="10px"/>
      <Image src='https://www.questlabs.ai/assets/prod4-D2yWThr4.svg' alt='Product 4' mx="10px"/>
    </Box>
        </Box> 


</Box>


    </div>
  )
}

export default Header
