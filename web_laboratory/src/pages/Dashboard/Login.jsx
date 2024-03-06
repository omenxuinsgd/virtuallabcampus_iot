import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";
import './style.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate.push("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <section class="container">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register">
          <div class="columns">
            <div class="column left">
              <h1 class="title is-1">Laboratorium Fisika</h1>
              <h2 class="subtitle colored is-4">UIN Sunan Gunung Djati Bandung</h2>
              <p>Jelajahi wahana laboratorium fisika uin bandung untuk menambah wawasan keilmuan fisika. digital laboratorium ini wadah untuk praktikan untuk Pembelajaran yang lebih praktis</p>
            </div>
            <div class="column right has-text-centered">
              <h1 class="title is-4">Sign up today</h1>
              <p class="description">Silahkan Login Terlebih Dahulu Untuk Menjelajah Lebih Jauh!</p>
              <form onSubmit={Auth}>
              {isError && <p className="has-text-centered">{message}</p>}
                <div class="field">
                  <div class="control">
                    <input 
                      class="input is-medium" 
                      type="text" 
                      placeholder="Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input 
                      class="input is-medium" 
                      type="password" 
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button 
                  class="button is-block is-primary is-fullwidth is-medium"
                  type="submit"
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
                <br />
                <small><em>Silahkan hubungi admin jika akun invalid.</em></small>
              </form>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <br/>
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-instagram"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span> &emsp;
                <span class="icon">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="level-right">
              <small class="level-item" style={{color: "var(--textLight)"}}>
                &copy; Super Cool Website. All Rights Reserved.
              </small>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Login;