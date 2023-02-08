import cn from 'classnames';

export default function Container({ children, className }) {
  return <div className={cn('hv-site-padding mx-auto 2xl:container', className)}>{children}</div>;
}
