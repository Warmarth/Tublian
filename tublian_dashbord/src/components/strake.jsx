export default function Field() {
  return (
    <section className="flex  gap-3 items-center justify-start no-wrap capitalize">
      <p className="text-p btn bg axe hover:text-slate-600"> discover</p>
      <span className="btn bg50 border-none  text-p hover:text-slate-600">
        {" "}
        frontend developer
      </span>
      <span className="btn bg50  border-none text-p hover:text-slate-600">
        {" "}
        backend developer
      </span>
      <span className="btn bg50  border-none text-p hover:text-slate-600">
        {" "}
        software developer
      </span>
    </section>
  );
}
