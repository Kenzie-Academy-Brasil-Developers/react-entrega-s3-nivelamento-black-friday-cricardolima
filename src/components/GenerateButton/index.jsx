export default function GenerateButton({products, setBlackProduct, setShow = false}) {

    const generatePromo = () => {
        let getRandom = Math.floor(Math.random() * 6 + 1);
        let randomProduct = products.find(item => item.id === getRandom);
        let randomDiscountPercentage = Math.floor(Math.random() * (90 - 40) + 40);
        let discountPrice = ((randomProduct.price * randomDiscountPercentage) / 100).toFixed(2);

        setBlackProduct({
            ...randomProduct,
            percentage: randomDiscountPercentage,
            discountValue: Number(discountPrice),
        });
        
        setShow(true)
    }

    return (
        <div>
            <button onClick={generatePromo}>Gerar Promoção</button>
        </div>
    )
}
