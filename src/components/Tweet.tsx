interface props {
  name: string;
  username: string;
  src: string;
  content: string;
}

export default function Tweet({ name, username, src, content }: props) {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-8">
        <div className="flex">
          <img src={src} alt="User Avatar" className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-gray-600">{username}</p>
          </div>
        </div>
        <p className="mt-4">{content}</p>
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Like
          </a>
          <a href="#" className="text-blue-500 hover:underline ml-4">
            Retweet
          </a>
        </div>
      </div>
    </div>
  );
}
