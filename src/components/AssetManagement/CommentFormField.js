const CommentFormField = ({ setComment, comment }) => {
    const handleCommentChange = (e) => {
        setComment(e.target.value);
      };

  return (
    <>
      <div className="am-comments">
        <div className="am-comments-header">
          <svg className="h-[14px] w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" role="img" aria-labelledby="commentsicon">
            <title id="commentsicon">Comments Icon</title>
            <path className="stroke-neutral-9 dark:stroke-neutral-2" stroke-linecap="round" stroke-linejoin="round" stroke-width=".875" d="m9.83617 2.61756.98413-.98467c.2051-.20514.4833-.32039.7735-.32039.2901 0 .5683.11525.7735.32039.2051.20515.3203.48339.3203.7735 0 .29012-.1152.56836-.3203.7735L6.17283 9.37431c-.30839.30821-.6887.53476-1.10658.65919L3.5 10.5001l.46667-1.56621c.12441-.41788.35095-.79818.65916-1.10658l5.21034-5.20975Zm0 0L11.375 4.15639M10.5 8.16681v2.77079c0 .3481-.1383.682-.3844.9281-.24616.2462-.58.3844-.9281.3844h-6.125c-.3481 0-.68194-.1382-.92808-.3844-.24614-.2461-.38442-.58-.38442-.9281V4.81264c0-.34809.13828-.68193.38442-.92807.24614-.24614.57998-.38443.92808-.38443h2.77083"/>
          </svg>
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
