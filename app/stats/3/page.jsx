import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import Card from 'funuicss/ui/card/Card'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import {PiArrowDown, PiArrowUp, PiCaretRight, PiCursorClickDuotone, PiUsers, PiUsersDuotone, PiVoicemail, PiVoicemailDuotone} from 'react-icons/pi'
import Button from 'funuicss/ui/button/Button'

export default function Stats() {
  return (
    <Div margin="5rem 0">
         <Div funcss='padding'>
         <Text
        text='Last 30 days'
        bold
        />
         </Div>
        <Grid>
            <Col sm={12} md={4} lg={4} funcss='padding'>
                <Card
                funcss=' round-edge hover-up dark'
                body={
                    <RowFlex gap={1} funcss='padding-20'>
                    <Button text={<PiUsersDuotone size={20} />} bg='primary' raised height="3rem" width='3rem' />
                    <Div >
                    <Text text='Total Students' size='small' color='dark400' block bold/>
                    <RowFlex gap={0.5}>
                    <Text heading='h3' text='20,000' color='dark900' />
                    <Button 
                    startIcon={<PiArrowUp />}
                    color='success'
                    text='223'
                    />
                    </RowFlex>
                    </Div>
                    </RowFlex>
                }
          
                />
            </Col>
            <Col sm={12} md={4} lg={4} funcss='padding'>
                <Card
                funcss=' round-edge hover-up dark'
                body={
                    <RowFlex gap={1} funcss='padding-20'>
                    <Button text={<PiVoicemailDuotone size={20} />} bg='primary' raised height="3rem" width='3rem' />
                    <Div>
                    <Text text='Avg. Open Rate' size='small' color='dark400' block bold/>
                    <RowFlex gap={0.5}>
                    <Text heading='h3' text='60.77%' color='dark900' />
                    <Button 
                    startIcon={<PiArrowUp />}
                    color='success'
                    text='20%'
                    />
                    </RowFlex>
                    </Div>
                    </RowFlex>
                }

                />
            </Col>
            <Col sm={12} md={4} lg={4} funcss='padding'>
                <Card
                funcss=' round-edge hover-up dark'
                body={
                    <RowFlex gap={1} funcss='padding-20'>
                    <Button text={<PiCursorClickDuotone size={20} />} bg='primary' raised height="3rem" width='3rem' />
                    <Div>
                    <Text text='Avg. Click Rate' size='small' color='dark400' block bold/>
                    <RowFlex gap={0.5}>
                    <Text heading='h3' text='20,000' color='dark900' />
                    <Button 
                    startIcon={<PiArrowDown />}
                    color='error'
                    text='0.38%'
                    />
                    </RowFlex>
                    </Div>
                    </RowFlex>
                }
           
                />
            </Col>
     
        </Grid>
    </Div>
  )
}
