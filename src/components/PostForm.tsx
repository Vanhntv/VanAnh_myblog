import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePosts } from '../contexts/PostContext';
import { categories } from '../data/posts';
import './PostForm.css';

const PostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { addPost, updatePost, getPostById } = usePosts();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: categories[1], // Skip "Tất cả"
    imageUrl: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const hasInput = Boolean(
    formData.title.trim() ||
    formData.excerpt.trim() ||
    formData.content.trim() ||
    formData.author.trim() ||
    formData.imageUrl.trim()
  );

  useEffect(() => {
    if (isEditing && id) {
      const post = getPostById(parseInt(id));
      if (post) {
        setFormData({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          author: post.author,
          category: post.category,
          imageUrl: post.imageUrl || ''
        });
      }
    }
  }, [isEditing, id, getPostById]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Tiêu đề không được để trống';
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Tóm tắt không được để trống';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Nội dung không được để trống';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Tác giả không được để trống';
    }

    if (!formData.category) {
      newErrors.category = 'Vui lòng chọn danh mục';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (isEditing && id) {
        updatePost(parseInt(id), formData);
      } else {
        addPost(formData);
      }

      
      navigate('/admin');
    } catch (error) {
      console.error('Error saving post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="post-form">
      <div className="full-container">
        <div className="form-container">
          <div className="form-header">
            <h1>{isEditing ? 'Chỉnh sửa bài viết' : 'Thêm bài viết mới'}</h1>
            <p>{isEditing ? 'Cập nhật thông tin bài viết' : 'Tạo bài viết mới cho blog của bạn'}</p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">Tiêu đề *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Nhập tiêu đề bài viết"
                  className={errors.title ? 'error' : ''}
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="category">Danh mục *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={errors.category ? 'error' : ''}
                >
                  {categories.slice(1).map(category => ( // skip "Tất cả"
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && <span className="error-message">{errors.category}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="author">Tác giả *</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nhập tên tác giả"
                className={errors.author ? 'error' : ''}
              />
              {errors.author && <span className="error-message">{errors.author}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">URL hình ảnh (tùy chọn)</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
              <small className="help-text">Để trống nếu không có hình ảnh</small>
            </div>

            <div className="form-group">
              <label htmlFor="excerpt">Tóm tắt *</label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Viết tóm tắt ngắn gọn về bài viết"
                rows={3}
                className={errors.excerpt ? 'error' : ''}
              />
              {errors.excerpt && <span className="error-message">{errors.excerpt}</span>}
              <small className="help-text">Tóm tắt sẽ hiển thị trong danh sách bài viết</small>
            </div>

            <div className="form-group">
              <label htmlFor="content">Nội dung *</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Viết nội dung bài viết..."
                rows={15}
                className={errors.content ? 'error' : ''}
              />
              {errors.content && <span className="error-message">{errors.content}</span>}
              <small className="help-text">Hỗ trợ Markdown: # Tiêu đề, **in đậm**, *in nghiêng*</small>
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="cancel-btn"
                disabled={isSubmitting}
              >
                Hủy
              </button>
              <button
                type="submit"
                className={`submit-btn ${hasInput ? 'input-filled' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? (isEditing ? 'Đang cập nhật...' : 'Đang tạo...')
                  : (isEditing ? 'Cập nhật bài viết' : 'Tạo bài viết')
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
