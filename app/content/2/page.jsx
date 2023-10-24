import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Section from 'funuicss/ui/specials/Section'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Circle from 'funuicss/ui/specials/Circle'
import { PiCheckCircleDuotone,  PiWarningCircleDuotone} from 'react-icons/pi'
import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'

export default function Section1() {
  return (
    <Div padding='2rem 2rem' maxWidth='700px' funcss='center'>
       <Section funcss='padding'>
        <Text 
        text='Deploy faster'
        block 
        color='primary'
        />
        <Text 
        text='Python  for beginners'
        bold 
        block 
        heading='h2'
        />
       </Section>

       <Text 
        text={"Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id."}
        article
        color='dark300'
        />
    <Section gap={3} />
    <Text 
        text={"Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas"}
        article
        color='dark300'
        />
    <Section gap={3} />
    <List gap={2}>
        <ListItem>
            <RowFlex gap={1} alignItems='flex-start'>
                <Circle size={1.5} bg='primary'>
                    <PiCheckCircleDuotone />
                </Circle>
                <Div>
                    <Text
                    text={"Variables. "}
                    bold
                    />
                    <Text
                    text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}
                    />
                </Div>
            </RowFlex>
        </ListItem>
        <ListItem>
            <RowFlex gap={1} alignItems='flex-start'>
                <Circle size={1.5} bg='primary'>
                    <PiCheckCircleDuotone />
                </Circle>
                <Div>
                    <Text
                    text={"Data Types. "}
                    bold
                    />
                    <Text
                    text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}
                    />
                </Div>
            </RowFlex>
        </ListItem>
        <ListItem>
            <RowFlex gap={1} alignItems='flex-start'>
                <Circle size={1.5} bg='primary'>
                    <PiCheckCircleDuotone />
                </Circle>
                <Div>
                    <Text
                    text={"Looping. "}
                    bold
                    />
                    <Text
                    text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."}
                    />
                </Div>
            </RowFlex>
        </ListItem>
    </List>
    <Section gap={2} />
    <Text 
        text={"Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci."}
        article
        color='dark300'
        />
            <Section gap={2} />
            <img src='/components_images/business_man.jpg' className='fit round-edge'/>
            <RowFlex gap={0.6} funcss='section'>
            <Circle size={1.5} bg='primary'>
                    <PiWarningCircleDuotone />
                </Circle>
            <Text 
        text={"Faucibus commodo massa rhoncus, volutpat."}
        article
        color='dark300'
        />
  
            </RowFlex>
            <Section gap={3} />
            <Text 
        text={"Everything you need to get up and running."}
        bold
        heading='h4'
        />
            <Section gap={3} />
       <Text 
        text={"Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id."}
        article
        color='dark300'
        />
    <Section gap={3} />
    <Text 
        text={"Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas"}
        article
        color='dark300'
        />
    </Div>
  )
}
