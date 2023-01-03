import cn from 'classnames';

import { useLocaleTranslation } from '@utils/i18n';

function NavigationLink({ href, children }) {
  return (
    <a
      className={cn(
        'block py-1 pl-4 transition-all text-gray-500 w-fit',
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
  const lt = useLocaleTranslation();

  return (
    <nav className={className} aria-label="Article navigation">
      <h2 className="font-semibold mb-2">{lt('article.navigation-heading')}</h2>

      <ul>
        {items.map(({ title, id }) => (
          <li key={id}>
            <NavigationLink href={id}>{lt(title)}</NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
