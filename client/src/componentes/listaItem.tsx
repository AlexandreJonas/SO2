/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import ItemGrid from "./itemGrid";
import Item from "../model/item";


type props = {
    tema: string
    seletorView: Function
}

export default function ListaItem(props:props) {

    const [items,setItems] = useState<Item[]>([])

    const getItems = async() =>  {
        try 
        {
            const response = await fetch(`http://localhost:8080/items`)
            const jsonData = await response.json()
            setItems(jsonData)
        } catch (error:any) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    
        let estilo = `collection-item active ${props.tema}`
        return (
            <div className="collection">
                { console.log(items)}
                 {items.map((item: any) => {
                return (
                    <ItemGrid tema={props.tema} item = {item} seletorView = {props.seletorView}/>
                )
            })}
            </div>
        )
}