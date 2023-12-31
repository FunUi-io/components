
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
    <Div margin="5rem 0" padding='2rem'>
        <Grid>
            <Col sm={12} md={12} lg={5} funcss='padding'>
            <Text
      text={"Customer Reviews"}
      heading='h2'
      bold 
      color='dark300'
      block
      />
      <Section gap={0.3} />
        <RowFlex gap={1}>
            <Div>
                <RowFlex >
                    <span className='text-primary'><PiStarDuotone size={25} /></span>
                    <span className='text-primary'><PiStarDuotone size={25} /></span>
                    <span className='text-primary'><PiStarDuotone size={25} /></span>
                    <span className='text-primary'><PiStarDuotone size={25} /></span>
                    <span className='text-dark500'><PiStarDuotone size={25} /></span>
                </RowFlex>
            </Div>
           <Div>
           <Text
            text='Based on 1624 reviews'
            color='dark400'
            block
            />
           </Div>
        </RowFlex>
        <Section gap={2} />
        <List>
            <ListItem>
                <RowFlex gap={1}>
                    <Div>
                        <Text
                        text='5'
                        />
                    </Div>
                    <Div>
                    <span className='text-primary'><PiStar size={20} style={{margin:0}}/></span>
                    </Div>
                    <Div minWidth='250px'>
                    <ProgressBar  progress={63} rounded  bg="primary"  />
                    </Div>
                    <Div>
                        <Text
                        text='63%'
                        />
                    </Div>
                </RowFlex>
            </ListItem>
            <ListItem>
                <RowFlex gap={1}>
                    <Div>
                        <Text
                        text='4'
                        />
                    </Div>
                    <Div>
                    <span className='text-primary'><PiStar size={20} style={{margin:0}}/></span>
                    </Div>
                    <Div minWidth='250px'>
                    <ProgressBar  progress={12} rounded  bg="primary"  />
                    </Div>
                    <Div>
                        <Text
                        text='12%'
                        />
                    </Div>
                </RowFlex>
            </ListItem>
            <ListItem>
                <RowFlex gap={1}>
                    <Div>
                        <Text
                        text='3'
                        />
                    </Div>
                    <Div>
                    <span className='text-primary'><PiStar size={20} style={{margin:0}}/></span>
                    </Div>
                    <Div minWidth='250px'>
                    <ProgressBar  progress={10} rounded  bg="primary"  />
                    </Div>
                    <Div>
                        <Text
                        text='10%'
                        />
                    </Div>
                </RowFlex>
            </ListItem>
            <ListItem>
                <RowFlex gap={1}>
                    <Div>
                        <Text
                        text='2'
                        />
                    </Div>
                    <Div>
                    <span className='text-primary'><PiStar size={20} style={{margin:0}}/></span>
                    </Div>
                    <Div minWidth='250px'>
                    <ProgressBar  progress={6} rounded  bg="primary"  />
                    </Div>
                    <Div>
                        <Text
                        text='6%'
                        />
                    </Div>
                </RowFlex>
            </ListItem>
            <ListItem>
                <RowFlex gap={1}>
                    <Div>
                        <Text
                        text='1'
                        />
                    </Div>
                    <Div>
                    <span className='text-primary'><PiStar size={20} style={{margin:0}}/></span>
                    </Div>
                    <Div minWidth='250px'>
                    <ProgressBar  progress={9} rounded  bg="primary"  />
                    </Div>
                    <Div>
                        <Text
                        text='9%'
                        />
                    </Div>
                </RowFlex>
            </ListItem>
        </List>

        <Section gap={2} />
        <Text
        text='Share your thoughts' 
        heading='h5'
        block
        />
        <Text
        text='If you’ve used this product, share your thoughts with other customers' 
        color='dark400'
        block
        />
            <Section gap={1.5} />
            <Button
            bg='primary'
            outlined 
            text='Write a review'
            fullWidth
            funcss='width-300-max'
            />
            </Col>
            <Col sm={12} md={12} lg={7} funcss='padding'>
                <List>
                    <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                        <RowFlex gap={1}>
                            <img src="/users/deo.jpg" className='width-50 height-50 circle raised' alt="" />
                            <Div>
                                <Text
                                text='John Deo'
                                bold
                                block
                                />
                            <RowFlex >
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-dark500'><PiStarDuotone size={20} /></span>
                            </RowFlex>
                            </Div>
                        </RowFlex>
                        <Section />
                        <Text
                        text='This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.'
                        color='dark400'
                        emp
                        />
                    </ListItem>
                    <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                        <RowFlex gap={1}>
                            <img src="/users/john.jpg" className='width-50 height-50 circle raised' alt="" />
                            <Div>
                                <Text
                                text='Bobby John'
                                bold
                                block
                                />
                            <RowFlex >
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            </RowFlex>
                            </Div>
                        </RowFlex>
                        <Section />
                        <Text
                        text='Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!'
                        color='dark400'
                        emp
                        />
                    </ListItem>
                    <ListItem funcss='hr padding-bottom-50 padding-top-50'>
                        <RowFlex gap={1}>
                            <img src="/users/jane.jpg" className='width-50 height-50 circle raised' alt="" />
                            <Div>
                                <Text
                                text='Jane Emily Deo'
                                bold
                                block
                                />
                            <RowFlex >
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-primary'><PiStarDuotone size={20} /></span>
                            <span className='text-dark500'><PiStarDuotone size={20} /></span>
                            <span className='text-dark500'><PiStarDuotone size={20} /></span>
                            <span className='text-dark500'><PiStarDuotone size={20} /></span>
                            </RowFlex>
                            </Div>
                        </RowFlex>
                        <Section />
                        <Text
                        text='I love how versatile this bag is. It can hold anything ranging from cookies that come in trays to cookies that come in tins'
                        color='dark400'
                        emp
                        />
                    </ListItem>
                </List>
            </Col>
        </Grid>

      
    </Div>
  )
}
