import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ChatEngine
        height="100vh"
        projectID="ce196766-dfea-44ff-82d7-488294f93ac6"
        userName="john"
        userSecret="123456"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3")
        }
      />
    </div>
  );
}

export default App;
