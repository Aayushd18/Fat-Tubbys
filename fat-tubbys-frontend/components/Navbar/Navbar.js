export default function Navbar({ renderButton }) {
  return (
    <div className="px-11 py-6 shadow">
      <nav className="flex justify-between">
        <div className="text-4xl text-blue-300 font-extrabold">Fat Tubby's</div>
        <div>
         {renderButton()}
        </div>
      </nav>
    </div>
  );
}
