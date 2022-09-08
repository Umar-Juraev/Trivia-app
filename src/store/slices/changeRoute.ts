import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const path = localStorage.getItem("path");

type StateType = {
  path: string;
};

type ActionType = StateType & {
  navigate: any;
  setPath: any;
};

const initialState: StateType = {
  path: path !== null ? JSON.parse(path) : "/settings",
};

const changeRouteSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    navigateSlice(state, { payload }: PayloadAction<ActionType>) {
      state.path = payload.path;
      payload.navigate(payload.path, { replace: true });
      payload.setPath(payload.path);
    },
  },
});

export const { navigateSlice } = changeRouteSlice.actions;

export default changeRouteSlice;
