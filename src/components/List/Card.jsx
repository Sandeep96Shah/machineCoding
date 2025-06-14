import { memo } from "react";
import "./styles.css";

const Card = memo(({ title, userId, tags, id }) => {
  return (
    <div key={id} className="card">
      <p className="title">{title}</p>
      <div className="tags-container">
        {tags?.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>
      <p className="user-id">By: {userId}</p>
    </div>
  );
});

export default Card;
