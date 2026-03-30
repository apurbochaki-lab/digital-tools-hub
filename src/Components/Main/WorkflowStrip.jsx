const WorkflowStrip = () => {
    return (
        <section className='primary-bg'>
            <div className='container mx-auto py-20 space-y-5 text-center text-white'>
                <div className=' '>
                    <h2 className=' text-4xl font-bold pb-5'>Ready to Transform Your Workflow?</h2>
                    <p className='text-white/80'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                </div>

                <div className='flex justify-center gap-3 '>
                    <button className="btn rounded-full font-extrabold">
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span>
                    </button>
                    <button className="btn btn-outline rounded-full font-extrabold">View Pricing</button>
                </div>

                <p className='text-white/80'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </section>
    );
};

export default WorkflowStrip;