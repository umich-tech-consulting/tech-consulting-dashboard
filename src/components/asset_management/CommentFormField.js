const CommentFormField = ({ setComment, comment }) => {
    const handleCommentChange = (e) => {
        setComment(e.target.value);
      };

  return (
    <>
      <div className="am-comments">
        <label htmlFor="comments">Comments (optional)</label>
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
