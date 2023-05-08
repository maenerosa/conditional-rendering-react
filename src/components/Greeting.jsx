import LoggedIn from "./LoggedIn";
import LogOut from "./LogOut";

function Greeting({ isLoggedin }) {
  let greeting;
  return <div>{isLoggedin ? <LoggedIn /> : <LogOut />}</div>;

  // <div>{isloggedin ? <h1>Welcome Back!</h1> : <h1>Please Sign up!</h1>}</div>
  // <div>{isloggedin && <h1>Welcome Back!</h1>}</div>
}

export default Greeting;
