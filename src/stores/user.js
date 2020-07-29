import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { start } from "./operations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: undefined,
    isLoading: false,
    pseudo: undefined,
    score: undefined,
  },
  reducers: {
    usersLoading(state) {
      state.loading = true;
      console.log("action");
    },
    usersReceived(state, { payload: { id, pseudo } }) {
      state.loading = false;
      state.pseudo = pseudo;
      state.id = id;
      console.log({ id, pseudo } );
    },
  },
});

export const { usersLoading, usersReceived } = userSlice.actions;
export const userState = (state) => state.user;

export const fetchUsers = (pseudo) => async (dispatch) => {
  dispatch(usersLoading());
  const { status, data } = await Axios.post("/users", { pseudo });
  if (status !== 200) return;
  dispatch(usersReceived({ ...data, pseudo }));
  dispatch(start(pseudo));

};

export default userSlice.reducer;
