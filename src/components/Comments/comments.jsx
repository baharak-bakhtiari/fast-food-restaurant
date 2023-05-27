import { useEffect, useRef, useState } from "react";
import Comment from "../Comment/comment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastComment, setLastComment] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "https://react-mini-projects-api.classbon.com/Comments/" + page
    );
    const data = await response.json();

    setLoading(false);
    data.length === 0
      ? setLastComment(null)
      : setComments((oldData) => [...oldData, ...data]);
  };

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      console.log(entries.length);
      if (entries[0].isIntersecting) {
        setPage((currentPage) => currentPage + 1);
      }
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const currentObserver = observerRef.current;
    if (lastComment) {
      currentObserver.observe(lastComment);
    }
    return () => {
      if (lastComment) {
        currentObserver.unobserve(lastComment);
      }
    };
  }, [lastComment]);

  return (
    <div className="container pt-5">
      <h3>نظرات کاربران</h3>
      <div className="comments">
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            ref={index === comments.length - 1 ? setLastComment : null}
          >
            <Comment {...comment} />
          </div>
        ))}
        {loading && (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
