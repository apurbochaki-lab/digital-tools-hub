const InfoStrip = () => {
    return (
        <section className='primary-bg'>
            <div className='my-10 container mx-auto'>
                <div className='grid grid-cols-3 justify-center items-center gap-20 p-10 text-white text-center'>
                    <div className='space-y-2 md:border-r border-r-white/70'>
                        <h2 className='text-4xl font-extrabold'>50K+</h2>
                        <p className='text-[#FFFFFF]/80'>Active Users</p>
                    </div>
                    <div className='space-y-2 md:border-r border-r-white/70'>
                        <h2 className='text-4xl font-extrabold'>200+</h2>
                        <p className='text-[#FFFFFF]/80'>Premium Tools</p>
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-4xl font-extrabold'>4.9</h2>
                        <p className='text-[#FFFFFF]/80'>Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoStrip;