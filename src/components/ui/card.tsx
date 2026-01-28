/**
 * Card component for consistent container styling across the Syeda Fareeha Portfolio application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {'default'|'glass'|'solid'} [props.variant='default'] - Card style variant
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {'none'|'small'|'default'|'large'} [props.padding='default'] - Padding size
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'solid';
  className?: string;
  padding?: 'none' | 'small' | 'default' | 'large';
}

function Card({
  children,
  variant = 'default',
  className = '',
  padding = 'default',
  ...props
}: CardProps) {
  const baseClasses = 'rounded-3xl overflow-hidden';

  const variantClasses = {
    default: 'bg-white shadow-lg border border-gray-200',
    glass: 'bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10',
    solid: 'bg-darkPink-800 border border-darkPink-700'
  };

  const paddingClasses = {
    none: '',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Card;