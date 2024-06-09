import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
    seletorView: Function
}

export default function BtnCadastro(props: props) {

    let btnEstilo = `btn-floating btn-large waves-effect waves-light right ${props.tema}`
    return (
        <>
            <a className={btnEstilo} onClick={(e: any) => props.seletorView(0,'Cadastro', e)}>
                <i className="material-icons">add</i>
            </a>
        </>
    )
}