export default function Button(props) {
  return (
    <button className={props.className} {...props}>
      <img src={props.src} alt={props.alt} className="m-auto" />{props.Butt}
    </button>
  );
}

export function Input({ value, change, className , placeholder, ...props }) {
  return (
    <input
      type="text"
      className={className}
      value={value}
      placeholder={props.placeholder}
      onChange={change}
      {...props}
    />
  );
}
