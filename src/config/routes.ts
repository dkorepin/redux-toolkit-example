import Main from "../features/main/main";
import User from "../features/user/user";
import Users from "../features/users/users";

export const routes = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/users",
    component: Users,
    exact: true,
  },
  {
    path: "/user/:id",
    component: User,
    exact: true,
  },
];
