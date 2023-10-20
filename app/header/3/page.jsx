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
export default function Section1() {
  return (
    <Div margin="5rem 0">
    <Container funcss="blueGray900 padding-30 roundEdge" color={"dark800"}>
        <Div minHeight={"300px"} funcss="central text-center" >
                <Div>
                <Text
      text={"Support center"}
      size="jumbo"
      block

      />
      <Section gap={1.5} />
      <div className="width-600-max ">
      <Text
      color="dark700"
      text="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua"
      article
      block
      />
      </div>
                </Div>
        </Div>
 
    </Container>
    </Div>
  )
}
