import React, { useState, useEffect, useRef } from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import "./bodyView.css";

const BodyView = ({
  qna,
  User,
  renderContent,
  QGLogoInterface,
  loading,
  inputRef,
  handleSend,
}) => {
  const [submitIcon, setSubmitIcon] = useState("./icons/submitDisabled.png");
  const textareaRef = useRef(null);
  const ericssonLogo = "./images/ericsson.png";

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of the Enter key
      if (inputRef.current.value.trim() !== "") {
        handleSend();
      }
    }
  };

  const handleChange = () => {
    if (inputRef.current) {
      const textareaValue = inputRef.current.value.trim();
      inputRef.current.style.height = "auto";

      if (textareaValue === "") {
        // Reset the height to default when the textarea is empty
        inputRef.current.style.height = "auto";
      } else {
        // Adjust the height based on the content
        const scrollHeight = inputRef.current.scrollHeight;
        const maxHeight = 150;

        if (scrollHeight > maxHeight) {
          inputRef.current.style.height = `${maxHeight}px`;
          inputRef.current.style.overflowY = "auto";
        } else {
          inputRef.current.style.height = `${scrollHeight}px`;
          inputRef.current.style.overflowY = "hidden";
        }
      }
    }

    const isTextareaEmpty = inputRef.current.value.trim() === "";
    setSubmitIcon(
      isTextareaEmpty
        ? "./icons/submitDisabled.png"
        : "./icons/submitInactive.png"
    );
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Reset the value to an empty string
    }
  }, [qna, inputRef]);

  const handleMouseEnter = () => {
    // Set the appropriate submit icon when hovering
    if (inputRef.current.value.trim() === "") {
      setSubmitIcon("./icons/submitDisabled.png");
    } else {
      setSubmitIcon("./icons/submitActive.png");
    }
  };

  const handleMouseLeave = () => {
    // Reset submit icon on mouse leave
    if (inputRef.current.value.trim() === "") {
      setSubmitIcon("./icons/submitDisabled.png");
    } else {
      setSubmitIcon("./icons/submitInactive.png");
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto to recalculate scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      // Scroll textarea to the top to expand upwards
      textareaRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [qna]);

  return (
    <mGPTn className="contGPTner">
      
      <ScrollToBottom className="chats"
        initialScrollBehavior="smooth"
        mode="bottom"
        followButtonClassName="chats-arrow"
      >
        {qna.map((qna) => {
          if (qna.from === User) {
            return (
              <div class="userRequest">
                <img
                  src={ericssonLogo}
                  alt=""
                  class="avtar"
                  height="35"
                  width="35"
                />
                <p>{renderContent(qna)}</p>
              </div>
            );
          }
          return (
            <div class="GPTResponse">
              <img
                src={QGLogoInterface}
                alt=""
                class="avtar"
                height="35"
                width="35"
              />
              <p 
                className="duEmail"
              >{renderContent(qna)}</p>
              {console.log(qna.value.rows)}
            </div>
          );
        })}

        </ScrollToBottom>
        <div className="loading">
          {loading && (
            <div class="GPTResponse">
              <img
                src={QGLogoInterface}
                alt=""
                class="avtar"
                height="35"
                width="35"
              />
              <p></p>
            </div>
          )}
        </div>

      <div class="inputBox">
        <textarea
          className="textAreaControl"
          ref={inputRef}
          placeholder="Generate a query to <your input>"
          onKeyDown={handleKeyDown}
          rows="1"
          onChange={handleChange}
        ></textarea>

        <button
          disabled={
            loading ||
            (inputRef &&
              inputRef.current &&
              inputRef.current.value.trim() === "")
          }
          class="btn btn-success"
          onClick={handleSend}
        >
          <img
            src={submitIcon}
            alt=""
            height="30"
            width="30"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </button>
      </div>

      <div className="testResponse"></div>
    </mGPTn>
  );
};

export default BodyView;
