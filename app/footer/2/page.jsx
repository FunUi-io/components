import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Section from 'funuicss/ui/specials/Section'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Circle from 'funuicss/ui/specials/Circle'
import { PiFacebookLogo, PiGithubLogo, PiInstagramLogo, PiTwitchLogo, PiYoutubeLogo } from 'react-icons/pi'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'
import Link from 'next/link'
export default function Page() {
  return (
    <Div padding='4rem 3rem' funcss='blueGray900 text-dark800' >
        <Grid>
            <Col sm={12} md={12} lg={4} funcss='padding'>
                <img src="/logo.png" className='width-100' alt="" />
                <Section gap={1.5} />
                <Text
                text='Making the world a better place through self eduction and programming.'
                body
                color='dark600'
                />
                <Section gap={2}/>
                <RowFlex gap={1}>
                    <Circle size={2.5} bg='dark200' funcss='text-dark600 hover-text-dark800 hover-up'>
                       <PiFacebookLogo size={20} />
                    </Circle>
                    <Circle size={2.5} bg='dark200' funcss='text-dark600 hover-text-dark800 hover-up'>
                       <PiGithubLogo size={20} />
                    </Circle>
                    <Circle size={2.5} bg='dark200' funcss='text-dark600 hover-text-dark800 hover-up'>
                       <PiInstagramLogo size={20} />
                    </Circle>
                    <Circle size={2.5} bg='dark200' funcss='text-dark600 hover-text-dark800 hover-up'>
                       <PiYoutubeLogo size={20} />
                    </Circle>
                    <Circle size={2.5} bg='dark200' funcss='text-dark600 hover-text-dark800 hover-up'>
                       <PiTwitchLogo size={20} />
                    </Circle>
                </RowFlex>
            </Col>
            <Col sm={6} md={6} lg={2} funcss='padding'>
                <Text
                text='Support'
                color='text-dark100'
                bold
                />
                <Section gap={2}/>
                <List gap={1}>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Marketing</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Analytics</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Commerce</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Insight</div>
                        </Link>
                    </ListItem>
                </List>
            </Col>
            <Col sm={6} md={6} lg={2} funcss='padding'>
                <Text
                text='Company'
                color='text-dark100'
                bold
                />
                <Section gap={2}/>
                <List gap={1}>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Status</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Pricing</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Documentation</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Guides</div>
                        </Link>
                    </ListItem>
                </List>
            </Col>
            <Col sm={6} md={6} lg={2} funcss='padding'>
                <Text
                text='Solutions'
                color='text-dark100'
                bold
                />
                <Section gap={2}/>
                <List gap={1}>
                    <ListItem>
                        <Link href={"#"}>
                       <div>About</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Blog</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Press</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Partners</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Jobs</div>
                        </Link>
                    </ListItem>
                </List>
            </Col>
            <Col sm={6} md={6} lg={2} funcss='padding'>
                <Text
                text='Legal'
                color='text-dark100'
                bold
                />
                <Section gap={2}/>
                <List gap={1}>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Claim</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Privacy</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Terms</div>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"#"}>
                       <div>Conditions</div>
                        </Link>
                    </ListItem>
                </List>
            </Col>
        </Grid>
    </Div>
  )
}
