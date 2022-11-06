import axios from "axios"
import { AbBotao } from "ds-alurabooks"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './pedidos.css'
import { IPedido } from "./pedidos_interfaces"

const Pedidos = () => {

    const [pedidos, setPedidos] = useState<IPedido[]>([])
    const navigate = useNavigate()
    const currencyFormatter = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })

    useEffect(() => {
        let token = sessionStorage.getItem('token')
        axios.get<IPedido[]>('http://localhost:8000/pedidos',
            { headers: { 'Authorization': `Bearer ${token}` } }
        )
            .then(info => {
                setPedidos(info.data)
            })
            .catch(_ => {
                navigate('/')
            })
    }, [])

    const formatDate = (date: string) => new Date(date).toLocaleDateString()
    const formatCurrency = (value: number) => currencyFormatter.format(value)

    return (
        <section>
            <h2>Pedidos</h2>
            <div className="pedidos">
                {pedidos.map(pedido => (
                    <div className="pedidos__card">
                        <div className="pedidos__card__info">
                            <span>Pedido: <strong>{pedido.id}</strong></span> <br />
                            <span>Data do pedido: <strong>{formatDate(pedido.data)}</strong></span> <br />
                            <span>Valor total: <strong>{formatCurrency(pedido.total)}</strong></span> <br />
                            <span>Entrega realizada em: <strong>{formatDate(pedido.entrega)}</strong></span> <br />
                        </div>
                        <div className="pedidos__card__button">
                            <AbBotao texto="Detalhes" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pedidos