import React from "react";
import { useEffect, useState } from "react";
import { user } from "../images/img";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
  const his = useHistory();
  const [logout, setlogout] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      his.push("/signin");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout]);
  const handlelogout = (ev) => {
    ev.preventDefault();
    var k = window.confirm("Are you sure to logout");
    if (k) {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      setlogout(true);
    }
  };
  return (
    <div>
      <input type="checkbox" id="checkb" />
      <header class="headh">
        <h2 class="u-n">
          <a href="#" class="nav_logo">
            📦𝑾𝒂𝒓𝒆𝑼𝒑<b class="bold">!</b>
          </a>
          <label for="checkb">
            <i id="navbtn" class="fa fa-bars" aria-hidden="true"></i>
          </label>
        </h2>
        <i class="fa fa-user" aria-hidden="true"></i>
      </header>
      <div class="bodyh">
        <nav class="side-b">
          <div class="user-p">
            <img src={user} />

            <h4>{localStorage.getItem("user")}</h4>
          </div>
          <ul>
            <li>
              <a href="#">
                <i class="uil uil-user-circle" aria-hidden="true"></i>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-shop" aria-hidden="true"></i>
                <span>My Shop</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-shopping-cart" aria-hidden="true"></i>
                <span>Purchase</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="uil uil-clipboard-notes" aria-hidden="true"></i>
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-power-off" aria-hidden="true"></i>
                <span class="logout" onClick={handlelogout}>
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <section class="sec1">
          <h1>WELCOME</h1>
          <p>#CodingWithElias</p>
        </section>
      </div>
    </div>
  );
};
export default Home;
