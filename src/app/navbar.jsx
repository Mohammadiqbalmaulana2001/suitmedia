
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="fixed top-0 w-full z-10 bg-orange-600 bg-opacity-75 transition-transform duration-300 transform translate-y-0">
      <div className="container mx-5 py-4">
        <div className="flex justify-between items-center mx-10 my-2">
          <div className="text-xl font-bold text-white">Logo</div>
          <ul className="flex flex-wrap space-x-6 text-white ">
            <li className='hover:underline underline-offset-4'>
              <Link href="/">Work</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link href="/about">About</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link href="/services">Services</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link href="/ideas">Ideas</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link href="/careers">Careers</Link>
            </li>
            <li className='hover:underline underline-offset-4'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
