
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "./AuthModal.css";

function AuthModal({ show, handleClose }) {
  const [isSignIn, setIsSignIn] = useState(true);

  // form states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsSignIn(!isSignIn);

  // 🔐 SIGN UP API
 const handleSignUp = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/users/register/",
      {
        username,
        email,
        password,
      }
    );

    alert(res.data.message);

    // reset fields
    setUsername("");
    setEmail("");
    setPassword("");

    setIsSignIn(true);
  } catch (error) {
    console.log(error.response?.data);
    alert("Signup Failed ❌");
  }
};

  // 🔑 LOGIN API (JWT)
  const handleSignIn = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/users/login/",
      {
        username,
        password,
      }
    );

    console.log("LOGIN SUCCESS:", res.data);

    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    alert("Login Successful 🚀");

    // reset
    setUsername("");
    setPassword("");

    handleClose();
  } catch (error) {
    console.log(error.response?.data);
    alert("Login Failed ❌");
  }
};

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="auth-modal">

        {/* HEADER BUTTONS */}
        <div className="auth-toggle">
          <Button
            className={isSignIn ? "active" : ""}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </Button>

          <Button
            className={!isSignIn ? "active" : ""}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </Button>
        </div>

        {/* SWITCH TEXT */}
        <p className="auth-switch-text">
          {isSignIn ? (
            <>
              Don’t have an account?{" "}
              <span onClick={toggleMode}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={toggleMode}>Sign in</span>
            </>
          )}
        </p>

        {/* FORM */}
        <Form>

          {/* SIGN UP ONLY */}
          {!isSignIn && (
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          )}

          {/* EMAIL (only signup use optional) */}
          {!isSignIn && (
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          )}

          {/* LOGIN ALSO USE USERNAME */}
          {isSignIn && (
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {/* BUTTON */}
         <Button
  type="button"
  className="auth-submit w-100"
  onClick={isSignIn ? handleSignIn : handleSignUp}
>
  {isSignIn ? "Sign In" : "Sign Up"}
</Button>

        </Form>

      </Modal.Body>
    </Modal>
  );
}

export default AuthModal;