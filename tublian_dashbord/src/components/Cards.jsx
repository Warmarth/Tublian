export default function Card(props) {
  return (
    <div className="border w-[25rem] h-[12rem] rounded-xl py-3 pl-5 text-[.9rem] space-y-2 text-p font-mono">
      <span className="border rounded-2xl px-4 py-1">Other</span>
      <h2 className="text-lg capitalize">{props.title}</h2>
      <p className="text-s">{props.description}</p>
      <p className="text-s">
        latest update: <span className="text-p"> tue,dec 13, 2022</span>{" "}
      </p>
    </div>
  );
}
