import bannerImg from '../../assets/banner.png'
import badgeIcon from '../../assets/badge-icon.png'
import playIcon from '../../assets/Play.png'

const Banner = () => {
    return (
        <div className="hero pt-5 md:pt-15">
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="rounded-lg shadow-2xl"
                />
                <div className='max-w-[640px] space-y-4'>

                    <span className='badge bg-[#E1E7FF] h-7 rounded-full'>
                        <img src={badgeIcon} alt="" />
                        <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold'>New: AI-Powered Tools Available</p>
                    </span>

                    <h1 className="text-[55px] font-extrabold">Supercharge Your Digital Workflow</h1>
                    <p className="leading-7 ">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className='flex items-center gap-5'>
                        <button className="btn primary-bg text-white rounded-full font-bold">Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-105 "><img src={playIcon} alt="" /> Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;