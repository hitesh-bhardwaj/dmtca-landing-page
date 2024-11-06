import { Bot, MessageCircleMore, UserRound } from "lucide-react";
import React, { useState } from "react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="chatbox-holder">
      <button onClick={toggleChat} className="chat-icon bg-black">
        {/* <MessageCircleMore size={32} /> */}
        <div className="chatbox-avatar flex justify-center">
          <img
            src="assets/chatbot-icon.svg"
            alt="Agent Avatar"
            className="avatar !mr-0 inverted-image"
          />
        </div>
      </button>

      {isOpen && (
        <div className="chatbox z-[999]">
          <div className="chatbox-header">
            <div className="chatbox-avatar">
              <img
                src="assets/chatbot-icon.svg"
                alt="Agent Avatar"
                className="avatar"
              />
              {/* <Bot /> */}
              <span>Real Estate Chatbot</span>
            </div>
            <button onClick={toggleChat} className="close-icon">
              <i className="fa fa-times"></i>
            </button>
          </div>

          <div className="chat-messages">
            <div className="chat flex items-center">
              {/* <MessageCircleMore className="mr-3" /> */}
              <div className="chatbox-avatar  rounded-full w-[40px] h-[40px]  flex items-center justify-center mr-3">
                <img
                  src="assets/chatbot-icon.svg"
                  alt="Agent Avatar"
                  className="avatar"
                />
              </div>
              <div className="chat-message bot-message">
                Hi 👋, I am Real Estate Chatbot. How can I help you today?
              </div>
            </div>
            <div className="chat flex items-center justify-end">
              <div className="chat-message user-message">Buy Property 🏡</div>
              <div className="chatbox-avatar  rounded-full w-[40px] h-[40px]  flex items-center justify-center ml-3">
                {/* <img
                  src="assets/chatbot-icon.svg"
                  alt="Agent Avatar"
                  className="avatar"
                /> */}
                <UserRound />
              </div>
            </div>

            <div className="chat flex items-center">
              {/* <MessageCircleMore className="mr-3" /> */}
              <div className="chatbox-avatar rounded-full w-[40px] h-[40px]  flex items-center justify-center mr-3">
                <img
                  src="assets/chatbot-icon.svg"
                  alt="Agent Avatar"
                  className="avatar"
                />
              </div>
              <div className="chat-message bot-message">
                How many bedrooms do you need for your house?
              </div>
            </div>

            {/* <div className="chat-message bot-message"></div> */}
            <div className="chat-options">
              <button className="option-button">2 Bedroom</button>
              <button className="option-button">3 Bedroom</button>
              <button className="option-button">4 Bedroom</button>
            </div>
          </div>

          <div className="chat-input-holder">
            <textarea
              className="chat-input h-[41px] scrollbar-hidden"
              placeholder="Type a message..."
            ></textarea>
            <button className="send-button">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
