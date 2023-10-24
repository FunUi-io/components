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

<Div funcss='padding-20 margin-top-50 center text-center' maxWidth="700px" >
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
             <RowFlex gap={1} justify="center">
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
   
</Div>
</Div>      
  )
}
