/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import Item from "../model/item";


type props = {
    tema: string
    seletorView: Function
    item: Item
}

export default function ItemGrid(props: props) {

    let estilo = `collection-item active ${props.tema}`
    let estiloBotao = `btn waves-effect waves-light col right ${props.tema} secondary-content`
    return (
        <a className="collection-item row">
            <p>
                {props.item.itemNome}

                <button className={estiloBotao} type="submit" name="action" onClick={(e: any) => props.seletorView(props.item.itemID, 'Cadastro', e)}>Editar
                    <i className="material-icons right">edit </i>
                </button>
                <a className="col s1 right"> </a>
                <a className="right"> {'R$'} {props.item.itemVendaValor}</a>
                <br />
                {props.item.itemDescricao}
                <a className="col s1 right"> </a>
                <a className="right"> {props.item.itemCategoria}</a>
            </p>

        </a>
    )
}