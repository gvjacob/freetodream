import cn from 'classnames';

function NavigationLink({ href, children, isActive }) {
  return (
    <a
      className={cn(
        'block py-1 pl-4 transition-[border]',
        isActive ? 'border-l-[4px] border-black' : 'border-l-[1px] border-gray-500',
      )}
      href={href}
    >
      {children}
    </a>
  );
}

export default function ArticleNavigation({ className }) {
  return (
    <nav className={className} aria-label="Article navigation">
      <h2 className="font-semibold mb-2">Jump To</h2>

      <ul>
        <li>
          <NavigationLink href="#overview" isActive>
            Overview
          </NavigationLink>
        </li>
        <li>
          <NavigationLink href="#frequently-asked-questions">
            Frequently Asked Questions
          </NavigationLink>
        </li>
      </ul>
    </nav>
  );
}
