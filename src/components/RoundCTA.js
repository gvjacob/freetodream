import cn from 'classnames';
import Link from 'next/link';

export default function RoundCTA({ className, children, variant = 'secondary', ...rest }) {
  return (
    <Link
      className={cn(
        'flex items-center justify-center',
        'rounded-full aspect-square',
        'border-blue border-[1px]',
        variant === 'secondary' && 'transition hocus:text-white hocus:bg-blue-dark',
        variant === 'primary' && 'bg-blue text-white transition hocus:bg-blue-dark',
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
