import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";

const PsuLogin = (props) => {
  const admin = {
    user: "admin",
    pass: "adminkathu",
  };

  const user = {
    user: "ukathu2021",
    pass: "pkathu2021",
  };

  const [Password, setPassword] = useState({
    username: "",
    password: "",
  });

  const sentPassword = async () => {
    if (Password.username == admin.user && Password.password == admin.pass) {
      localStorage.setItem("login", true);
      props.history.push("/admin");
    } else if (
      Password.username == user.user &&
      Password.password == user.pass
    ) {
      localStorage.setItem("user", true);
      props.history.push("/");
    } else {
      alert("เข้าสู่ระบบไม่สำเร็จ");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      props.history.push("/admin");
    } else if (localStorage.getItem("user")) {
      props.history.push("/");
    }
  }, []);

  return (
    <div className="Passwordcard">
      <div>
        <h1>เข้าสู่ระบบ</h1>
        <Input
          type="text"
          onChange={(e) =>
            setPassword({ ...Password, username: e.target.value })
          }
          placeholder="username"
        />{" "}
        <br />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) =>
            setPassword({ ...Password, password: e.target.value })
          }
        />
        <br />
        <Button onClick={sentPassword}>ยืนยัน</Button>
      </div>
    </div>
  );
};

export default PsuLogin;
