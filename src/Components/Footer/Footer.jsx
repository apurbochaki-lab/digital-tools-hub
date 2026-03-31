import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className=' bg-[#101727] text-white'>
            <div className='container mx-auto pt-30 '>

                <div className='p-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center sm:text-left'>
                    <div className=' space-y-4'>
                        <h2 className=' text-4xl font-bold'>DigiTools</h2>
                        <p className='text-white/80 p-3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className=''>
                        <h2 className=' text-xl font-medium mb-4'>Product</h2>
                        <ul className='space-y-4 text-white/80'>
                            <li><a href='#'>Features</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Templates</a></li>
                            <li><a href='#'>Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-medium mb-4'>Company</h2>
                        <ul className='space-y-4 text-white/80'>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Careers</a></li>
                            <li><a href='#'>Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-medium mb-4'>Resources</h2>
                        <ul className='space-y-4 text-white/80'>
                            <li><a href='#'>Documentation</a></li>
                            <li><a href='#'>Help Center</a></li>
                            <li><a href='#'>Community</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-xl font-medium mb-4'>Social Links</h2>
                        <div className=' text-black flex items-center gap-4 max-w-40 mx-auto sm:max-w-auto sm:mx-0'>
                            <a href="#"><span className='bg-white h-10 w-10 rounded-full text-2xl flex justify-center items-center '><AiFillInstagram /></span></a>

                            <a href="#"><span className='bg-white h-10 w-10 rounded-full text-2xl flex justify-center items-center'><FaFacebookSquare /></span></a>

                            <a href="#"><span className='bg-white h-10 w-10 rounded-full text-2xl flex justify-center items-center'><FaXTwitter /></span></a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 p-3 border-t pt-7 mt-10 text-[#FAFAFA]/55 flex flex-col space-y-4 text-center sm:text-left sm:flex-row justify-between pb-7">
                    <p>© 2026 Digitools. All rights reserved.</p>

                    <ul className='flex gap-6 mx-auto sm:mx-0'>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Terms of Service</a></li>
                        <li><a href='#'>Cookies</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;