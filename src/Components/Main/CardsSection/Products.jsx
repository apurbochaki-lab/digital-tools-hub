import { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({ productsPromise }) => {
    const products = use(productsPromise)
    // console.log(products)

    return (
        <section className="mt-8 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>

        </section>
    );
};

export default Products;