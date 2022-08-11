import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-5 h-16 border-b-2">
      <span className="text-xl font-semibold">
        <strong className="text-blue-500">USER</strong>LIST
      </span>
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/">
              <span className="font-semibold hover:cursor-pointer hover:text-blue-500">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="font-semibold hover:cursor-pointer hover:text-blue-500">
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="font-semibold hover:cursor-pointer hover:text-blue-500">
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <button className="flex items-center justify-center h-9 w-20 font-semibold text-white text-sm bg-blue-500 rounded-lg hover:opacity-90">
            Login
          </button>
          <button className="flex items-center justify-center h-9 w-20 px-5 font-semibold text-blue-500 text-sm border-2 border-blue-500 rounded-lg hover:opacity-90">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
