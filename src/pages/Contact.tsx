import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact">
      <div className="container">
        <section className="contact-hero">
          <h1>Liên hệ với chúng tôi</h1>
          <p className="hero-subtitle">
            Chúng tôi luôn sẵn sàng lắng nghe ý kiến và phản hồi của bạn
          </p>
        </section>

        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Thông tin liên hệ</h2>
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="info-content">
                  <h3>Email</h3>
                  <p>ngothivananh772006@gmail.com</p>
                  <p>blog.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-content">
                  <h3>Địa chỉ</h3>
                  <p>123 Đường ABC</p>
                  <p>Hà Nội</p>
                  <p>Việt Nam</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-content">
                  <h3>Điện thoại</h3>
                  <p>0978965734</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-content">
                  <h3>Giờ làm việc</h3>
                  <p>Thứ 2 - Thứ 6: 9:00 - 18:00</p>
                  <p>Thứ 7: 9:00 - 12:00</p>
                  <p>Chủ nhật: Nghỉ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Gửi tin nhắn</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Họ tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nhập họ tên của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Nhập địa chỉ email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Chủ đề</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="question">Câu hỏi</option>
                  <option value="feedback">Phản hồi</option>
                  <option value="collaboration">Hợp tác</option>
                  <option value="support">Hỗ trợ kỹ thuật</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tin nhắn *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Nhập nội dung tin nhắn của bạn"
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
              </button>

              {submitMessage && (
                <div className="submit-message success">{submitMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
