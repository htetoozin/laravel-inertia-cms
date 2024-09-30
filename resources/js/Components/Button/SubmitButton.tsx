import cx from 'classnames';

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

export default function SubmitButton({
  name,
  loading,
  className,
  children,
  ...props
}: SubmitButtonProps) {
  const classNames = cx(
    'flex items-center',
    'focus:outline-none',
    {
      'pointer-events-none bg-opacity-75 select-none': loading
    },
    className
  );
  return (
    <button disabled={loading} className={classNames} {...props}>
      {loading && <div className="mr-2 btn-spinner" />}
      {!loading ? name : 'Loading'}
    </button>
  );
}
