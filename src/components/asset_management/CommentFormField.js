import comments_icon from "../../icons/asset-management/comments_icon.svg"

const CommentFormField = ({ setComment, comment }) => {
    const handleCommentChange = (e) => {
        setComment(e.target.value);
      };

  return (
    <>
      <div className="am-comments">
        <div className="am-comments-header">
          <img src={comments_icon} alt="Uniqname Icon" />
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
