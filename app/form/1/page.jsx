import React from 'react'
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import {PiCaretRight} from 'react-icons/pi'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
export default function Section1() {
  return (
    <Div margin="5rem 0">
    <Container >
        <Grid>
            <Col sm={12} md={5} lg={5} funcss="padding">
            <Text
            text="Personal Information"
            bold
            block
            />
            <Section />
            <Text
            text="This information will be displayed publicly so be careful what you share."
            block
            color="dark400"
            />
            </Col>
            <Col sm={12} md={7} lg={7} funcss="padding">
          <Section gap={1}>
            <Text text="Username" block bold size="small" color="primary" funcss="margin-bottom-10" />
            <Input fullWidth bordered />
          </Section>
          <Section gap={1}>
            <Text text="Email" block bold size="small" color="primary" funcss="margin-bottom-10" />
            <Input type="email" fullWidth bordered />
          </Section>
          <Section gap={1}>
            <Text text="About" block bold size="small" color="primary" funcss="margin-bottom-10" />
            <Input multiline rows={3} fullWidth bordered />
          </Section>
          <Section gap={1}>
           <Button
           text="Submit"
           raised 
           bg="primary"
           />
          </Section>
            </Col>
        </Grid>
    </Container>
    </Div>
  )
}
