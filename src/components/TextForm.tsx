import React, { useState } from "react";

interface props {
  name: string;
  username: string;
  tweetLength: number;
  onTweet: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextForm({
  name,
  username,
  onTweet,
  handleOnChange,
  tweetLength,
}: props) {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-8">
        <div className="flex">
          <img
            src="https://avatars.githubusercontent.com/u/66772290?v=4"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-gray-600">{username}</p>
          </div>
        </div>
        <textarea
          className="mt-4 border rounded p-2 w-full"
          placeholder="What's happening?"
          onChange={handleOnChange}
        ></textarea>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500 text-sm">
            {tweetLength + " characters remaining"}
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            onClick={onTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
