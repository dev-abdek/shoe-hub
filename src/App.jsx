import Course from "./components/Course";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Phonebook from "./components/Phonebook";
import Form from "./components/Form";
import NewList from "./features/newList/NewList";
import EditNewList from "./features/newList/EditNewList";
import SinglePost from "./features/newList/SinglePost";
import SingleNewNote from "./features/notes/SingleNewNote";
import EditNewNotes from "./features/notes/EditNewNotes";
import SingleTodo from "./features/todos/SingleTodo";
import TodoForm from "./features/todos/TodoForm";
import EditTodo from "./features/todos/EditTodo";
import LoginPage from "./features/login/LoginPage";
import Person from "./components/Person";
import WelcomeBrand from "./components/WelcomeBrand";
import MoviesLayout from "./features/movies/MoviesLayout";
import EditMovies from "./features/movies/EditMovies";
import SingleMovie from "./features/movies/SingleMovie";
import NewNotesLayout from "./features/notes/NewNotesLayout";
import DavePractical from "./components/DavePractical";
import RandColors from "./components/Colors/RandColors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomeBrand />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "phonebook",
        element: <Phonebook />,
      },
      {
        path: "lists",
        element: <NewList />,
      },
      {
        path: "lists/:listId",
        element: <SinglePost />,
      },
      {
        path: "lists/editList/:listId",
        element: <EditNewList />,
      },
      {
        path: "notes",
        element: <NewNotesLayout />,
      },
      {
        path: "notes/:noteId",
        element: <SingleNewNote />,
      },
      {
        path: "notes/editNewNote/:noteId",
        element: <EditNewNotes />,
      },
      {
        path: "todos",
        element: <TodoForm />,
      },
      {
        path: "todos/:todoId",
        element: <SingleTodo />,
      },
      {
        path: "todos/editTodo/:todoId",
        element: <EditTodo />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "person",
        element: <Person />,
      },
      {
        path: "movies",
        element: <MoviesLayout />,
      },
      {
        path: "movies/:movieId",
        element: <SingleMovie />,
      },
      {
        path: "movies/edit/:movieId",
        element: <EditMovies />,
      },
      {
        path: "practical",
        element: <DavePractical />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "colors",
        element: <RandColors />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default App;
