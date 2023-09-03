interface props {
  title?: string;
}

function NavBar({ title = "title" }: props) {
  return (
    <>
      <div className="bg-gray-600">
        <ul className="flex font-normal font-sans ml-2 space-x-4 p-2  text-lg  text-white cursor-pointer text-center items-baseline">
          <li className="text-2xl">{title}</li>
          <li>Home</li>
          <li>Method</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
