type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} and his rolw is : ${user.role}`);
  } else {
    console.log(` ${user.name}`);
  }
};

getUserInfo({ name: "Fajla", role: "Admin" });
