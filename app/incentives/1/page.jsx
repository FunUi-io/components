'use client'
import React from 'react'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Section from 'funuicss/ui/specials/Section'
export default function Section1() {
  return (
    <Grid>
    <Col sm={12} md={4} lg={4} funcss='padding-20 text-center width-400-max center'>
        <img src='/components_images/icon-delivery.svg' className='width-100'/>
        <Section />
        <Text 
        text='Fast Delivery'
        bold
        color='primary'
        />
        <Section />
        <Text 
        text={"It's not actually free we just price it into the products. Someone's paying for it, and it's not us."}
        color='dark400'
        />
    </Col>
    <Col sm={12} md={4} lg={4} funcss='padding-20 text-center width-400-max center'>
        <img src='/components_images/icon-chat.svg' className='width-100'/>
        <Section />
        <Text 
        text='24/7 Customer Support'
        bold
        color='primary'
        />
        <Section />
        <Text 
        text={"Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate."}
        color='dark400'
        />
    </Col>
    <Col sm={12} md={4} lg={4} funcss='padding-20 text-center width-400-max center'>
        <img src='/components_images/icon-fast-checkout.svg' className='width-100'/>
        <Section />
        <Text 
        text='Fast Shopping Cart'
        bold
        color='primary'
        />
        <Section />
        <Text 
        text={"Look how fast that cart is going. What does this mean for the actual experience? I don't know."}
        color='dark400'
        />
    </Col>
  </Grid>
)
}
