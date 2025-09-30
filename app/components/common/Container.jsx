export default function Container({ children }) {
  return (
    <div className="container mx-auto px-3 xl:px-6 2xl:px-10 ">
      {children}
    </div>
  );
}