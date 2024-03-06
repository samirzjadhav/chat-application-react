import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avater"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}

      {message.attachments && message.attachments.length > 0  (
           <img
           src={message.attachment[0].file}
           className="message-image"
           alt="message-attachment"
           style={{ float: "right" }}
         />
      )}
    </div>
  );
};

export default TheirMessage;
