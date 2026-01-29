const Navbar = () => {
  return (
    <nav className='bg-purple-900 flex flex-col md:flex-row justify-between items-center px-20 py-3 text-white'>
      <div className='font-bold'>
        <h1>
          <span className='text-purple-200'>&lt;</span>
          <span>Key</span>
          <span className='text-purple-200'>Save / &gt;</span>
        </h1>
      </div>

      <ul className='flex justify-center items-center gap-5'>
        <li className='hover:font-bold'>
          <a href="/about" className="hover:underline">
            About Developer
          </a>
        </li>
        <li className='hover:font-bold'>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
