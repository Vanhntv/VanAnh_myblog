import { useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../contexts/PostContext";
import { categories } from "../data/posts";
import "./Admin.css";

const Admin = () => {
  const { posts, deletePost } = usePosts();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(
    null
  );

  const handleDelete = (id: number) => {
    deletePost(id);
    setShowDeleteConfirm(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="admin">
      <div className="full-container">
        <div className="admin-header">
          <div className="container">
            <h1>Quản lý Blog</h1>
            <p>Thêm, sửa, xóa bài viết của bạn</p>
          </div>
        </div>

        <div className="admin-actions">
          <div className="container">
            <Link to="/admin/new" className="add-post-btn">
              Thêm bài viết mới
            </Link>
            <Link to="/" className="back-home-btn">
              Quay về trang chủ
            </Link>
          </div>
        </div>

        <div className="admin-posts">
          <div className="container">
            <div className="posts-stats">
              <div className="stat-card">
                <h3>{posts.length}</h3>
                <p>Tổng bài viết</p>
              </div>
              <div className="stat-card">
                <h3>{categories.length - 1}</h3>
                <p>Danh mục</p>
              </div>
              <div className="stat-card">
                <h3>{new Set(posts.map((p) => p.author)).size}</h3>
                <p>Tác giả</p>
              </div>
            </div>

            <div className="posts-table">
              <h2>Danh sách bài viết</h2>
              {posts.length === 0 ? (
                <div className="no-posts">
                  <p>
                    Chưa có bài viết nào.{" "}
                    <Link to="/admin/new">Thêm bài viết đầu tiên</Link>
                  </p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tiêu đề</th>
                        <th>Danh mục</th>
                        <th>Tác giả</th>
                        <th>Ngày tạo</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post.id}>
                          <td>{post.id}</td>
                          <td>
                            <Link
                              to={`/post/${post.id}`}
                              className="post-title-link"
                            >
                              {post.title.length > 50
                                ? `${post.title.substring(0, 50)}...`
                                : post.title}
                            </Link>
                          </td>
                          <td>
                            <span className="category-badge">
                              {post.category}
                            </span>
                          </td>
                          <td>{post.author}</td>
                          <td>{formatDate(post.date)}</td>
                          <td>
                            <div className="action-buttons">
                              <Link
                                to={`/admin/edit/${post.id}`}
                                className="edit-btn"
                              >
                                ✏️ Sửa
                              </Link>
                              <button
                                onClick={() => setShowDeleteConfirm(post.id)}
                                className="delete-btn"
                              >
                                🗑️ Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        {showDeleteConfirm && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Xác nhận xóa</h3>
              <p>
                Bạn có chắc chắn muốn xóa bài viết này? Hành động này không thể
                hoàn tác.
              </p>
              <div className="modal-actions">
                <button
                  onClick={() => setShowDeleteConfirm(null)}
                  className="cancel-btn"
                >
                  Hủy
                </button>
                <button
                  onClick={() => handleDelete(showDeleteConfirm)}
                  className="confirm-delete-btn"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
