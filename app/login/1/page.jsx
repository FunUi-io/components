import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
import  FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import { PiPaperPlaneRight , PiKey, PiCheck } from 'react-icons/pi';
import IconicInput from 'funuicss/ui/input/Iconic'
import Link from 'next/link'
export default function Section1() {
  return (
    <FullCenteredPage>
    <Div maxWidth={"400px"}>
    <div className='width-300 center'>
 <div className="margin-bottom-40">
 <Text
    text='Welcome'
    heading='h2'
    block
    />
    <Text
    text='Sign in to continue!'
    block
    />
 </div>
<IconicInput 
    funcss="section full-width" 
    leftIcon={ <PiPaperPlaneRight />}
    input={<Input type="email" label="Email" fullWidth bordered />}
     />
<IconicInput 
    funcss="section full-width" 
    leftIcon={ <PiKey />}
    input={<Input type="password" label="Password" fullWidth bordered />}
     />
      <div className="section">
        <Link href={"/#"}>
            <Text text='Forgot password!' size='small' underline color='primary'/>
        </Link>
 </div>
      <div className="section">
        <Button
        text={"Let's go"}
        raised
        fullWidth
        bg='primary800'
        />
 </div>

</div>
    
 
    </Div>
    </FullCenteredPage>
  )
}
