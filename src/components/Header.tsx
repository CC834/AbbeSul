const navigation = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="logo" href="#home">
          Your Name
        </a>

        <nav aria-label="Primary navigation">
          <ul className="navigation">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
