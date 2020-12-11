import { sleep } from "../../common/utils";

export const getUsers = () =>
  fetch("http://jsonplaceholder.typicode.com/users").then((response) =>
    sleep(1000).then(() => {
      return response.json();
    })
  );
