export default function Button({ text, variant }) {
  const baseClasses = "px-4 py-2 rounded font-semibold";
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-black",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {text}
    </button>
    );
}