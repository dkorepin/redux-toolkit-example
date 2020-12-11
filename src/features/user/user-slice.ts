import { createSlice } from "@reduxjs/toolkit";
import { getUserPosts } from "./data-access";
import { normalizeData } from "../../common/utils";

export const userState = {
  data: {
    ids: [],
    byId: {},
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    getUserPostsStart(state) {
      state.data = {
        ids: [],
        byId: {},
      };
      state.loading = true;
      state.error = null;
    },
    getUserPostsSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUserPostsError(state, action) {
      state.data = {
        ids: [],
        byId: {},
      };
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUserPostsStart,
  getUserPostsSuccess,
  getUserPostsError,
} = userSlice.actions;

export const fetchUserPosts = (id) => async (dispatch) => {
  try {
    dispatch(getUserPostsStart());
    const posts = await getUserPosts(id);
    dispatch(getUserPostsSuccess(normalizeData(posts)));
  } catch (err) {
    dispatch(getUserPostsError(err));
  }
};

export default userSlice.reducer;
