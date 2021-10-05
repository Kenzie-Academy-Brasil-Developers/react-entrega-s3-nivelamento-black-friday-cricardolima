

export default function Product({blackProduct}) {

    const productFinalPrice = Number(blackProduct.price - blackProduct.discountValue).toFixed(2);

    return (
        <div>
            <h3>{blackProduct.name}</h3>
            <p>Preço Original: {blackProduct.price}</p>
            <p>Porcentagem do desconto: {blackProduct.percentage}</p>
            <p>Valor do desconto: {blackProduct.discountValue}</p>
            <p>Preço a ser pago:{productFinalPrice}</p>
        </div>
    )
}
