import logo from '../../assets/logos/logo.svg';

const Navbar = () => {
    return (
        <>
            <nav className='p-4 bg-lime-200 shadow-md'>
                {/* Brand Logo */}
                <div>
                    <figure className='flex items-center gap-2'>
                        <div className='p-2 bg-white bg-opacity-5 shadow-lg rounded-full'>
                            <img className='h-8' src={logo} alt="" />
                        </div>
                        <figcaption className='text-2xl font-bold'>Kanban Board</figcaption>
                    </figure>
                </div>
                {/* Nav items */}
                <div></div>
                {/* User profile and login button */}
                <div></div>
                {/* Mobile */}
                <div></div>
            </nav>
        </>
    );
};

export default Navbar;