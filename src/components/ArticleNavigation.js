import cn from 'classnames';

function NavigationLink({ href, children }) {
  return (
    <a
      className={cn(
        'block py-1 pl-4 transition-all text-gray-500',
        'border-l-[1px] border-gray-300',
        'hocus:text-black hocus:border-l-[4px] hocus:border-blue',
      )}
      href={href}
    >
      {children}
    </a>
  );
}

export default function ArticleNavigation({ className, items }) {
  return (
    <nav className={className} aria-label="Article navigation">
      <h2 className="font-semibold mb-2">Jump To</h2>

      <ul>
        {items.map(({ title, id }) => (
          <li key={id}>
            <NavigationLink href={id}>{title}</NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
