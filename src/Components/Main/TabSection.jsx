import { useState } from "react";

const TabSection = () => {
    const [activeTab, setActiveTab] = useState("product")

    return (
        <div className='mt-20 container mx-auto'>
            <div className=' text-center space-y-4'>
                <h2 className=' text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='p-3 md:p-0 max-w-[450px] mx-auto text-black/70 font-medium'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className="mt-5 tabs tabs-box flex justify-center items-center gap-5 bg-transparent">
                <input
                    type="radio" name="my_tabs_1"
                    className={`tab rounded-full px-7 font-bold ${activeTab === 'product' ? "primary-bg text-white" : "text-black"} `}
                    aria-label="Products"
                    onClick={() => setActiveTab("product")}
                    defaultChecked />

                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full px-7 font-bold ${activeTab === 'cart' ? "primary-bg text-white" : "text-black"} `}
                    aria-label="Cart ()"
                    onClick={() => setActiveTab("cart")} />
            </div>
        </div>
    );
};

export default TabSection;