import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="list" element={<ListUsers />} />
      <Route path="create" element={<CreateUser />} />
      <Route path="update" element={<UpdateUser />} />
    </Routes>
  </BrowserRouter>
);

