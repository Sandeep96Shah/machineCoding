import './App.css';
import OTP from './components/OTP';
import TabForm from './components/TabForm';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TablePagination from './components/TablePagination';
import AutoComplete from './components/AutoComplete';
import ProgressBar from './components/ProgressBar';
import Form from './components/TabForm1';
import Counter from './components/Counter';
import DebounceThrottle from './components/Debounce';
import Toast from './components/Toast';
import Star from './components/Star';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/otp-input' element={<OTP />} />
        <Route path='tab-form' element={<TabForm />} />
        <Route path='table-pagination' element={<TablePagination />} />
        <Route path='auto-complete' element={<AutoComplete />} />
        <Route path='progress-bar' element={<ProgressBar />} />
        <Route path='tab-form-1' element={<Form />} />
        <Route path='counter' element={<Counter />} />
        <Route path='debounce-throttle' element={<DebounceThrottle />} />
        <Route path='toast' element={<Toast />} />
        <Route path='star' element={<Star />} />
      </Routes>
    </div>
  );
}

export default App;
