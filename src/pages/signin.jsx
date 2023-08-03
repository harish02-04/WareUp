/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useEffect, useState } from "react";
import { logo } from "../images/img";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import loginvalidate from "../mysql/loginvalidate";
import axios from "axios";
const SignIn = () => {
  const [log, setlog] = useState({ mail: "", pass: "" });
  const [signup, setsignup] = useState({
    uname: "",
    mail: "",
    pass: "",
    cname: "",
    gno: "",
    add: "",
    pno: "",
  });
  const his = useHistory();
  useEffect(() => {
    const formOpenBtn = document.querySelector("#form-open");
    const home = document.querySelector(".home");
    const formContainer = document.querySelector(".form_container");
    const formCloseBtn = document.querySelector(".form_close");
    const signupBtn = document.querySelector("#signup");
    const loginBtn = document.querySelector("#login");
    const pwShowHide = document.querySelectorAll(".pw_hide");

    formOpenBtn.addEventListener("click", (ev) => home.classList.add("show"));
    formCloseBtn.addEventListener("click", (ev) =>
      home.classList.remove("show")
    );

    pwShowHide.forEach((icon) => {
      icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
          getPwInput.type = "text";
          icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
          getPwInput.type = "password";
          icon.classList.replace("uil-eye", "uil-eye-slash");
        }
      });
    });

    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.add("active");
    });
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.remove("active");
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onchangemail = (ev) => {
    const t = {
      mail: ev.target.value,
      pass: log.pass,
    };
    setlog(t);
  };
  const onchangepass = (ev) => {
    const t = {
      mail: log.mail,
      pass: ev.target.value,
    };
    setlog(t);
  };

  const validatelogin = (ev) => {
    ev.preventDefault();
    loginvalidate(log);
    if (localStorage.getItem("auth")) {
      his.push("/");
    } else {
      alert("Login Invalid");
    }
  };
  console.log(signup);
  const handlesuser = (ev) => {
    ev.preventDefault();
    const t = { ...signup };
    t.uname = ev.target.value;
    setsignup(t);
  };

  const handlesmail = (ev) => {
    ev.preventDefault();
    const t = { ...signup };
    t.mail = ev.target.value;
    setsignup(t);
  };

  const handlespass = (ev) => {
    ev.preventDefault();
    const t = { ...signup };
    t.pass = ev.target.value;
    setsignup(t);
  };

  const handlescname = (ev) => {
    ev.preventDefault();
    const t = { ...signup };
    t.cname = ev.target.value;
    setsignup(t);
  };

  const handlesgno = (ev) => {
    ev.preventDefault();
    const t = { ...signup };
    t.gno = ev.target.value;
    setsignup(t);
  };

  const handlesadd = (ev) => {
    ev.preventDefault();
    const t = { ...signup };
    t.add = ev.target.value;
    setsignup(t);
  };

  const handlespno = (ev) => {
    ev.preventDefault();
    const t = { ...signup };
    t.pno = ev.target.value;
    setsignup(t);
  };

  const handleSignUp = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:8081/signup", signup)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <header class="header">
        <nav class="nav">
          <a href="#" class="nav_logo">
            📦𝑾𝒂𝒓𝒆𝑼𝒑<b class="bld">!</b>
          </a>

          <ul class="nav_items">
            <li class="nav_item">
              <a href="#" class="nav_link">
                Services
              </a>
              <a href="#" class="nav_link">
                Contact
              </a>
            </li>
          </ul>

          <button class="button" id="form-open">
            𝑮𝒆𝒕 𝒔𝒕𝒂𝒓𝒕𝒆𝒅
          </button>
        </nav>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="abt">
          <div class="swing">
            <img src={logo} width="600" height="400" alt="" />
          </div>
          <center>
            <h2 class="intro">
              <b class="hello">😊𝑯𝒆𝒍𝒍𝒐!</b> <br />
              <br />{" "}
              <pre>
                𝑨𝒓𝒆 𝒚𝒐𝒖 𝒕𝒆𝒏𝒔𝒆𝒅 𝒂𝒃𝒐𝒖𝒕 <b class="high">𝒎𝒂𝒊𝒏𝒕𝒂𝒊𝒏𝒊𝒏𝒈 𝒔𝒕𝒐𝒄𝒌𝒔?</b>
              </pre>
              <b class="high">𝑫𝒐𝒏'𝒕 𝒘𝒐𝒓𝒓𝒚</b>
              <b class="gr">!</b> 𝑾𝒆 𝒂𝒓𝒆 𝒉𝒆𝒓𝒆 𝒇𝒐𝒓 𝒚𝒐𝒖 𝒕𝒐{" "}
              <b class="gr">𝒔𝒊𝒎𝒑𝒍𝒊𝒇𝒚</b>
              <br />
              Ｌｅｔ＇ｓ　Ｇｏ!!!
            </h2>
          </center>
        </div>
      </header>

      <section class="home">
        <div class="form_container">
          <i className="uil uil-times form_close"></i>

          <div class="form login_form">
            <form>
              <h2>Login</h2>
              <div class="input_box">
                <input
                  type="email"
                  name="email"
                  onChange={onchangemail}
                  value={log.mail}
                  placeholder="Enter your email"
                  required
                />
                <i className="uil uil-lock password"></i>
              </div>
              <div class="input_box">
                <input
                  type="password"
                  name="password"
                  value={log.pass}
                  onChange={onchangepass}
                  placeholder="Enter your password"
                  required
                />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>

              <button class="button" onClick={validatelogin}>
                Login Now
              </button>

              <div class="login_signup">
                Don't have an account?{" "}
                <a href="#" id="signup">
                  Signup
                </a>
              </div>
            </form>
          </div>

          <div class="form signup_form">
            <form>
              <h2>Signup</h2>
              <div class="input_box">
                <input
                  type="text"
                  name="username"
                  value={signup.uname}
                  onChange={handlesuser}
                  placeholder="Enter your username"
                  required
                />
                <i className="uil uil-user email"></i>
              </div>
              <div class="input_box">
                <input
                  type="email"
                  name="email"
                  value={signup.mail}
                  onChange={handlesmail}
                  placeholder="Enter your email"
                  required
                />
                <i className="uil uil-envelope-alt email"></i>
              </div>
              <div class="input_box">
                <input
                  type="password"
                  name="password"
                  value={signup.pass}
                  onChange={handlespass}
                  placeholder="Create password"
                  required
                />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>
              <div class="input_box">
                <input
                  type="text"
                  name="cname"
                  value={signup.cname}
                  onChange={handlescname}
                  placeholder="Company Name"
                  required
                />
                <i className="uil uil-store-alt email"></i>
              </div>
              <div class="input_box">
                <input
                  type="text"
                  name="gno"
                  value={signup.gno}
                  onChange={handlesgno}
                  placeholder="GST Number"
                  required
                />
                <i className="uil uil-credit-card email"></i>
              </div>
              <div class="input_box">
                <input
                  type="text"
                  name="add"
                  value={signup.add}
                  onChange={handlesadd}
                  placeholder="Address"
                  required
                />
                <i className="uil uil-at email"></i>
              </div>
              <div class="input_box">
                <input
                  type="text"
                  name="pno"
                  value={signup.pno}
                  onChange={handlespno}
                  placeholder="Phone Number"
                  required
                />
                <i className="uil uil-phone email"></i>
              </div>
              <input
                type="submit"
                name="submit"
                value="SignUp"
                class="button"
                id="login"
                onClick={handleSignUp}
              />

              <div class="login_signup">
                Already have an account?{" "}
                <a href="#" id="login">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SignIn;
