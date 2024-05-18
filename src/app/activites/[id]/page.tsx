'use client' 

import React from "react";
import { useParams } from "next/navigation";
import { notFound } from 'next/navigation'

import items from "@/lib/data/activitiesItems.json";



function Page() {
    const params = useParams()
    const item = items.find((item) => item.id === params.id);
    if (!item) {
        notFound();
    }  
    console.log("item",item);
    return ( 
        <>
        <h2>{item.title}</h2>
        <p>{item.description}</p> 
        </>
    );
  
};

export default Page;
