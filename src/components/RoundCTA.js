import cn from 'classnames';
import Link from 'next/link';

export default function RoundCTA({ className, children, ...rest }) {
  return (
    <Link
      className={cn(
        'flex items-center justify-center',
        'rounded-full aspect-square',
        'border-blue border-[1px]',
        'transition hocus:text-white hocus:bg-blue',
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
