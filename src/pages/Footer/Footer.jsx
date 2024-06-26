import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {Image,Container,Box,HStack,Button,Text,Heading,Input} from '@chakra-ui/react'



const Footer = () => {

  
  return (
    <div style={{backgroundColor:"black",bottom:"0"}} >
        
        <div>

      <Image src="https://www.questlabs.ai/assets/brandLogo-_2OygUFf.png"/>
     <p style={{color:"white"}} >Quest Labs INC</p>
        </div>



  <div style={{
     display: 'grid',
     gridTemplateColumns:' 1fr 1fr 1fr',
     gap: '20px',
     padding: '20px'
  }} >

<div className='child' style={{
   backgroundColor: 'black',
   padding: '20px',
   color:"white",
 
}}  >
  <Heading>Resource</Heading>
  <Link to="https://www.questlabs.ai/blog" style={{  margin: '5px 0'}} >Blog</Link><br />
  <Link to="https://questlabs.substack.com/" style={{  margin: '5px 0'}} >Newsletter</Link><br />
  <Link to="https://www.questlabs.ai/playbook" style={{  margin: '5px 0'}} >Playbok</Link><br />
  <Link to="https://docs.questlabs.ai/" style={{  margin: '5px 0'}} > Docs</Link>
</div>


<div className='child' style={{
   backgroundColor: 'black',
   padding: '20px',
   color:"white"

}}  >
  <Heading>Support</Heading>
  <Link to="https://www.questlabs.ai/" style={{  margin: '5px 0'}} >Contact</Link><br />
  <Link to="https://questclub.slack.com/join/shared_invite/zt-ebi0c2iu-GVGvE29oR6XqSUix__amMA" style={{  margin: '5px 0'}} >Join Quest Club</Link><br />
  <Link to="https://www.questlabs.ai/sales-partner" style={{  margin: '5px 0'}} >Sales Partner</Link>
 
</div>


<div className='child' style={{
   backgroundColor: 'black',
   padding: '20px',
   color:'white'
}}  >
  <Heading>Legal</Heading>
  <Link to="https://fantasy-straw-747.notion.site/Privacy-Policy-35181181657242afbdd2a9af69e37dfe" style={{  margin: '5px 0'}} >Privacy Policy</Link><br />
  <Link to="https://fantasy-straw-747.notion.site/Terms-and-Conditions-8c70d24a63a6419781475ca8325f2c60" style={{  margin: '5px 0'}} >Terms of Use</Link><br />
  <Link to="https://fantasy-straw-747.notion.site/Cookie-Policy-403ac2547a7543a8812f64387d69798f" style={{  margin: '5px 0'}} >Cookie Policy</Link>
 
</div>


<p style={{color:"white"}} >© 2024 Quest Labs INC. All rights reserved.</p>
  </div>

    </div>
  )
}

export default Footer
