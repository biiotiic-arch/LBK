export function Button({ asChild = false, className = "", onClick, children }) {
  if (asChild && children?.type === 'a') {
    const a = children;
    return (
      <a {...a.props} className={`inline-flex items-center px-3 py-2 rounded-2xl shadow hover:shadow-md transition ${a.props.className || ''} bg-gray-900 text-white ${className}`} />
    );
  }
  return (
    <button onClick={onClick} className={`inline-flex items-center px-3 py-2 rounded-2xl shadow hover:shadow-md transition bg-gray-900 text-white ${className}`}>
      {children}
    </button>
  );
}
