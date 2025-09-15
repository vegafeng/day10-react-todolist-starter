import "./HomePage.css";
function HomePage() {
  
  const titleText = "Welcome to the TodoList";

  return (
    <div className="home-page">
      {}
      <div className="home-bg-decoration"></div>
      
      {}
      <div className="home-content">
        {}
        <h2 className="home-title">
          {[...titleText].map((char, idx) => (
            <span key={idx} className="title-char">
              {char} {}
            </span>
          ))}
        </h2>
        
        {}
        <p className="home-desc">Manage your tasks efficiently</p>
        
        {}
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