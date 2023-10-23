
import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Container from 'funuicss/ui/container/Container'
import Section from 'funuicss/ui/specials/Section'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import {PiCaretRight, PiStar, PiStarDuotone} from 'react-icons/pi'
import Button from 'funuicss/ui/button/Button'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'
import ProgressBar from 'funuicss/ui/progress/Bar'
export default function Section1() {
  return (
    <Div margin="2rem 0" padding='2rem'>
       <Div maxWidth='700px' funcss='center' >
     
       <Text
        text='Our Reviews' 
        heading='h5'
        bold
        color='dark200'
        block
        />
        <Text
        text='If you’ve used this product, share your thoughts with other customers' 
        color='dark400'
        block
        />
      <Section gap={2} />
                <List>
                    <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                        <RowFlex gap={1} alignItems='flex-start'>
                            <img src="/users/deo.jpg" className='width-50 height-50 circle raised' alt="" />
                            <Div>
                                <Text
                                text='John Deo'
                                block
                                />
                                <Text
                                text='September 3, 2090'
                                block 
                                size='small'
                                bold
                                color='primary'
                                />
                            <RowFlex funcss='section' >
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-dark500'><PiStarDuotone size={20} /></span>
                            </RowFlex>
                            <Section />
                        <Text
                        text='This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.'
                        color='dark400'
                        />
                            </Div>
                        </RowFlex>
                     
                    </ListItem>
                    <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                        <RowFlex gap={1} alignItems='flex-start'>
                            <img src="/users/john.jpg" className='width-50 height-50 circle raised' alt="" />
                            <Div>
                                <Text
                                text='John Bobby'
                                block
                                />
                                <Text
                                text='September 3, 2090'
                                block 
                                size='small'
                                bold
                                color='primary'
                                />
                            <RowFlex funcss='section' >
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-dark500'><PiStarDuotone size={20} /></span>
                            </RowFlex>
                            <Section />
                        <Text
                        text='Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!'
                        color='dark400'
                        />
                            </Div>
                        </RowFlex>
                     
                    </ListItem>
                    <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                        <RowFlex gap={1} alignItems='flex-start'>
                            <img src="/users/jane.jpg" className='width-50 height-50 circle raised' alt="" />
                            <Div>
                                <Text
                                text='Emily Jane Deo'
                                block
                                />
                                <Text
                                text='September 3, 2090'
                                block 
                                size='small'
                                bold
                                color='primary'
                                />
                            <RowFlex funcss='section' >
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-dark500'><PiStarDuotone size={20} /></span>
                            </RowFlex>
                            <Section />
                        <Text
                        text='I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins'
                        color='dark400'
                        />
                            </Div>
                        </RowFlex>
                     
                    </ListItem>


                </List>
          
        </Div>

      
    </Div>
  )
}
