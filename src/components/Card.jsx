export default function Card({
  children,
  className = "card flex rounded-md shadow-md flex-col items-center gap-1 p-5 w-1/2 bg-slate-900",
}) {
  return <div className={className}>{children}</div>;
}
