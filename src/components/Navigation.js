import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Japanese Learning</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/language">
              <a className="hover:underline">Language</a>
            </Link>
          </li>
          <li>
            <Link href="/games">
              <a className="hover:underline">Games</a>
            </Link>
          </li>
          <li>
            <Link href="/culture">
              <a className="hover:underline">Culture</a>
            </Link>
          </li>
          <li>
            <Link href="/pop-culture">
              <a className="hover:underline">Pop Culture</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
