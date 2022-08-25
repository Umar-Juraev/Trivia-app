import { createSlice } from "@reduxjs/toolkit";

let data = localStorage.getItem("filters");

const initialState = {
  filters: data !== null ? JSON.parse(data) : null,
  correctAnswers: [],
  score: 0,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // payment states
    setFiltersSlice: (state, { payload }) => {
      state.filters = JSON.parse(payload);
    },
    setCorrectAnswersSlice: (state: any, { payload }) => {
      state.correctAnswers = [...state.correctAnswers, payload];
    },
    setScoreSlice: (state) => {
      state.score = state.score + 1;
    },
  },
});

export const { setFiltersSlice, setScoreSlice, setCorrectAnswersSlice } =
  filtersSlice.actions;

export default filtersSlice;
