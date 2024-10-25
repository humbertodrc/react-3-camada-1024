const LINKS = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
  { href: '/login', text: 'Login' },
  { href: '/register', text: 'Register' },
  { href: '/dashboard', text: 'Dashboard' },
]



const Navbar = () => {
  return (
    <nav>
      <ul>
        {LINKS.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar