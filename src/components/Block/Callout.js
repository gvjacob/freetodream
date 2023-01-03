import cn from 'classnames';

export default function Callout({ children }) {
  return (
    <div className={cn('bg-iron p-6 rounded-md text-sm', 'print:border-[1px] print:border-black')}>
      {children}
    </div>
  );
}
