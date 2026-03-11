'use client'
import Image from 'next/image'
import { useState } from "react"
import InteractiveCard from './InteractiveCard'
import { Rating } from "@mui/material"

export default function ProductCard({venueName, imgSrc, rating, onRatingChange} 
    : {venueName:string, imgSrc:string, rating:number | undefined, onRatingChange:(value:number)=>void}) {

    const [value, setValue] = useState<number | null>(0)

    return (
        <InteractiveCard contentName={venueName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>

            <div className='w-full h-[30%]'>
                {venueName}
                <Rating value={rating} onChange={(event, newValue) => { if(newValue!=null){ onRatingChange(newValue)}}}
                    id={venueName + " Rating"}
                    name={venueName + " Rating"}
                    data-testid={venueName + " Rating"}
                />
                </div>
        </InteractiveCard>
    )
}