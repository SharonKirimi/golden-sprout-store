export function Button({ children, className }) {
  return (
    <button className={`rounded-full px-4 py-2 font-semibold ${className}`}>
      {children}
    </button>
  );
}