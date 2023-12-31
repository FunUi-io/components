'use client'
import { useEffect, useState } from "react"


import { PiX } from 'react-icons/pi';
import SnackBar from 'funuicss/ui/snackbar/SnackBar'
import Button from 'funuicss/ui/button/Button'
export default function Home() {
    const [openSnackBar, setopenSnackBar] = useState(false)
            useEffect(()=>{
            if(openSnackBar){
               setTimeout(()=>{
                  setopenSnackBar(!openSnackBar) 
                  clearTimeout()
               },2000)
            }
            },[openSnackBar])
  return (
    
   <div className="container padding-top-50">
  
<Button  onClick={()=>setopenSnackBar(true)} raised bg="primary" text="Bottom Left"/>
<SnackBar 
position="default" 
close = {<PiX onClick={()=>setopenSnackBar(false)}  />}  
message="Hi! - Welcome to my website" 
animation="SlideRight" 
duration={0.5} 
open={openSnackBar} />

   </div>
  )
}
