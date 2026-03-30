import { FaCheck } from 'react-icons/fa';
import checkMark from '../../../assets/Check.png'

const PriceCard = ({ price }) => {
    console.log(price)
    const { name, tagline, price: cardPrice, duration, features, buttonText, isPopular } = price;

    return (
        // card
        <div className='mt-8 w-[380px] mx-auto relative flex flex-col'>
            <div className={`flex-1 rounded-xl border border-gray-200 shadow-md p-5 space-y-5  ${isPopular ? "primary-bg text-white" : "bg-[#F2F2F2]"} `}>

                {/* conditional badge */}
                {isPopular &&
                    <span className=' flex justify-end absolute -top-3 right-[40%]'>
                        <p className='badge badge-lg bg-[#FEF3C6] text-[#BB4D00] font-bold'>Popular</p>
                    </span>
                }

                {/* 1st part */}
                <div>
                    <h2 className=' text-2xl font-bold'>{name} </h2>
                    <p className={`font-medium ${isPopular ? "text-white/80" : "text-gray-500/80"} `}>{tagline} </p>
                </div>

                {/* 2nd part */}
                <div className='flex items-center'>
                    <h2 className=' text-3xl font-extrabold'>${cardPrice} </h2>
                    <p className={`pt-3 text-lg ${isPopular ? "text-white" : "text-gray-500/80"}`}>/{duration} </p>
                </div>

                {/* 3rd part */}
                <div className=''>
                    {
                        features.map(feature => <span className='flex items-center gap-2'>
                            {isPopular ? <FaCheck /> : <img src={checkMark} alt="" />}
                            <p className={` font-medium ${isPopular ? "text-white/85" : "text-[#627382]"}`}>{feature}</p>
                        </span>)
                    }
                </div>

                {/* last part */}
                <button
                    className={`btn w-full text-[17px] font-extrabold rounded-full py-6 
                    ${isPopular
                            ? "bg-white text-black"
                            : "primary-bg text-white"}`}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PriceCard;