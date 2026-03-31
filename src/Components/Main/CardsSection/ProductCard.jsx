import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProductCard = ({ product, carts, setCarts }) => {
    // console.log(product)
    const { tag, icon, name, description, price, period, features } = product;
    const [isBuy, setIsBuy] = useState(false)

    const handleBuyNow = () => {
        setIsBuy(true)

        const isExist = carts.find(item => item.id === product.id)
        if (isExist) {
            toast.error("It's already in cart")
        } else {
            setCarts([...carts, product])
            toast.success("Product added to cart")
        }
    }

    return (
        <section>
            <div key={product.id} className="card m-3 rounded-xl bg-base-100 shadow-md border border-gray-500/30 h-full">
                <div className="p-4 space-y-3">
                    <div className="flex justify-end">
                        {/* Nested Ternary Operator */}
                        {tag === 'New'
                            ? <span className="badge badge-md bg-[#DBFCE7] text-[#0A883E] font-bold p-3 rounded-full">{tag}</span>
                            // 2nd Condition
                            : tag === 'Popular'
                                ? <div className='bg-[#E1E7FF] rounded-full'>
                                    <span className="badge badge-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  font-bold p-3 ">{tag}</span>
                                </div>
                                : <span className="badge badge-md bg-[#FEF3C6] text-[#BB4D00] font-bold p-3 rounded-full">{tag}</span>}
                    </div>

                    <span className='border border-gray-500/30 w-16 h-16 flex justify-center items-center rounded-full'><h2 className='text-4xl'>{icon}</h2></span>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className=' text-black/60'>{description}</p>
                    <div className='flex items-center'>
                        <span className="text-3xl font-bold">${price}</span>
                        <p className='pt-3 text-black/60'>/{period}</p>
                    </div>

                    <ul className=" flex flex-col gap-2 text-xs">
                        {
                            features.map((feature, index) => <li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[16px] text-black/80'>{feature}</span>
                            </li>)
                        }

                    </ul>
                    <div className="">
                        <button
                            onClick={handleBuyNow}
                            className={`btn py-7  rounded-full text-white text-lg font-bold btn-block 
                                ${isBuy ? "bg-green-600" : "primary-bg"} `}
                        >{isBuy ? <h2 className='flex items-center gap-3'><FaCheck /> Added to Cart!</h2> : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;