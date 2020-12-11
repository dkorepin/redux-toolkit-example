import { sleep } from "../../common/utils";

export const getUserPosts = (id) =>
  fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`).then(
    (response) =>
      sleep(1000).then(() => {
        return response.json();
      })
  );
