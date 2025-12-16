import { useParams, Link } from "react-router-dom";
import { usePosts } from "../contexts/PostContext";
import "./PostDetail.css";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getPostById } = usePosts();
  const post = getPostById(parseInt(id || "0"));

  if (!post) {
    return (
      <div className="container">
        <div className="not-found">
          <h1>Không tìm thấy bài viết</h1>
          <p>Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/" className="back-home-btn">
            ← Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="post-detail">
      <section className="post-hero">
        <div className="container">
          <div className="post-meta-large">
            <span className="post-category-large">{post.category}</span>
            <time className="post-date-large">{formatDate(post.date)}</time>
          </div>
          <h1 className="post-title-large">{post.title}</h1>
          <p className="post-author-large">Tác giả: {post.author}</p>
        </div>
      </section>

      <div className="container">
        <div className="post-content-wrapper">
          {post.imageUrl && (
            <div className="post-featured-image">
              <img src={post.imageUrl} alt={post.title} />
            </div>
          )}

          <div className="post-content">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, "<br>"),
              }}
            />
          </div>

          <div className="post-navigation">
            <Link to="/" className="back-btn">
              Quay về trang chủ
            </Link>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <h2>Bài viết liên quan</h2>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="related-post-card">
                  {relatedPost.imageUrl && (
                    <div className="related-post-image">
                      <img src={relatedPost.imageUrl} alt={relatedPost.title} />
                    </div>
                  )}
                  <div className="related-post-content">
                    <h3>
                      <Link to={`/post/${relatedPost.id}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p>{relatedPost.excerpt}</p>
                    <div className="related-post-meta">
                      <span className="related-post-author">
                        {relatedPost.author}
                      </span>
                      <span className="related-post-date">
                        {formatDate(relatedPost.date)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
