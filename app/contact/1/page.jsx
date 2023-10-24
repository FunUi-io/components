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
    <Div margin="5rem 0">
        <Grid>
            <Col sm={12} md={5} lg={5} funcss="padding br ">
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
            <Section gap={3} />
            <List gap={1}>
                <ListItem>
                    <RowFlex gap={1}>
                        <Button
                        text={<PiNavigationArrow />}
                        width='2.5rem'
                        height='2.5rem'
                        bg='violet700'
                        raised
                        />
                        <Text 
                        text='Chicago, IL 99191'
                        color='dark400'
                        />
                    </RowFlex>
                </ListItem>
                <ListItem>
                    <RowFlex gap={1}>
                        <Button
                        text={<PiPhoneCallDuotone />}
                        width='2.5rem'
                        height='2.5rem'
                        bg='violet500'
                        raised
                        />
                        <Text 
                        text='+1 (555) 234-5678'
                        color='dark400'
                        />
                    </RowFlex>
                </ListItem>
                <ListItem>
                    <RowFlex gap={1}>
                        <Button
                        text={<PiVoicemailDuotone />}
                        width='2.5rem'
                        height='2.5rem'
                        bg='violet400'
                        color='primary900'
                        raised
                        />
                        <Text 
                        text='abdulwahabiddris08@gmail.com'
                        color='dark400'
                        />
                    </RowFlex>
                </ListItem>
            </List>
            <Div funcss='hr show-small section'/>
    </Container>
            </Col>
            <Col sm={12} md={7} lg={7} funcss="padding"> 
                <Div maxWidth='500px' funcss='center'>

          <Section gap={1.5}>
          <RowFlex gap={2}>
            <Col >
            <Text text="First Name" block bold size="small" color="primary" funcss="margin-bottom-10" />
            <Input fullWidth bordered />
            </Col>
            <Col  > 
            <Text text="Last Name" block bold size="small" color="primary" funcss="margin-bottom-10" />
            <Input fullWidth bordered />
            </Col>
          </RowFlex>
          </Section>
          <Section gap={1.5}>
            <Text text="Email" block bold size="small" color="primary" funcss="margin-bottom-10" />
            <Input type="email" fullWidth bordered />
          </Section>
          <Section gap={1.5}>
            <Text text="Message" block bold size="small" color="primary" funcss="margin-bottom-10" />
            <Input multiline rows={3} fullWidth bordered />
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
