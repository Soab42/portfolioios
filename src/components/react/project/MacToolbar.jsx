export default function MacToolbar() {
  return (
    <div className="mac-toolbar">
      <div className="mac-buttons">
        <svg
          className="mac-btn close"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ></svg>

        <svg
          className="mac-btn minimize"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ></svg>

        <svg
          className="mac-btn fullscreens"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </div>
  );
}
