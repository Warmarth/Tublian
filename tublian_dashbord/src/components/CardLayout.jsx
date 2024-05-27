

function Layout({ children }) {
  return (
    <section className=" rounded-box bg50 overflow-hidden">
      <article className="space-y-3 mx-3">{children}</article>
    </section>
  );
}
export default Layout;

