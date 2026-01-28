import NavBar from '@/components/layout/nav-bar';

/**
 * Main site header with navigation for standard pages (not HomePage)
 */
function Header() {
  return (
    <header className="bg-darkPink-900">
      <div className="container mx-auto px-4">
        <NavBar theme="light" />
      </div>
    </header>
  );
}

export default Header;