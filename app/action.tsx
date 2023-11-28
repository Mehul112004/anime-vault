"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";


export const fetchAnime=async (page:Number)=>{
    const resonse = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);
    
    const data = await resonse.json();
    // console.log(data);
    return data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ))
}