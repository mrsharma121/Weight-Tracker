import { Weight } from "./Weight";
function App({ handleLogout, email, user }) {
  return (
    <div>
      <img
        src="https://assets.loseit.com/website/home/Wave.png"
        alt="png"
        className="background"
        height="100%"
        width="100%"
      />
      <div className="homepage">
        <img
          src="https://img.icons8.com/ios-filled/2x/treadmill.png"
          className="icon"
        />
        <button
          style={{ position: "absolute", right: "1%" }}
          onClick={handleLogout}
        >
          Logout
        </button>
        <Weight email={email} user={user} />
      </div>
    </div>
  );
}

export default App;
