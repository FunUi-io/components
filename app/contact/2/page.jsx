import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import { PiNavigationArrow, PiPhoneCallDuotone, PiVoicemailDuotone} from 'react-icons/pi'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'

export default function Section1() {
  return (
    <Div margin="5rem 0" funcss='blueGray900' >
        <Grid>
            <Col sm={12} md={6} lg={6} funcss="padding-20 blueGray800">
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
            color="dark800"
            />
            <Section gap={3} />
            <List gap={1}>
                <ListItem>
                    <RowFlex gap={1}>
                        <Button
                        text={<PiNavigationArrow />}
                        width='2.5rem'
                        height='2.5rem'
                        bg='blueGray900'
                        raised
                        />
                        <Text 
                        text='Chicago, IL 99191'
                        color='dark800'
                        />
                    </RowFlex>
                </ListItem>
                <ListItem>
                    <RowFlex gap={1}>
                        <Button
                        text={<PiPhoneCallDuotone />}
                        width='2.5rem'
                        height='2.5rem'
                        bg='blueGray900'
                        raised
                        />
                        <Text 
                        text='+1 (555) 234-5678'
                        color='dark900'
                        />
                    </RowFlex>
                </ListItem>
                <ListItem>
                    <RowFlex gap={1}>
                        <Button
                        text={<PiVoicemailDuotone />}
                        width='2.5rem'
                        height='2.5rem'
                        bg='blueGray900'
                        color='dark900'
                        raised
                        />
                        <Text 
                        text='abdulwahabiddris08@gmail.com'
                        color='dark900'
                        />
                    </RowFlex>
                </ListItem>
            </List>
    </Container>
            </Col>
            <Col sm={12} md={6} lg={6} funcss="padding-20"> 
                <Div maxWidth='500px' funcss='center'>

          <Section gap={1.5}>
          <RowFlex gap={2}>
            <Col >
            <Text text="First Name" block bold size="small" color="dark700" funcss="margin-bottom-10" />
            <Input funcss='blueGray800 text-dark800' rounded bordereless fullWidth  />
            </Col>
            <Col  > 
            <Text text="Last Name" block bold size="small" color="dark700" funcss="margin-bottom-10" />
            <Input funcss='blueGray800 text-dark800' rounded bordereless fullWidth  />
            </Col>
          </RowFlex>
          </Section>
          <Section gap={1.5}>
            <Text text="Email" block bold size="small" color="dark700" funcss="margin-bottom-10" />
            <Input funcss='blueGray800 text-dark800' rounded bordereless type="email" fullWidth  />
          </Section>
          <Section gap={1.5}>
            <Text text="Message" block bold size="small" color="dark700" funcss="margin-bottom-10" />
            <Input funcss='blueGray800 text-dark800' rounded bordereless multiline rows={3} fullWidth  />
          </Section>
          <Section gap={1.5}>
          <Div funcss="text-right">
          <Button
           text="Submit"
           raised 
           bg="primary"
           funcss='width-50-p'
           />
          </Div>
          </Section>
          </Div>

            </Col>
        </Grid>
    </Div>
  )
}
