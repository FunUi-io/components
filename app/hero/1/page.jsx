import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Section from 'funuicss/ui/specials/Section'
import Button from 'funuicss/ui/button/Button'
import Container from 'funuicss/ui/container/Container'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import { PiArrowRight } from 'react-icons/pi'
export default function Section1() {
  return (
    <FullCenteredPage >

 <Grid align='center'>
        <Col sm={12} md={12} lg={7} funcss='padding'>
            <Container>
            <img src='/logo.png' className='width-100'/>
            <Section gap={2} />
            <Button
            startIcon={
                <Text 
                text='Anim aute id magna aliqua ad ad non deserunt sunt. '
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
            </Container>
        </Col>
        <Col sm={12} md={5} lg={5} funcss='hide-medium-down' >
            <Div 
            minHeight='100vh'
            customStyle={{
                backgroundImage:"url('/components_images/team/jane.jpg')", 
            backgroundSize:"cover"}} />

        </Col>
       </Grid>
      
    </FullCenteredPage>
  )
}
