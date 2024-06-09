import { useEffect, useState } from "react"
import Usuario from "../model/usuario"

type props = {
    tema: string
    seletorView: Function
}

export default function Login(props: props) {

    const [usuario, setUsuario] = useState(new Usuario('', ''))

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            [name]: value
        }));
    };

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const getUsuarios = async (e:any) => {
        try {
            const response = await fetch(`http://localhost:8080/validaUsuario`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(usuario),
            })
            const jsonData = await response.json()
            setUsuarios(jsonData)

            if(usuarios.length > 0){
                props.seletorView(0, 'Home',e)
               }
        } catch (error: any) {
            console.log(error.message)
        }
    }

    let estilo = `card-panel offset-s4 col s4`
    let estiloBotao = `btn waves-effect waves-light col right ${props.tema}`
    return (
        <div className="row">
            <div className="row"></div>
            <div className={estilo}>
                <div className="row">
                    <div className="input-field col s12">
                        <input defaultValue={usuario.usuarioLogin} onChange={handleChange} id="usuarioLogin" type="text" className="validate" name='usuarioLogin' />
                        <label className="active" htmlFor="usuarioLogin">Login</label>
                    </div>

                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input defaultValue={usuario.usuarioSenha} onChange={handleChange} id="usuarioSenha" type="password" className="validate" name='usuarioSenha' />
                        <label className="active" htmlFor="usuarioSenha">Senha</label>
                    </div>
                </div>

                <div className="">
                <div className="row col s12">
                    <button className={estiloBotao} onClick={(e) => getUsuarios(e)}>Entrar
                        <i className="material-icons right">forward</i>
                    </button>
                </div>
            </div>
            </div>
           
        </div>
    )
}