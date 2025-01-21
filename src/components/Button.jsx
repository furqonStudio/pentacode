const Button = ({ label, variant = 'dark' }) => {
  const isDark = variant === 'dark'
  const textColor = isDark ? 'text-white' : 'text-black'
  const bgColor = isDark ? 'bg-black' : 'bg-white'
  const borderColor = isDark ? 'border-white' : 'border-black'

  return (
    <button
      className={`text-center text-sm-button sm:text-button font-medium py-4 w-full border ${textColor} ${bgColor} ${borderColor} hover:opacity-80 transition`}
    >
      {label}
    </button>
  )
}

export default Button
