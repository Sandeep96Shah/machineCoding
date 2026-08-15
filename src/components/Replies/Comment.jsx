import { useState } from "react";

const Comment = ({ comment, onReply, onEdit, onDelete }) => {
  const [newReply, setNewReply] = useState("");
  const [editReply, setEditReply] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleOpenAddReply = () => {
    setIsAddMode(true);
  };

  const handleOnAddChange = (e) => {
    setNewReply(e.target.value);
  };
  const handleOnAdd = () => {
    if(!newReply.trim()) return;
    onReply(comment.id, newReply);
    setIsAddMode(false);
    setNewReply("");
  };

  const handleOnCloseAdd = () => {
    setIsAddMode(false);
    setNewReply("");
  };

  const handleOpenEditReply = () => {
    setEditReply(comment.text);
    setIsEditMode(true);
  };

  const handleOnEdit = () => {
    if(!editReply.trim()) return;
    onEdit(comment.id, editReply);
    setIsEditMode(false);
    setEditReply("");
  };

  const handleOnEditChange = (e) => {
    setEditReply(e.target.value);
  };

  const handleCloseEditReply = () => {
    setIsEditMode(false);
    setEditReply("");
  };

  return (
    <div
      style={{
        marginLeft: "20px",
        marginTop: "10px",
        borderLeft: "1px solid #ccc",
        paddingLeft: "10px",
      }}
    >
      {isEditMode ? (
        <div>
          <input
            value={editReply}
            onChange={handleOnEditChange}
          />
          <button
            onClick={handleOnEdit}
          >
            Save
          </button>
          <button onClick={handleCloseEditReply}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{comment.text}</p>
          <button onClick={handleOpenAddReply}>Reply</button>
          <button onClick={() => handleOpenEditReply(comment.id)}>Edit</button>
          <button onClick={() => onDelete(comment.id)}>Delete</button>
          {isAddMode && (
            <div>
              <input
                value={newReply}
                onChange={handleOnAddChange}
              />
              <button
                onClick={handleOnAdd}
              >
                Save
              </button>
              <button onClick={handleOnCloseAdd}>Cancel</button>
            </div>
          )}
        </div>
      )}
      {comment?.replies?.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          onEdit={onEdit}
          onDelete={onDelete}
          onReply={onReply}
        />
      ))}
    </div>
  );
};

export default Comment;
