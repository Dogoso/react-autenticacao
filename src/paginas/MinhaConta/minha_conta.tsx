import { Link, Outlet } from 'react-router-dom'
import TagsCategorias from '../../componentes/TagsCategorias'
import './minha_conta.css'

const MinhaConta = () => {
    return (
        <section>
            <div className="title-div">
                <h1 className="center-text">
                    Minha conta
                </h1>
            </div>
            <div className='outer-body'>
                <div className='body'>
                    <div className='tabs'>
                        <ul>
                            <li>
                                <Link to="/minha-conta/pedidos/">
                                    Pedidos
                                </Link>
                            </li>
                            <li>
                                <Link to="/minha-conta/trocas/">
                                    Trocas
                                </Link>
                            </li>
                            <li>
                                <Link to="/minha-conta/cupons/">
                                    Cupons
                                </Link>
                            </li>
                            <li>
                                <Link to="/minha-conta/dados/">
                                    Seus dados
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='outlet-div'>
                    <Outlet />
                </div>
            </div>
            <TagsCategorias />
        </section>
    )
}

export default MinhaConta