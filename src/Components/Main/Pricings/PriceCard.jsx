import { FaCheck } from 'react-icons/fa';
import checkMark from '../../../assets/Check.png'

const PriceCard = ({ price }) => {
    console.log(price)
    const { name, tagline, price: cardPrice, duration, features, buttonText, isPopular } = price;

    return (
        // card
        <div className={`rounded-xl border border-gray-200 shadow-md p-8 ${isPopular ? "primary-bg text-white" : "bg-[#F2F2F2]/65"} `}>

            {/* conditional badge */}
            {/* -right-[40%] -top-[12%] */}
            {isPopular &&
                <div className='relative'> 
                    <p className='badge badge-lg bg-[#FEF3C6] text-[#BB4D00] font-bold absolute -top-10 right-[40%]'>Popular</p>
                </div>
            }

            {/* Card Body */}
            <div className='space-y-5'>
                {/* 1st part */}
                <div className=''>
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
                    <span className={`${isPopular && "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"}`}>{buttonText}</span>
                </button>
            </div>
        </div>

    );
};

export default PriceCard;