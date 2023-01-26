import cn from 'classnames';

export default function Callout({ children }) {
  return (
    <div
      className={cn(
        'bg-blue-100 text-white p-6 rounded-md text-sm',
        'print:border-[1px] print:border-black',
      )}
    >
      {children}
    </div>
  );
}
