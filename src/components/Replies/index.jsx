import {useState} from 'react';
import Comment from './Comment';
import { data } from './constant';

const Replies = () => {
    const [commentsReplies, setCommentsReplies] = useState(data);
    const [newComment, setNewComment] = useState("");

    const createNewNode = (text) => {
        return {
            id: crypto.randomUUID(),
            text: text,
            replies: []
        };
    }

    const handleAddComment = () => {
        if(newComment.trim() === "") return;
        const newCommentDetails = createNewNode(newComment);
        setCommentsReplies([...commentsReplies, newCommentDetails]);
        setNewComment("");
    }

    const addReply = (nodes, parentId, text) => {
        return nodes.map((node) => {
            if(node.id === parentId){
                return{
                    ...node,
                    replies: [...node.replies, createNewNode(text)]
                }
            }
            return {
                ...node,
                replies: addReply(node.replies, parentId, text)
            }
        })
    }

    const handleAddReply = (parentId, text) => {
        if(text.trim() === "") return;
        setCommentsReplies(prev => addReply(prev, parentId, text));
    }

    const editReply = (nodes, currentId, newText) => {
        return nodes.map((node) => {
            if(node.id === currentId){
                return {
                    ...node,
                    text: newText
                }
            }
            return {
                ...node,
                replies: editReply(node.replies, currentId, newText)
            }
        })
    }

    const handleOnEdit = (id, newText) => {
        if(!newText.trim()) return;
        setCommentsReplies(prev => editReply(prev, id, newText));
    }

    const deleteComment = (nodes, id) => {
        return nodes.filter((node) => node.id !== id).map((node) => ({
            ...node,
            replies: deleteComment(node.replies, id)
        }))
    }

    const handleOnDelete = (id) => {
        setCommentsReplies(prev => deleteComment(prev, id));
    }


    return (
        <div>
            <input value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            <button onClick={handleAddComment}>Add Comment</button>
          {commentsReplies.map((comment) => (
            <Comment key={comment.id} comment={comment} onDelete={handleOnDelete} onReply={handleAddReply} onEdit={handleOnEdit} />
          ))}
        </div>
    )
}

export default Replies;