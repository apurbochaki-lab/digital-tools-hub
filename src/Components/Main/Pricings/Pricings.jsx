import { use } from "react";
import PriceCard from "./PriceCard";

const pricingsData = async() => {
    const res = await fetch("/pricingsData.json");
    return res.json();
}
const pricingsPromise = pricingsData()

const Pricings = () => {
    const pricings = use(pricingsPromise);
    // console.log(pricings)

    return (
        <section className="mb-30 container mx-auto">
            <div className="text-center space-y-3">
                <h2 className=" text-5xl font-extrabold">Simple, Transparent Pricing</h2>
                <p className=" text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            {/* card container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    pricings.map(price => <PriceCard price={price}></PriceCard> )
                }
            </div>
        </section>
    );
};

export default Pricings;