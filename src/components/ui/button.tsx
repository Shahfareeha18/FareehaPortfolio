/**
 * Button component for consistent styling across the Syeda Fareeha Portfolio application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary'|'outline'|'ghost'} [props.variant='primary'] - Button style variant
 * @param {'small'|'default'|'large'} [props.size='default'] - Button size
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  size?: 'small' | 'default' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-40 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-pink-500 to-darkPink-600 hover:from-pink-600 hover:to-darkPink-700 text-white focus:ring-pink-400',
    outline: 'border-2 border-pink-500 text-pink-500 hover:bg-pink-50 focus:ring-pink-400',
    ghost: 'text-pink-500 hover:bg-pink-50 focus:ring-pink-400',
    white: 'bg-white text-darkPink-900 hover:bg-gray-50 focus:ring-gray-400'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;