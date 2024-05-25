export default function Button(props) {
  return (
    <button className={props.className} {...props}>
      <img src={props.src} alt={props.alt} className="m-auto" />
    </button>
  );
}

export function Input({ value, change }) {
  return (
    <input
      type="text"
      placeholder="search"
      className="w-full pt-1 pb-1 pl-3 rounded text-xl border-none outline-none bg50"
      value={value}
      onChange={change}
    />
  );
}
