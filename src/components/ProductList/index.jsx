import Product from "../Product";

export default function ProductList({blackProduct, handleClick}) {
    return (
        <div>
            <Product blackProduct={blackProduct}/>
            <button onClick={() => handleClick(blackProduct)}>Adicionar ao carrinho</button>
        </div>
    )
}
