export default function Button(props) {
  return (
    <button className={props.className} {...props}>
      <img src={props.src} alt={props.alt} className="m-auto" />
    </button>
  );
}

export function Input({ value, change, className, ...props }) {
  return (
    <input
      type="text"
      placeholder="search"
      className={className}
      value={value}
      onChange={change}
      {...props}
    />
  );
}
