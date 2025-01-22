const Button = ({ label, variant = 'dark' }) => {
  const isDark = variant === 'dark'
  const isTransparent = variant === 'transparent'

  const textColor = isTransparent
    ? 'text-white'
    : isDark
    ? 'text-white'
    : 'text-black'
  const bgColor = isTransparent
    ? 'bg-transparent'
    : isDark
    ? 'bg-black'
    : 'bg-white'
  const borderColor = isTransparent
    ? 'border-white'
    : isDark
    ? 'border-white'
    : 'border-black'

  return (
    <button
      className={`text-center text-sm-button sm:text-button font-medium py-4 w-full border ${textColor} ${bgColor} ${borderColor} hover:opacity-80 transition`}
    >
      {label}
    </button>
  )
}

export default Button
