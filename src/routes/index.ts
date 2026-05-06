import { Route, Routes } from 'react-router-dom';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';

const setRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/search" element={<SearchBar />} />
        </Routes>
    );
};

export default setRoutes;