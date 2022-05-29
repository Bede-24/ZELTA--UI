import Cookies from "js-cookie";
// ["User", JWT]
const set = (name : any, value : any) => {
  // console.log(name, value);
  Cookies.set(name, value);
};
const remove = (name : any) => {
  console.log(name)
  Cookies.remove(name);
};
const getToken = () => {
  return Cookies.get("JWT") ?? "";
};


const getUserId = () => {
  return Cookies.get("userId") ?? "";
};

const get =( name : any )=> {
  const cookie = Cookies.get(name);
  // let gottenCookie = cookie ? JSON.parse(cookie) : {};
  return cookie;
};
export default {
  set,
  remove,
  getToken,
  getUserId,
  get
};