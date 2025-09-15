import "./HomePage.css";
function HomePage() {
  return (
    <div className="home-page">
      {/* 背景装饰层（动态光斑效果） */}
      <div className="home-bg-decoration"></div>
      
      {/* 主内容动画容器 */}
      <div className="home-content">
        {/* 标题（逐字渐入+缩放） */}
        <h2 className="home-title">
          {[..."Welcome to the Todo App"].map((char, idx) => (
            <span key={idx} className="title-char">
              {char}
            </span>
          ))}
        </h2>
        
        {/* 副标题（延迟渐入+上浮） */}
        <p className="home-desc">Manage your tasks efficiently</p>
        
        {/* 装饰性按钮（悬浮放大+光影） */}
        <div className="home-cta">
          <a href="/todos" className="cta-btn">
            Start Your ToDoList Journey
            <span className="btn-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default HomePage;