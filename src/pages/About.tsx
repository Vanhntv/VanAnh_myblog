import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>Về chúng tôi</h1>
          <p className="hero-subtitle">
            Chia sẻ kiến thức và trải nghiệm về công nghệ và cuộc sống
          </p>
        </section>

        {/* Main Content */}
        <div className="about-content">
          <div className="about-section">
            <h2>Sứ mệnh của chúng tôi</h2>
            <p>
              Chúng tôi tin rằng kiến thức là sức mạnh, và việc chia sẻ kiến
              thức sẽ giúp cộng đồng phát triển. Blog này được tạo ra với mục
              đích cung cấp những bài viết chất lượng về công nghệ, lập trình,
              và các vấn đề trong cuộc sống hàng ngày.
            </p>
          </div>

          <div className="about-section">
            <h2>Những gì chúng tôi cung cấp</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Hướng dẫn học tập</h3>
                <p>Các bài viết hướng dẫn chi tiết về lập trình và công nghệ</p>
              </div>
              <div className="feature-item">
                <h3>Mẹo và thủ thuật</h3>
                <p>
                  Những kinh nghiệm thực tế và giải pháp cho các vấn đề thường
                  gặp
                </p>
              </div>
              <div className="feature-item">
                <h3>Phát triển cá nhân</h3>
                <p>Bài viết về phát triển bản thân và quản lý cuộc sống</p>
              </div>
              <div className="feature-item">
                <h3>Cập nhật xu hướng</h3>
                <p>Thông tin về các công nghệ và xu hướng mới nhất</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Liên hệ với chúng tôi</h2>
            <p>
              Nếu bạn có bất kỳ câu hỏi nào hoặc muốn đóng góp bài viết, hãy
              liên hệ với chúng tôi qua email hoặc các mạng xã hội.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span>ngothivananh772006@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website:</span>
                <span>blog.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
