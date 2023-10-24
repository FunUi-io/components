import { CiMenuBurger } from "react-icons/ci"; 
import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Section from 'funuicss/ui/specials/Section'
import Button from 'funuicss/ui/button/Button'
import Container from 'funuicss/ui/container/Container'
import Link from 'next/link'
import AppBar from 'funuicss/ui/appbar/AppBar'
import BreadCrumb from 'funuicss/ui/breadcrumb/BreadCrumb'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import { PiArrowLeft, PiArrowRight } from 'react-icons/pi'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
export default function Section1() {
  return (
        <Div>
        <AppBar 
          funcss='padding-40'
 left = {
    <img src='/logo.png' className='width-100'/>
 }
 center={
   <RowFlex gap={2}>
     <Link className="text-dark-200 hover-text-primary"  href={"#"}>
         product
     </Link>
     <Link className="text-dark-200 hover-text-primary"  href={"#"}>
         Marketplace
     </Link>
     <Link className="text-dark-200 hover-text-primary"  href={"#"}>
         Company
     </Link>
     <Link className="text-dark-200 hover-text-primary"  href={"#"}>
         Features
     </Link>
   </RowFlex>
 }
 right={
   <RowFlex gap={0.4}>
     <Button text="Sign Up" raised bg="primary" small  rounded/>
     <BreadCrumb type='straight'/>
     <Button text="Sign In" small funcss="text-bold" color="primary"/>
   </RowFlex>
 }
sidebarTrigger={<CiMenuBurger />}
 />

<Div funcss='padding-20'>
<Grid align='center'>
        <Col sm={12} md={12} lg={6} funcss='padding'>
            <Button
            startIcon={
                <Text 
                text='Anim aute id magna aliqusunt. '
                color='dark400'
                />
            }
            text='Read More'
            color='primary'
            bg='dark600'
            rounded
            endIcon={<span><PiArrowRight /></span>}
            outlined
            />
            <Section  gap={2} />
            <Text
            text='Data to enrich your online business'
            size='bigger'
            bold
            />
            <Section  gap={2} />
            <Text
            text='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
            article
            />
             <Section  gap={3} />
             <RowFlex gap={1}>
                <Button 
                text='Getting Started'
                raised
                bg='primary'
                />
                <Button 
                text='Learn more'
                endIcon={<PiArrowRight />}
                color='primary'
                funcss='text-bold'
                />
             </RowFlex>
        </Col>
        <Col sm={12} md={5} lg={6} funcss='padding-20 hide-medium-down' >
          <img src='/components_images/team/square/jane.jpg' className='fit round-edge scale-up'/>
        </Col>
       </Grid>
</Div></Div>      
  )
}
