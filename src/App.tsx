import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Tweet from "./components/Tweet";
import { useState } from "react";
import { ReactNode } from "react";

export default function App() {
  const [tweetContent, setTweetContent] = useState("");
  const tweet = {
    name: "Alok Gupta",
    username: "aialok",
    src: "https://avatars.githubusercontent.com/u/66772290?v=4",
    content: tweetContent,
  };

  const [tweetArr, setTweetArr] = useState<React.ReactElement[]>([]);

  const addTweet = () => {
    const newTweet = (
      <Tweet
        key={tweetArr.length}
        name={tweet.name}
        username={tweet.username}
        src={tweet.src}
        content={tweetContent}
      />
    );
    setTweetArr((prevArr) => [...prevArr, newTweet]);
  };

  const [tweetLength, settweetLength] = useState(140);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(e.target.value);
    const newText = e.target.value;
    const newTweetLength = 140 - newText.length;
    settweetLength(newTweetLength);
    // console.log(textLength);
    setTweetContent(newText);
    // console.log(newText);
  };

  return (
    <>
      <div>
        <NavBar title="Twitter" />
        <TextForm
          name="Alok Gupta"
          username="aialok"
          onTweet={addTweet}
          handleOnChange={handleChange}
          tweetLength={tweetLength}
        />
      </div>
      <div>{tweetArr}</div>
    </>
  );
}
