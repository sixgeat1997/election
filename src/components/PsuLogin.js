import React, { useEffect, useState } from "react";

const PsuLogin = (props) => {
  console.log(props);

  const allUser = {
    user: "admin",
    pass: "adminok",
  };

  const [Password, setPassword] = useState({
    username: "",
    password: "",
  });

  const sentPassword = async () => {
    if (
      Password.username == allUser.user &&
      Password.password == allUser.pass
    ) {
      localStorage.setItem("login", true);
      props.history.push("/admin");
    } else {
      alert("เข้าสู่ระบบไม่สำเร็จ");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      props.history.push("/admin");
    }
  }, []);

  console.log(Password);

  return (
    <div className="Passwordcard">
      <div>
        <h1>login</h1>
        <input
          type="text"
          onChange={(e) =>
            setPassword({ ...Password, username: e.target.value })
          }
        />{" "}
        <br />
        <input
          type="password"
          onChange={(e) =>
            setPassword({ ...Password, password: e.target.value })
          }
        />
        <br />
        <button onClick={sentPassword}>submit</button>
      </div>
    </div>
  );
};

export default PsuLogin;
