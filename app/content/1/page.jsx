import React from 'react'
import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Section from 'funuicss/ui/specials/Section'
import Button from 'funuicss/ui/button/Button'

export default function Section1() {
  return (
    <Div padding='2rem 2rem'>
       <Section funcss='padding'>
        <Text 
        text='Deploy faster'
        block 
        color='primary'
        />
        <Text 
        text='A bigger workflow'
        bold 
        block 
        heading='h2'
        />
       </Section>
       <Grid>
        <Col sm={12} md={6} lg={6} funcss='padding'>
        <Text 
        text={"Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id."}
        article
        color='dark300'
        />
        <Section gap={2.5} />
        <Text 
        text={"Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas"}
        article
        color='dark300'
        />
        <Section gap={2.5} />
        <Button 
        text='Get started'
        bg='primary'
        raised
        />
        </Col>
        <Col sm={12} md={6} lg={6} funcss='padding'>
        <Text 
        text={"Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id."}
        article
        color='dark300'
        />
        <Section gap={2.5} />
        <Text 
        text={"Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci."}
        article
        color='dark300'
        />
   
        </Col>
       </Grid>
    </Div>
  )
}
