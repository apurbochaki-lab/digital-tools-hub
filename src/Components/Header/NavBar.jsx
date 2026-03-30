import cartIcon from '../../assets/products/shopping-cart.png'

const NavBar = ({ carts }) => {
    return (
        <section className='bg-base-100 shadow-sm'>
            <div className='container mx-auto'>

                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a href='#'>Products</a></li>
                                <li><a href='#'>Features</a></li>
                                <li><a href='#'>Pricing</a></li>
                                <li><a href='#'>Testimonials</a></li>
                                <li><a href='#'>FAQ</a></li>
                            </ul>
                        </div>
                        <a href='#' className="text-xl md:text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent py-2">DigiTools</a>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-bold">
                            <li><a href='#'>Products</a></li>
                            <li><a href='#'>Features</a></li>
                            <li><a href='#'>Pricing</a></li>
                            <li><a href='#'>Testimonials</a></li>
                            <li><a href='#'>FAQ</a></li>

                        </ul>
                    </div>

                    <div className="navbar-end gap-5">
                        <div className='relative'>
                            <img className='w-5 h-auto' src={cartIcon} />

                            {carts.length > 0 &&
                                <div className='absolute top-[-10px] right-[-11px] bg-red-400 w-5 h-5 rounded-full flex justify-center items-center'>
                                    <p className='text-white font-semibold'>{carts.length}</p>
                                </div>}

                        </div>
                        <button className=' font-semibold'>Login</button>
                        <a className="btn primary-bg text-white rounded-full font-bold">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;