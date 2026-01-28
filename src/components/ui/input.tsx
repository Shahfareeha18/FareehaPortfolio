/**
 * Input component for consistent form styling across the Syeda Fareeha Portfolio application
 * @param {Object} props - Component props
 * @param {string} [props.label] - Input label text
 * @param {string} [props.error] - Error message to display
 * @param {string} [props.type='text'] - Input type
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.value] - Input value
 * @param {Function} [props.onChange] - Change handler
 * @param {string} [props.name] - Input name
 * @param {boolean} [props.required=false] - Whether input is required
 * @param {boolean} [props.disabled=false] - Whether input is disabled
 * @param {string} [props.className=''] - Additional CSS classes
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: string;
  className?: string;
}

function Input({
  label,
  error,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required = false,
  disabled = false,
  className = '',
  ...props
}: InputProps) {
  const baseClasses = 'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseClasses} ${error ? 'border-red-400 focus:border-red-400' : ''} ${className}`;

  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-white text-sm font-medium mb-2">
          {label}
          {required && <span className="text-pink-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={classes}
        {...props}
      />
      {error && (
        <p className="text-red-300 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}

export default Input;