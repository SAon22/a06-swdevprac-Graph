'use client'
import { useReducer } from "react";
import Card from "@/components/Card";
import { Rating } from "@mui/material"

function ratingReducer(state: Map<string, number>, action: { type: string, venue: string, rating?: number }) {

    const newState = new Map(state)

    switch(action.type) {
        case "set":
        if(action.rating !== undefined) {
            newState.set(action.venue, action.rating);
        }
        return newState;
        case "remove":
            newState.delete(action.venue);
            return newState;
        default:
            return state;
    }
}


export default function CardPanel() {
    const initialState = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]);

    const [ratings, dispatch] = useReducer(ratingReducer, initialState);

    return (
        <div style={{margin:"20px", display:"flex", flexDirection:"row", 
        flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>

        <Card venueName='The Bloom Pavilion' imgSrc="/img/bloom.jpg" 
        rating={ratings.get("The Bloom Pavilion")}
        onRatingChange={(value:number) => dispatch({type:"set", venue:"The Bloom Pavilion", rating:value})}
        />

        <Card venueName='Spark Space' imgSrc="/img/sparkspace.jpg" 
        rating={ratings.get("Spark Space")}
        onRatingChange={(value:number) => dispatch({type:"set", venue:"Spark Space", rating:value})}
        />

        <Card venueName='The Grand Table' imgSrc="/img/grandtable.jpg"
        rating={ratings.get("The Grand Table")}
        onRatingChange={(value:number) => dispatch({type:"set", venue:"The Grand Table", rating:value})}
        />

        <div style={{width:"100%", marginTop:"20px"}}>
        {Array.from(ratings.entries()).map(([venue, rating]) => (<div key={venue} data-testid={venue}
        onClick={() => dispatch({type:"remove", venue:venue})} style={{cursor:"pointer"}}
        >{venue} Rating : {rating}</div>))}
        </div>

</div>

    );
}