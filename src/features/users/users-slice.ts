import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./data-access";
import { normalizeData } from "../../common/utils";

export const usersState = {
  data: {
    ids: [],
    byId: {},
  },
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersState,
  reducers: {
    getUsersStart(state) {
      state.data = {
        ids: [],
        byId: {},
      };
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUsersError(state, action) {
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
  getUsersStart,
  getUsersSuccess,
  getUsersError,
} = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const users = await getUsers();
    dispatch(getUsersSuccess(normalizeData(users)));
  } catch (err) {
    dispatch(getUsersError(err));
  }
};

export default usersSlice.reducer;
