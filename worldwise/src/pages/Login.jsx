import { replace, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, isAuthenticated, login, logout } = useAuth();
  const nav = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  }
  useEffect(
    function () {
      if (isAuthenticated) {
        nav("/app", { replace: true });
      }
    },
    [isAuthenticated, nav]
  );
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}