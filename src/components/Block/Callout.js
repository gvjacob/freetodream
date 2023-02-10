import cn from 'classnames';

export default function Callout({ children }) {
  return (
    <div
      className={cn(
        'rounded-md bg-blue-100 p-6 text-sm text-white xl:text-lg',
        'print:border-[1px] print:border-black',
      )}
    >
      {children}
    </div>
  );
}
