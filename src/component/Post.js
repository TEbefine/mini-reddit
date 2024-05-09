import React from "react";

function Post({ id, title, author, postPic, num_comments, score, postTime }) {
  function timeSince(timeInEpoch) {
    const now = Date.now();
    const difference = now - timeInEpoch * 1000; // Convert epoch to milliseconds

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return years + " year" + (years > 1 ? "s" : "") + " ago";
    } else if (days > 0) {
      return days + " day" + (days > 1 ? "s" : "") + " ago";
    } else if (hours > 0) {
      return hours + " hour" + (hours > 1 ? "s" : "") + " ago";
    } else if (minutes > 0) {
      return minutes + " minute" + (minutes > 1 ? "s" : "") + " ago";
    } else {
      return "just now";
    }
  }

  const timeDifference = timeSince(postTime);

  function formatNumber(number) {
    if (number >= 1000) {
      const formattedNumber = number / 1000;
      return `${formattedNumber.toFixed(1)}k`;
    }
    return number.toString();
  }

  const formattedValue = formatNumber(parseInt(score, 10));

  const formattedCommentValue = formatNumber(parseInt(num_comments, 10));

  return (
    <div className="showPost">
      <div className="post">
        <div className="upDown">
          <button>
            <img
              className="arrowUp"
              src="/img/keyboard_arrow_up.png"
              alt="keyboard arrow up"
              width="45px"
            />
            <img
              className="arrowDropUp"
              src="/img/arrow_drop_up.png"
              alt="arrow drop up"
              width="45px"
            />
          </button>
          <div>{formattedValue}</div>
          <button>
            <img
              className="arrowDown"
              src="/img/keyboard_arrow_down.png"
              alt="keyboard arrow down"
              width="45px"
            />
            <img
              className="arrowDropDown"
              src="/img/arrow_drop_down.png"
              alt="arrow drop down"
              width="45px"
            />
          </button>
        </div>
        <section className="mainPost">
          <h2 className="headText">{title}</h2>
          <img src={postPic} alt="post pictuer" className="mainPic" />
          <hr />
          <div className="subPost">
            <p>
              Post by <span>{author}</span>
            </p>
            <p>{timeDifference}</p>
            <div className="commentButton">
              <img
                src="/img/chat_bubble.png"
                alt="keyboard arrow down"
                width="30px"
              />
              <p>{formattedCommentValue}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Post;
