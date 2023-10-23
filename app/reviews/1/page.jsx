
import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import {PiCaretRight} from 'react-icons/pi'
import Button from 'funuicss/ui/button/Button'
export default function Section1() {
  return (
    <Div margin="5rem 0">
    <Container>
    <Text
      text={<>
      <Text text="-" color="gradient" />
      <Text text="Work With Us" color="dark200"/>
      </>}
      size="jumbo"
      block

      />
      <Section gap={1.5} />
      <div className="width-600-max ">
      <Text
      text="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua"
      article
      block
      />
      </div>
      <Section gap={2.5} />
      <RowFlex gap={2}>
        <Div>
        <RowFlex gap={0.3} funcss="border padding-30 hover-up pointer round-edge">
          <Text
          text="Open Roles"
          />
          <PiCaretRight />
        </RowFlex>
        </Div>
        <Div>
        <RowFlex gap={0.3} funcss="border padding-30 hover-up pointer round-edge">
          <Text
          text="Internship programs"
          />
          <PiCaretRight />
        </RowFlex>
        </Div>
        <Div>
        <RowFlex gap={0.3} funcss="border padding-30 hover-up pointer round-edge">
          <Text
          text="Our Values"
          />
          <PiCaretRight />
        </RowFlex>
        </Div>
        <Div>
        <RowFlex gap={0.3} funcss="border padding-30 hover-up pointer round-edge">
          <Text
          text="Meet the Team"
          />
          <PiCaretRight />
        </RowFlex>
        </Div>
      </RowFlex>
      <Section gap={4} />
      <Grid>
        <Col sm={6} md={3} lg={3}>
        <Text
        block 
        text={200}
        heading="h3"
        bold 
        color="primary"
        />
        <Text
        block 
        text={"Offices world wide"}
        color="dark400"
        />
        </Col>
        <Col sm={6} md={3} lg={3}>
        <Text
        block 
        text={"300+"}
        heading="h3"
        bold 
        color="primary"
        />
        <Text
        block 
        text={"Full-time colleagues"}
        color="dark400"
        />
        </Col>
        <Col sm={6} md={3} lg={3}>
        <Text
        block 
        text={50}
        heading="h3"
        bold 
        color="primary"
        />
        <Text
        block 
        text={"Hours per week"}
        color="dark400"
        />
        </Col>
        <Col sm={6} md={3} lg={3}>
        <Text
        block 
        text={"6hr"}
        heading="h3"
        bold 
        color="primary"
        />
        <Text
        block 
        text={"Paid time off"}
        color="dark400"
        />
        </Col>
      </Grid>
    </Container>
    </Div>
  )
}
