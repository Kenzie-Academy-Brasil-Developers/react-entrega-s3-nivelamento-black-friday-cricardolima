

export default function Cart({currentSale, totalOnCart}) {
    return (
        <div>
            <h1>Carrinho de compras</h1>
            {currentSale.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Preço Original: {item.price}</p>
                            <p>Porcentagem do desconto: {item.percentage}</p>
                            <p>Valor do desconto: {item.discountValue}</p>
                            <p>Preço a ser pago:{totalOnCart}</p>
                        </div>
                    )
            })}
        </div>
    )
}
