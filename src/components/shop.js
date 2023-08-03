import React, { useEffect, useState } from "react";
import { pimg } from "../images/img";
import axios from "axios";
import TopShop from "./TopShop";
const Shop = () => {
  const [prod, setprod] = useState([]);
  const [ap, setap] = useState({
    username: localStorage.getItem("user"),
    pname: "",
    pid: "",
    qty: "",
    price: "",
    wqty: "",
    sqty: "",
  });
  const p = [{ name: "s" }, { name: "u" }, { name: "l" }];
  useEffect(() => {
    document.getElementById("openpopup").addEventListener("click", (ev) => {
      ev.preventDefault();
      var popupContainer = document.getElementById("popupContainer");
      popupContainer.style.display = "block";
    });
    document.getElementById("closepopup").addEventListener("click", (ev) => {
      ev.preventDefault();
      var popupContainer = document.getElementById("popupContainer");
      popupContainer.style.display = "none";
    });
    document.getElementById("closepopup2").addEventListener("click", (ev) => {
      ev.preventDefault();
      var popupContainer = document.getElementById("popupContainer");
      popupContainer.style.display = "none";
    });

    fetch("http://localhost:8081/prod")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (d) => localStorage.getItem("user") === d.username
        );
        setprod(filteredProducts);
      })
      .catch((err) => console.log(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prod]);
  const handlepname = (ev) => {
    ev.preventDefault();
    const t = { ...ap };
    t.pname = ev.target.value;
    setap(t);
  };
  const handlepid = (ev) => {
    ev.preventDefault();
    const t = { ...ap };
    t.pid = ev.target.value;
    setap(t);
  };
  const handleqty = (ev) => {
    ev.preventDefault();
    const t = { ...ap };
    t.qty = ev.target.value;
    setap(t);
  };
  const handleprice = (ev) => {
    ev.preventDefault();
    const t = { ...ap };
    t.price = ev.target.value;
    setap(t);
  };
  const handlewqty = (ev) => {
    ev.preventDefault();
    const t = { ...ap };
    t.wqty = ev.target.value;
    setap(t);
  };
  const handlesqty = (ev) => {
    ev.preventDefault();
    const t = { ...ap };
    t.sqty = ev.target.value;
    setap(t);
  };
  const handleap = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:8081/product", ap)
      .then((res) => console.log(""))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <TopShop></TopShop>
      {prod.length === 0 && (
        <label class="dis">
          <br />
          𝑵𝒐 𝒑𝒓𝒐𝒅𝒖𝒄𝒕𝒔 𝒂𝒅𝒅𝒆𝒅 𝒚𝒆𝒕!
        </label>
      )}
      <div class="con">
        <div class="box-container">
          {prod &&
            prod.map((p) => {
              return (
                <div class="box">
                  <img src={pimg} alt="" />
                  <h3>{p.pname}</h3>
                  <a href="#" class="btn">
                    show
                  </a>
                </div>
              );
            })}
        </div>
      </div>

      <div class="popup-container" id="popupContainer">
        <div class="popup-content">
          <h2>𝑷𝒓𝒐𝒅𝒖𝒄𝒕 𝑫𝒆𝒕𝒂𝒊𝒍𝒔</h2>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Product Name"
            value={ap.pname}
            onChange={handlepname}
          />
          <i class="uil uil-shopping-bag i1"></i>
          <br />
          <br />

          <input
            type="text"
            id="email"
            placeholder="Product Id"
            value={ap.pid}
            onChange={handlepid}
          />
          <i class="uil uil-shield-plus i2"></i>
          <br />
          <br />

          <input
            type="text"
            id="email"
            placeholder="Quantity"
            value={ap.qty}
            onChange={handleqty}
          />
          <i class="uil uil-weight i3"></i>
          <br />
          <br />

          <input
            type="text"
            id="email"
            placeholder="Price per Quantity"
            value={ap.price}
            onChange={handleprice}
          />
          <i class="uil uil-rupee-sign i4"></i>
          <br />
          <br />
          <input
            type="text"
            id="email"
            placeholder="Stock in Shop"
            value={ap.sqty}
            onChange={handlesqty}
          />
          <i class="uil uil-shop i5"></i>
          <br />
          <br />
          <input
            type="text"
            id="email"
            placeholder="Stock in WareHouse"
            value={ap.wqty}
            onChange={handlewqty}
          />
          <i class="uil uil-shopping-cart i6"></i>
          <br />
          <button class="addp" id="closepopup" onClick={handleap}>
            𝑨𝒅𝒅
          </button>
          <button class="close-btn" id="closepopup2">
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
