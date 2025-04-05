import './App.css';
import OTP from './components/OTP';
import TabForm from './components/TabForm';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TablePagination from './components/TablePagination';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/otp-input' element={<OTP />} />
        <Route path='tab-form' element={<TabForm />} />
        <Route path='table-pagination' element={<TablePagination />} />
      </Routes>
    </div>
  );
}

export default App;
