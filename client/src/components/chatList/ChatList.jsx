import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">Dashboard</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Fun AI</Link>
      <Link to="/">Contacts</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
        <Link to="/">My Chat Title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to FUN AI Pro</span>
          <span>Get ulimate access to all the features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
