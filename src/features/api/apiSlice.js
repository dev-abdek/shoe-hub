import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => "/todos",
      transformResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: (result = []) =>
        result ? result.map(({ id }) => ({ type: "Todos", id })) : ["Todos"],
    }),
    getEachTodo: build.query({
      query: (todoId) => `/todos/${todoId}`,
      providesTags: (result, error, arg) => [{ type: "Todos", id: arg }],
    }),
    addTodo: build.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: build.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Todos", id: arg.id }],
    }),
    deleteTodo: build.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Todos", id: arg.id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetEachTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
