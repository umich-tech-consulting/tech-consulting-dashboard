import { Commentsicon } from "./CommentsFormFieldSvg";
const CommentFormField = ({ setComment, comment }) => {
    const handleCommentChange = (e) => {
        setComment(e.target.value);
      };

  return (
    <>
      <div className="am-comments">
        <div className="am-comments-header">
          <Commentsicon />
          <label htmlFor="comments">Comments (optional)</label>
        </div>
        <textarea className="am-action-form-default"
          type="text"
          id="comments"
          name="comments"
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
    </>
  );
};

export default CommentFormField;
