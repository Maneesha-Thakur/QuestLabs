import React from 'react';
import { Box, Button, Heading ,Input, textDecoration} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from '../pages/Header/Header';

const Navbar = () => {
  const links = [
    { name: 'Playbook', url: '/playbook' },
    { name: 'Resources', url: '/resources' },
    { name: 'Blogs', url: '/blogs' },
  ];

  return (
    <div>
      <nav style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '1rem', 
        backgroundColor: '#333', 
        position: 'sticky', 
        top: '0', 
        zIndex: '1000', 
        flexDirection: 'column' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Heading fontSize={32} color="white" mr={4}>Quest</Heading>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px', marginLeft: 'auto' }}>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} style={{ color: 'white', textDecoration: 'none' }}>{link.name}</a>
              </li>
            ))}
          </ul>
          <Button
            bg="black"
            color="white"
            ml="100px"
            mr='100px'
            p='10px'
            borderRadius='5px'
            boxShadow='0px 0px 10px 5px blue'
          >
            <Link to="https://app.questlabs.ai/login"  >
            Get Started
            </Link>
          </Button>
          <Button
            ml="10px"
            mr='50px'
            bg="blue"
            color="white"
            p="10px"
            borderRadius='5px'
          >
            <Link t0="https://calendly.com/shubham-quest/chat?month=2024-06" >
            Book Demo
            </Link>
          </Button>
        </div>
      </nav>
     <Header/>
    </div>
  );
}

export default Navbar;
