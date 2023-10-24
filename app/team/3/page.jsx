import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import { PiInstagramLogo, PiLinkedinLogo, PiLinkedinLogoDuotone, PiNavigationArrow, PiPhoneCallDuotone, PiTwitterLogo, PiTwitterLogoDuotone, PiVoicemailDuotone} from 'react-icons/pi'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'
import Circle from 'funuicss/ui/specials/Circle'

export default function Section1() {
    const team = [
        {
            name:"John Deo" ,
            position:"Co-Founder / CEO" ,
            profile:"/components_images/team/square/john.jpg",
            about:"Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus"
        },
        {
            name:"Mary Bell" ,
            position:"Frontend Developer" ,
            profile:"/components_images/team/square/mary.jpg",
            about:"Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. "
        },
        {
            name:"Alicia Jane" ,
            position:"Business Relations" ,
            profile:"/components_images/team/square/jane.jpg",
            about:"Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus"
        },
        {
            name:"Vincert Peter" ,
            position:"Principal Designer" ,
            profile:"/components_images/team/square/peter.jpg",
            about:"Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus"
        } ,
    ]
  return (
    <Div  padding='1rem 2rem'>
            <Section gap={3} funcss="padding hr">
            <Text
            text="Our Team"
            heading='h2'
            bold
            block
            />
            <Section />
            <Text
            text="We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients."
            block
            color="dark400"
            funcss='width-500-max'
            />
            </Section>
            <Div > 
           <Grid>
          {
            team && 
            team.map(res => (
                <Col sm={12} md={12} lg={6} funcss='padding section' key={res.name}>
                <RowFlex gap={2} alignItems='flex-start'>
                <img src={res.profile} className=' roundEdge width-300-max scale-up' />
                 <Div>
                <Text 
                text={res.name}
                bold 
                />
                <Section />
                <Text 
                text={res.position}
                color='dark200'
                />
                <Section />
                <Text 
                text={res.about}
                color='dark400'
                article
                />
                <Section gap={1.5}/>
                <RowFlex gap={1}>
                    <Circle size={2.5} bg='dark800' funcss='text-dark200'>
                        <PiTwitterLogo />
                    </Circle>
                    <Circle size={2.5} bg='dark800' funcss='text-dark200'>
                        <PiLinkedinLogo />
                    </Circle>
                    <Circle size={2.5} bg='dark800' funcss='text-dark200'>
                        <PiInstagramLogo />
                    </Circle>
                </RowFlex>
                 </Div>
                </RowFlex>
             </Col>
            ))
          }
           </Grid>
            </Div>
    </Div>
  )
}
