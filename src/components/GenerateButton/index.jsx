export default function GenerateButton({products, setBlackProduct}) {

    const generatePromo = () => {
        let getRandom = Math.floor(Math.random() * 6 + 1);
        let randomProduct = products.filter(item => item.id === getRandom);
        let randomDiscountPercentage = Math.floor(Math.random() * (90 - 40) + 40);
        let discountPrice = ((randomProduct.price * randomDiscountPercentage) / 100);
        
        setBlackProduct(randomProduct);
    }

    return (
        <div>
            
        </div>
    )
}
