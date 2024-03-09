import React from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = ({ creds, chatId }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(creds, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }
    setValue("");
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { file: event.target.files[0], text: " " });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="send a message"
        value={value}
        onChange={handleChange}
      />

      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>

      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />

      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
