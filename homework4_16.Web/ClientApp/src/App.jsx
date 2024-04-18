import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
import AddPerson from './AddPerson';
import AddCar from './AddCar';
import DeleteCar from './DeleteCar';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addperson' element={<AddPerson />} />
                <Route path='/addcar/:id' element={<AddCar />} />
                <Route path='/deletecar/:id' element={<DeleteCar />} />
            </Routes>
        </Layout>
    );
}

export default App;