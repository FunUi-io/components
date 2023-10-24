import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'


export default function Section1() {
  return (
    <Div margin="5rem 0">
        <Grid>
            <Col sm={12} md={5} lg={5} funcss="padding ">
    <Container >
            <Text
            text="Get in touch"
            bold
            block
            heading='h3'
            />
            <Section />
            <Text
            text="Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna."
            block
            color="dark400"
            />
    </Container>
            </Col>
            <Col sm={12} md={7} lg={7} funcss="padding"> 
             <Grid>
                <Col sm={12} md={6} lg={6} funcss='padding'>
                    <Div funcss='dark900 padding-30 round-edge '>
                        <Text
                        text='Collaborate'
                        color='dark'
                        bold 
                        />
                        <Section gap={1}/>
                        <Text 
                        text='collaborate@example.com'
                        color='primary'
                        block
                        />
                     <Section />
                        <Text 
                        text='+1 (555) 905-2345'
                        color='dark300'
                        block
                        />
                    </Div>
                </Col>
                <Col sm={12} md={6} lg={6} funcss='padding'>
                    <Div funcss='dark900 padding-30 round-edge '>
                        <Text
                        text='Press'
                        color='dark'
                        bold 
                        />
                        <Section gap={1}/>
                        <Text 
                        text='Press@example.com'
                        color='primary'
                        block
                        />
                     <Section />
                        <Text 
                        text='+1 (555) 905-2345'
                        color='dark300'
                        block
                        />
                    </Div>
                </Col>
                <Col sm={12} md={6} lg={6} funcss='padding'>
                    <Div funcss='dark900 padding-30 round-edge '>
                        <Text
                        text='Join our join'
                        color='dark'
                        bold 
                        />
                        <Section gap={1}/>
                        <Text 
                        text='careers@example.com'
                        color='primary'
                        block
                        />
                     <Section />
                        <Text 
                        text='+1 (555) 905-2345'
                        color='dark300'
                        block
                        />
                    </Div>
                </Col>
                <Col sm={12} md={6} lg={6} funcss='padding'>
                    <Div funcss='dark900 padding-30 round-edge '>
                        <Text
                        text='Say Hello'
                        color='dark'
                        bold 
                        />
                        <Section gap={1}/>
                        <Text 
                        text='hello@example.com'
                        color='primary'
                        block
                        />
                     <Section />
                        <Text 
                        text='+1 (555) 905-2345'
                        color='dark300'
                        block
                        />
                    </Div>
                </Col>
                
             </Grid>
            </Col>
        </Grid>
    </Div>
  )
}
