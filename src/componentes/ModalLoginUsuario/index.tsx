import axios from "axios"
import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import { Link } from "react-router-dom"

import imagemLegal from './assets/login.png'

import './ModalLoginUsuario.css'

interface PropsModalInterface {
  aberto: boolean
  aoFechar: (accessToken: string | null) => void
}

const ModalLoginUsuario = ({ aberto, aoFechar }: PropsModalInterface) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const usuario = {
      email,
      senha,
    }
    axios.post('http://localhost:8000/public/login/', usuario)
      .then(response => {
        let accessToken = response.data.access_token
        sessionStorage.setItem('token', accessToken)

        setEmail('')
        setSenha('')
        aoFechar(accessToken)
      })
      .catch(error => {
        alert(`Desculpe, um erro inesperado aconteceu! ${error.response.status}`)
      })
  }

  return (
    <AbModal
      titulo=""
      aberta={aberto}
      aoFechar={() => aoFechar(null)}
    >
      <section className="corpoModalLogin">
        <figure>
          <img src={imagemLegal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
        </figure>
        <form onSubmit={aoSubmeterFormular}>
          <div className="form-title">
            <h1>
              LOGIN
            </h1>
          </div>
          <AbCampoTexto
            label="E-mail"
            value={email}
            onChange={setEmail}
            type="email"
            placeholder="seuemail@maneiro.com.br"
          />
          <AbCampoTexto
            label="Senha"
            value={senha}
            onChange={setSenha}
            type="password"
            placeholder="***************"
          />
          <div className="acoes">
            <Link to="#" className="esqueci">
              Esqueci minha senha
            </Link>
            <div>
              <AbBotao 
                texto="Fazer login" 
              />
            </div>
          </div>
          <hr/>
          <div className="criar-conta">
            <h2>Ainda não tem uma conta?</h2>
            <div>
              <AbBotao 
                texto="Criar conta" 
              />
            </div>
          </div>
        </form>
      </section>
    </AbModal>
  )
}

export default ModalLoginUsuario