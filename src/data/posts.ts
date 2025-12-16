export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Chào mừng đến với Blog của chúng tôi",
    excerpt: "Khám phá các bài viết thú vị về công nghệ, lập trình và cuộc sống hàng ngày.",
    content: `
# Chào mừng đến với Blog của chúng tôi

Chào mừng bạn đến với blog cá nhân của chúng tôi! Đây là nơi chúng tôi chia sẻ kiến thức, kinh nghiệm và những câu chuyện thú vị về:

## Các chủ đề chính:
- **Công nghệ**: Những tiến bộ mới nhất trong thế giới công nghệ
- **Lập trình**: Hướng dẫn, mẹo và thủ thuật lập trình
- **Cuộc sống**: Những suy nghĩ về cuộc sống hàng ngày
- **Học tập**: Kinh nghiệm học tập và phát triển bản thân

Chúng tôi tin rằng việc học hỏi là một quá trình liên tục, và blog này chính là nơi để chúng ta cùng nhau chia sẻ và phát triển.

### Tại sao bạn nên theo dõi blog này?
- Nội dung chất lượng và hữu ích
- Cập nhật thường xuyên
- Giao diện thân thiện với người dùng
- Tương tác với cộng đồng

Hãy cùng bắt đầu hành trình khám phá kiến thức nhé!
    `,
    author: "Admin",
    date: "2024-01-15",
    category: "Giới thiệu",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=800"
  },
  {
    id: 2,
    title: "Hướng dẫn học React từ cơ bản đến nâng cao",
    excerpt: "Học React một cách có hệ thống từ những khái niệm cơ bản đến các pattern nâng cao.",
    content: `
# Hướng dẫn học React từ cơ bản đến nâng cao

React là một thư viện JavaScript phổ biến cho việc xây dựng giao diện người dùng. Trong bài viết này, chúng ta sẽ cùng nhau khám phá hành trình học React.

## Bước 1: Kiến thức cơ bản
Trước khi bắt đầu với React, bạn cần nắm vững:
- HTML/CSS/JavaScript
- ES6+ (Arrow functions, destructuring, modules)
- Node.js và npm

## Bước 2: Bắt đầu với React
- Cài đặt create-react-app hoặc Vite
- Hiểu về JSX
- Component và Props
- State và lifecycle

## Bước 3: Nâng cao hơn
- Hooks (useState, useEffect, useContext)
- React Router cho navigation
- State management (Redux, Context API)
- Performance optimization

## Bước 4: Thực hành dự án
Cách tốt nhất để học là thực hành:
- Xây dựng todo app
- Tạo blog đơn giản
- Phát triển e-commerce site
- Tạo dashboard quản lý

Hãy bắt đầu từ những bước cơ bản và dần dần nâng cao kỹ năng của bạn!
    `,
    author: "Nguyễn Văn A",
    date: "2024-01-20",
    category: "Lập trình",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800"
  },
  {
    id: 3,
    title: "10 mẹo để cải thiện năng suất làm việc",
    excerpt: "Những bí quyết giúp bạn làm việc hiệu quả hơn và quản lý thời gian tốt hơn.",
    content: `
# 10 mẹo để cải thiện năng suất làm việc

Trong thời đại công nghệ phát triển như vũ bão, việc quản lý thời gian và năng suất trở nên quan trọng hơn bao giờ hết.

## 1. Lập kế hoạch hàng ngày
- Dành 15 phút mỗi sáng để lập kế hoạch
- Ưu tiên công việc quan trọng nhất
- Sử dụng phương pháp Eisenhower Matrix

## 2. Kỹ thuật Pomodoro
- Làm việc tập trung 25 phút
- Nghỉ ngơi 5 phút
- Sau 4 chu kỳ, nghỉ dài 15-30 phút

## 3. Loại bỏ sự phân tâm
- Tắt thông báo điện thoại
- Sử dụng chế độ "Do Not Disturb"
- Tạo không gian làm việc yên tĩnh

## 4. Học cách từ chối
- Nói "không" với những việc không quan trọng
- Tập trung vào mục tiêu chính
- Delegating khi có thể

## 5. Chăm sóc sức khỏe
- Ngủ đủ 7-8 tiếng mỗi đêm
- Ăn uống lành mạnh
- Tập thể dục đều đặn

## 6. Sử dụng công cụ phù hợp
- Trello hoặc Asana cho quản lý task
- Forest app cho tập trung
- RescueTime để theo dõi thời gian

## 7. Học hỏi liên tục
- Đọc sách ít nhất 30 phút mỗi ngày
- Tham gia khóa học online
- Học từ người thành công

## 8. Nghỉ ngơi hợp lý
- Không làm việc quá 8 tiếng mỗi ngày
- Nghỉ cuối tuần đầy đủ
- Đi nghỉ hàng năm

## 9. Thiết lập mục tiêu SMART
- Specific (Cụ thể)
- Measurable (Đo lường được)
- Achievable (Khả thi)
- Relevant (Liên quan)
- Time-bound (Có thời hạn)

## 10. Theo dõi và điều chỉnh
- Đánh giá tiến độ hàng tuần
- Điều chỉnh kế hoạch khi cần
- Học từ những sai lầm

Áp dụng những mẹo này sẽ giúp bạn cải thiện năng suất đáng kể!
    `,
    author: "Trần Thị B",
    date: "2024-01-25",
    category: "Sản xuất",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=800"
  },
  {
    id: 4,
    title: "Cách xây dựng thói quen tốt cho bản thân",
    excerpt: "Hướng dẫn chi tiết để tạo và duy trì những thói quen tích cực trong cuộc sống.",
    content: `
# Cách xây dựng thói quen tốt cho bản thân

Thói quen là nền tảng của thành công. Việc xây dựng thói quen tốt đòi hỏi kiên trì và phương pháp đúng đắn.

## Tại sao thói quen quan trọng?
- Chiếm 40% hành vi hàng ngày
- Tạo ra kết quả tự động
- Xây dựng kỷ luật và tính cách

## Các bước xây dựng thói quen

### Bước 1: Bắt đầu nhỏ
- Đừng cố gắng thay đổi quá nhiều cùng lúc
- Chọn một thói quen duy nhất để tập trung
- Ví dụ: Uống 1 ly nước khi thức dậy

### Bước 2: Lặp lại hàng ngày
- Thực hiện cùng một hành động mỗi ngày
- Tạo thói quen trong 21-66 ngày
- Sử dụng nhắc nhở (alarm, app)

### Bước 3: Theo dõi tiến độ
- Ghi lại mỗi ngày hoàn thành
- Sử dụng habit tracker app
- Thưởng cho bản thân khi đạt mốc

### Bước 4: Kết hợp với thói quen cũ
- Ghép thói quen mới với thói quen đã có
- Ví dụ: Đọc sách sau khi đánh răng

## Các thói quen nên có
- Thức dậy sớm
- Tập thể dục đều đặn
- Đọc sách hàng ngày
- Học ngoại ngữ
- Viết nhật ký
- Ăn uống lành mạnh

## Xử lý thất bại
- Đừng bỏ cuộc vì một ngày thất bại
- Tiếp tục từ ngày hôm sau
- Điều chỉnh kế hoạch nếu cần

Hãy bắt đầu xây dựng thói quen tốt cho chính mình từ hôm nay!
    `,
    author: "Lê Văn C",
    date: "2024-02-01",
    category: "Cuộc sống",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
  },
  {
    id: 5,
    title: "Giới thiệu về TypeScript và lợi ích của nó",
    excerpt: "Khám phá TypeScript - một superset của JavaScript với tính năng type checking mạnh mẽ.",
    content: `
# Giới thiệu về TypeScript và lợi ích của nó

TypeScript là một ngôn ngữ lập trình mã nguồn mở được phát triển bởi Microsoft, là một superset của JavaScript.

## TypeScript là gì?
TypeScript thêm các tính năng type checking tĩnh vào JavaScript, giúp:
- Phát hiện lỗi sớm trong quá trình development
- Cung cấp IntelliSense tốt hơn
- Tăng khả năng bảo trì code
- Hỗ trợ refactoring an toàn

## Cài đặt TypeScript
\`\`\`bash
npm install -g typescript
# hoặc
npm install typescript --save-dev
\`\`\`

## Cú pháp cơ bản
\`\`\`typescript
// Type annotations
let message: string = "Hello TypeScript";
let count: number = 42;
let isDone: boolean = false;

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
}

// Functions
function greet(user: User): string {
  return \`Hello \${user.name}\`;
}
\`\`\`

## Lợi ích chính

### 1. Type Safety
- Phát hiện lỗi compile-time
- Giảm runtime errors
- IDE support tốt hơn

### 2. Developer Experience
- Autocomplete thông minh
- Refactoring an toàn
- Documentation tự động

### 3. Maintainability
- Code dễ đọc hơn
- Dễ bảo trì và mở rộng
- Giảm technical debt

### 4. Large Scale Applications
- Phù hợp cho dự án lớn
- Better team collaboration
- Easier onboarding

## Khi nào nên dùng TypeScript?
- Dự án lớn, nhiều developer
- Cần maintain code lâu dài
- Team có kinh nghiệm với statically typed languages
- Khi performance và reliability quan trọng

TypeScript đang ngày càng phổ biến trong cộng đồng JavaScript. Hãy thử nghiệm và trải nghiệm sức mạnh của nó!
    `,
    author: "Phạm Thị D",
    date: "2024-02-05",
    category: "Lập trình",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
  }
];

export const categories = [
  "Tất cả",
  "Giới thiệu",
  "Lập trình",
  "Cuộc sống",
  "Sản xuất"
];
