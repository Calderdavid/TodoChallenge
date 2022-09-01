import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import { TodoPage } from '../todo/TodoPage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<TodoPage/>} />
    </Routes>
  )
}
