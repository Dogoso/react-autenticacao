import { useState } from "react"
import { Link } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import ModalLoginUsuario from "../ModalLoginUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'

const BarraNavegacao = () => {

    const [registroAberto, setRegistroAberto] = useState<boolean>(false)
    const [loginAberto, setLoginAberto] = useState<boolean>(false)

    const token = sessionStorage.getItem('token')
    const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token !== null)

    const aoSubmeterLogin = (accessToken: string | null) => {
        setLoginAberto(false)
        if(accessToken !== null) {
            setUsuarioLogado(true)
        }
    }

    return (
        <nav className="ab-navbar">
            <h1 className="logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo da AluraBooks" />
                </Link>
            </h1>
            <ul className="navegacao">
                <li>
                    <a href="#!">Categorias</a>
                    <ul className="submenu">
                        <li>
                            <Link to="/">
                                Frontend
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Programação
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Infraestrutura
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Business
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Design e UX
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="acoes">
                {!usuarioLogado && (
                    <>
                        <li>
                            <BotaoNavegacao
                                texto="Login"
                                textoAltSrc="Icone representando um usuário"
                                imagemSrc={usuario}
                                onClick={() => setLoginAberto(true)}
                            />
                        </li>
                        <li>
                            <BotaoNavegacao
                                texto="Cadastrar-se"
                                textoAltSrc="Icone representando um usuário"
                                imagemSrc={usuario}
                                onClick={() => setRegistroAberto(true)}
                            />
                        </li>
                    </>
                )}
                {usuarioLogado && (
                    <>
                        <li>
                            <Link to="/minha-conta/pedidos/">
                                Minha conta
                            </Link>
                        </li>
                    </>
                )}
            </ul>
            <ModalCadastroUsuario
                aberto={registroAberto}
                aoFechar={() => setRegistroAberto(false)}
            />
            <ModalLoginUsuario
                aberto={loginAberto}
                aoFechar={aoSubmeterLogin}
            />
        </nav>
    )
}

export default BarraNavegacao