import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UsersList } from './components/UsersList';
import { AddUser } from './components/AddUser';
import { EditUserData } from './components/EditUserData';
import { useDispatch } from 'react-redux';
import { fetchData } from './fetchData';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUserData />} />
      </Routes>
    </Router>
  );
}

export default App;