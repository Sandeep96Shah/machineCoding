import { useState } from "react";
import { HeartIcon, SpinnerIcon } from "./icons";
import "./likedButton.css";

const LikedButton = () =>  {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleApiCall = async () => {
    try {
      setIsPending(true);
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: isLiked ? "unlike" : "like",
          }),
        },
      );

      if (!response.ok) {
        setIsError(true);
      } else {
        setIsError(false);
        setIsLiked((prevValue) => !prevValue);
      }
    } catch (err) {
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleApiCall}
        className={`btn ${isLiked ? "liked" : "default"} ${isHover ? "default-liked-hover" : ""}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isPending ? <SpinnerIcon /> : <HeartIcon />} Like
      </button>
    </div>
  );
}

export default LikedButton
