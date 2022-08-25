import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { GetQueryTypes } from "utils/types";
import { QuizDTO } from "typesDTO/quiz";

export const quizApi = createApi({
  reducerPath: `quiz`,
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Quiz"],

  endpoints: (builder) => ({
    // Queries
    quiz: builder.query<
      GetQueryTypes<QuizDTO>,
      {
        amount: string | number;
        difficulty: string;
      }
    >({
      query: ({ amount, difficulty }) => ({
        url: `/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`,
      }),
      providesTags: ["Quiz"],
    }),
  }),
});

export const { useQuizQuery } = quizApi;
