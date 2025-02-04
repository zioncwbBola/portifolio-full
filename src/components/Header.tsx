import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-primary text-primary-content">
      <div className="container mx-auto navbar">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            ZionCWB
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="#services">Serviços</Link>
            </li>
            <li>
              <Link href="#contact">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

