

function Layout({ children }) {
  return (
    <section className="mt-3  px-3 pt-3 pb-5 rounded-box bg50 overflow-hidden">
      <article className="space-y-3">{children}</article>
    </section>
  );
}
export default Layout;

