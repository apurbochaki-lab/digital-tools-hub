import { toast } from "react-toastify";

const Carts = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handleRemove = (cart) => {
        console.log("Clicked")
        const filteredItem = carts.filter(item => item.id !== cart.id)
        setCarts(filteredItem)
        toast.warn("Item Removed from Cart")
    }

    return (
        <section className="">
            {
                carts.length === 0
                    ? <div className="mt-10 border-2 border-zinc-400/30 rounded-2xl shadow-md max-w-200 mx-auto">
                        <h2 className="text-4xl font-bold text-center py-15 text-black/60">No Items Here</h2>
                    </div>

                    : <div className="mt-5 mb-20 border border-gray-500/40 shadow-sm rounded-xl container mx-auto">
                        <div className="p-6 space-y-5">
                            <h2 className="ml-3 text-4xl font-bold pb-5">Your Cart</h2>
                            {
                                carts.map(cart => {
                                    return <div className="flex justify-between bg-[#e1e8f8] p-5 py-5 rounded-xl shadow-sm">
                                        <div className="flex items-center gap-4">
                                            {/* Left side */}
                                            <span className="bg-white/90 w-13 h-13 flex justify-center items-center rounded-full"><h2 className="text-4xl">{cart.icon}</h2></span>
                                            <div className=" space-y-2">
                                                <h2 className="text-2xl font-semibold">{cart.name}</h2>
                                                <p className="text-xl font-semibold text-black/60">${cart.price}</p>
                                            </div>
                                        </div>

                                        {/* Right side */}
                                        <button onClick={() => handleRemove(cart)} className="text-red-500 text-lg font-bold cursor-pointer">Remove</button>
                                    </div>
                                })
                            }

                            <div className="pt-5 flex justify-between pb-5">
                                <h2 className="text-3xl font-bold">Total:</h2>
                                <h2 className="text-3xl font-extrabold">${totalPrice}</h2>
                            </div>

                            <button onClick={() => { setCarts([]); toast.success("Proceed to Checkout.") }} className="btn primary-bg w-full rounded-full text-white text-xl font-bold py-8">Proceed To Checkout</button>
                        </div>
                    </div>
            }

        </section>
    );
};

export default Carts;