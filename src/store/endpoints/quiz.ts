import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "constants/url";
import { GetQueryTypes, QuizParams } from "utils/types";
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
      QuizParams
    >({
      query: ({ amount, difficulty }) => ({
        url: `/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`,
      }),
      providesTags: ["Quiz"],
    }),
  }),
});

export const { useQuizQuery } = quizApi;
