import { use } from "react";

const stepsData = async () => {
    const res = await fetch("/stepsData.json");
    return res.json();
}

const stepsPromise = stepsData();

const Steps = () => {
    const steps = use(stepsPromise);
    // console.log(steps)
    return (
        <section className="mt-3 md:mt-30 bg-[#F9FAFC]">
            <div className="container mx-auto space-y-8 mb-20 py-30">
                <div className="text-center space-y-3">
                    <h2 className=" text-5xl font-extrabold">Get Started in 3 Steps</h2>
                    <p className="text-lg font-medium text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* Card Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Card */}
                    {
                        steps.map(step => <div key={step.id} className="border border-gray-500/40 shadow-md max-w-[380px] mx-auto h-auto p-5 rounded-xl">
                            <span className="flex justify-end">
                                <p className="primary-bg w-10 h-10 rounded-full text-white font-bold flex justify-center items-center">{step.step}</p>
                            </span>

                            <div className="flex justify-center items-center flex-col space-y-3 py-10 mb-5">

                                <span className=" bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 w-23 h-23 rounded-full flex justify-center items-center ">
                                    <img className="p-5" src={step.image} alt="" />
                                </span>
                                <h2 className=" text-2xl font-bold">{step.title}</h2>
                                <p className="text-center font-medium text-black/70">{step.description}</p>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Steps;