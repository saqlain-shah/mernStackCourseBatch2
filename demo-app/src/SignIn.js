import "./App.css";

function SignIn() {
  return (
    <div className="container">
      <div className="left">
        <img src="" alt="" />
      </div>
      <div className="right">
        <form>
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="password" />
          <button className="b1">Log in</button>
          <p>forgetten password</p>
          <button className="b2">Create New Account</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
