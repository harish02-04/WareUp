import React from "react";
import { useEffect, useState } from "react";
import { user } from "../images/img";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../components/profile";
const Home = () => {
  const his = useHistory();
  const [logout, setlogout] = useState(false);
  const [nav, setnav] = useState({
    pro: false,
    shop: false,
    purchase: false,
    orders: false,
  });
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      his.push("/signin");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout, nav]);
  const handlelogout = (ev) => {
    ev.preventDefault();
    var k = window.confirm("Are you sure to logout");
    if (k) {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      localStorage.removeItem("cname");
      setlogout(true);
    }
  };
  const handleprofile = (ev) => {
    ev.preventDefault();
    const t = { ...nav };
    t.profile = true;
    setnav(t);
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
        <h2 class="u-n">
          <i class="fa fa-user" aria-hidden="true"></i>
          <label class="cname">{localStorage.getItem("cname")}</label>
        </h2>
      </header>
      <div class="bodyh">
        <nav class="side-b">
          <div class="user-p">
            <img src={user} />

            <h4>{localStorage.getItem("user")}</h4>
          </div>
          <ul>
            <li>
              <a href="#" onClick={handleprofile}>
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
        <section class="sec1">{nav.profile && <Profile></Profile>}</section>
      </div>
    </div>
  );
};
export default Home;
