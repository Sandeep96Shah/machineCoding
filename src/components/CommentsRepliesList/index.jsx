import React, { useState } from "react";
import { dummyList } from "./constant";
import "./commentRepliesList.css";

const CommentsRepliesList = () => {
  const [list, setList] = useState(dummyList);
  const [comment, setComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [replyId, setReplyId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editComment, setEditComment] = useState("");

  const handleRecursiveReply = (comments, id, content, type) => {
    return comments.map((item) => {
      if (item.id === id) {
        if (type === "add") {
          const newReply = {
            id: crypto.randomUUID(),
            content: content,
            replies: [],
          };
          return {
            ...item,
            replies: [...item.replies, newReply],
          };
        } else if (type === "edit") {
          return {
            ...item,
            content: content,
          };
        } else {
          return null;
        }
      }
      if (item.replies && item.replies.length) {
        return {
          ...item,
          replies: handleRecursiveReply(item.replies, id, content, type),
        };
      }
      return item;
    }).filter(Boolean);
  };

  const addReply = (id) => {
    if (!replyComment) return;
    const updatedList = handleRecursiveReply(list, id, replyComment, "add");
    setList(updatedList);
    setReplyComment("");
    setReplyId(null);
  };

  const handleEditComment = (id) => {
    if (!editComment) return;
    const updatedList = handleRecursiveReply(list, id, editComment, "edit");
    setList(updatedList);
    setEditComment("");
    setEditId(null);
  };

  const handleDeleteComment = (id) => {
    const updatedList = handleRecursiveReply(list, id, null, "delete");
    setList(updatedList);
  };

  const renderList = (comments) => {
    return comments.map(({ id, content, replies }) => {
      return (
        <>
          {content ? (
            <div key={id} className="commentContent">
              {editId === id ? (
                <input
                  type="text"
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                />
              ) : (
                <p className="commentBox">{content}</p>
              )}
              <div className="commentActions">
                {replyId === id ? (
                  <>
                    <input
                      type="text"
                      value={replyComment}
                      onChange={(e) => setReplyComment(e.target.value)}
                    />
                    <button onClick={() => addReply(id)}>Reply</button>
                  </>
                ) : (
                  <button onClick={() => setReplyId(id)}>Reply</button>
                )}
                {editId === id ? (
                  <button onClick={() => handleEditComment(id)}>Update</button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(id);
                      setEditComment(content);
                    }}
                  >
                    Edit
                  </button>
                )}
                <button onClick={() => handleDeleteComment(id)}>Delete</button>
              </div>
              {replies && replies.length > 0 && (
                <div>{renderList(replies)}</div>
              )}
            </div>
          ) : null}
        </>
      );
    });
  };

  const handleAddNewComment = () => {
    const id = crypto.randomUUID();
    const newComment = {
      id,
      content: comment,
      replies: [],
    };
    setList([...list, newComment]);
    setComment("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddNewComment}>Add Comment</button>
      </div>
      {renderList(list)}
    </div>
  );
};

export default CommentsRepliesList;
