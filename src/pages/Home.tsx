import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, type Post } from "../data/posts";
import { usePosts } from "../contexts/PostContext";
import "./Home.css";

const Home = () => {
  const { posts } = usePosts();
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "Tất cả" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Chào mừng đến với Blog của chúng tôi</h1>
          <p className="hero-subtitle">
            Khám phá những bài viết thú vị về công nghệ, lập trình và cuộc sống
          </p>
        </div>
      </section>

      <div className="filters-section">
        <div className="container">
          <div className="filters">
            <div className="category-filter">
              <h3>Danh mục:</h3>
              <div className="category-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="search-filter">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-filter-input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="full-container">
        <div className="posts-section">
          <h2 className="section-title">
            {selectedCategory === "Tất cả"
              ? "Tất cả bài viết"
              : `Bài viết: ${selectedCategory}`}
            {searchTerm && ` - Tìm kiếm: "${searchTerm}"`}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <p>Không tìm thấy bài viết nào phù hợp với tiêu chí tìm kiếm.</p>
            </div>
          ) : (
            <div className="posts-grid">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} formatDate={formatDate} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PostCard = ({
  post,
  formatDate,
}: {
  post: Post;
  formatDate: (date: string) => string;
}) => {
  return (
    <article className="post-card">
      {post.imageUrl && (
        <div className="post-image">
          <img src={post.imageUrl} alt={post.title} />
        </div>
      )}

      <div className="post-content">
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <span className="post-date">{formatDate(post.date)}</span>
        </div>

        <h3 className="post-title">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>

        <p className="post-excerpt">{post.excerpt}</p>

        <div className="post-footer">
          <span className="post-author">Tác giả: {post.author}</span>
          <Link to={`/post/${post.id}`} className="read-more">
            Đọc tiếp →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Home;
