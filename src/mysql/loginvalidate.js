/* eslint-disable react-hooks/rules-of-hooks */
const loginvalidate = (d) => {
  fetch("http://localhost:8081/login")
    .then((res) => res.json())
    .then((data) =>
      data.map((k) => {
        if (k.email === d.mail && k.password === d.pass) {
          localStorage.setItem("auth", true);
          localStorage.setItem("user", k.username);
          localStorage.setItem("cname", k.cname);
        }
      })
    )
    .catch((err) => console.log(err.message));
  return null;
};
export default loginvalidate;
