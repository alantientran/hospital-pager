import React from "react";
import { StreamChat } from "stream-chat";
import { Channel, Chat } from "stream-chat-react";
import cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer } from "./components";

const apiKey = "zypmt4hkmq4q";
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      {/* The Chat component requires a client prop which is an instance of
      StreamChat */}
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
      <p>App</p>
    </div>
  );
};

export default App;
