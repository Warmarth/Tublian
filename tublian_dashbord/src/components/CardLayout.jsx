function Layout({ children }) {
  return (
    <section className=" rounded-box bg50 overflow-hidden lg:w-11/12 2xl:w-10/12 mx-auto my-4">
      <article className="space-y-3 p-[1rem]">{children}</article>
    </section>
  );
}
export default Layout;
