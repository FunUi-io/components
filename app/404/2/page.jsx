'use client'

import React from 'react'
import Text from 'funuicss/ui/text/Text'
import Button from 'funuicss/ui/button/Button'
import {  PiArrowRightDuotone } from 'react-icons/pi';
import RowFlex from 'funuicss/ui/specials/RowFlex'
import NotFound from "funuicss/ui/page/NotFound"
export default function Section1() {
  return (<NotFound
    code={<Text text='404' bold color='primary'/>}
    header={<Text text='Page Not Found' bold color='gradient' heading='h1'/>}
    content={<Text text={"Sorry, we couldn't find the page you're looking for."} color='dark400'/>}
    action={
    <RowFlex justify='center' gap={1}>
        <Button 
        text='Back to home'
        bg='primary'
        raised 
        rounded
        />
        <Button 
        text='Contact Support'
        color='primary'
        endIcon={<PiArrowRightDuotone />}
        />
    </RowFlex>}
    />)
}
