import "./App.css";
import OTP from "./components/OTP";
import TabForm from "./components/TabForm";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TablePagination from "./components/TablePagination";
import AutoComplete from "./components/AutoComplete";
import ProgressBar from "./components/ProgressBar";
import Form from "./components/TabForm1";
import Counter from "./components/Counter";
import DebounceThrottle from "./components/Debounce";
import Toast from "./components/Toast";
import Star from "./components/Star";
import Pagination from "./components/Pagination";
import DND from "./components/DND";
import FileUpload from "./components/FileUpload";
import MemoryGame from "./components/MemoryGame";
import NestedCheckbox from "./components/NestedCheckbox";
import VirtualizedList from "./components/VirtualizedList";
import InfiniteVirtualizedListScroll from "./components/InfiniteVirtualizedListScroll";
import Modal from "./components/Modal";
import Stepper from "./components/Stepper";
import GridLight from "./components/GridLight";
import SelectableGrid from "./components/SelectableGrid";
import Table from "./components/Table";
import InputChips from "./components/InputChips";
import GuessNumber from "./components/GuessNumber";
import DarkMode from "./components/DarkMode";
import GoogleSearch from "./components/GoogleSearch";
import Accordian from "./components/Accordian";
import ContactForm from "./components/ContactFrom";
import BookFlight from "./components/BookFlight";
import GenerateTable from "./components/GenerateTable";
import Tabs from "./components/Tabs";
import DataTable from "./components/DataTable1";
import DiceRoller from "./components/DiceRoller";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otp-input" element={<OTP />} />
        <Route path="tab-form" element={<TabForm />} />
        <Route path="table-pagination" element={<TablePagination />} />
        <Route path="auto-complete" element={<AutoComplete />} />
        <Route path="progress-bar" element={<ProgressBar />} />
        <Route path="tab-form-1" element={<Form />} />
        <Route path="counter" element={<Counter />} />
        <Route path="debounce-throttle" element={<DebounceThrottle />} />
        <Route path="toast" element={<Toast />} />
        <Route path="star" element={<Star />} />
        <Route path="pagination" element={<Pagination />} />
        <Route path="dnd" element={<DND />} />
        <Route path="file-upload" element={<FileUpload />} />
        <Route path="memory-game" element={<MemoryGame />} />
        <Route path="nested-checkbox" element={<NestedCheckbox />} />
        <Route path="virtualized-list" element={<VirtualizedList />} />
        <Route
          path="infinite-virtualized-list-scroll"
          element={<InfiniteVirtualizedListScroll />}
        />
        <Route path="modal" element={<Modal />} />
        <Route path="stepper" element={<Stepper />} />
        <Route path="grid-light" element={<GridLight />} />
        <Route path="selectable-grid" element={<SelectableGrid />} />
        <Route path="table" element={<Table />} />
        <Route path="input-chips" element={<InputChips />} />
        <Route path="guess-number" element={<GuessNumber />} />
        <Route path="dark-mode" element={<DarkMode />} />
        <Route path="google-search" element={<GoogleSearch />} />
        <Route path="accordian" element={<Accordian />} />
        <Route path="contact-form" element={<ContactForm />} />
        <Route path="book-flight" element={<BookFlight />} />
        <Route path="generate-table" element={<GenerateTable />} />
        <Route path="tabs-1" element={<Tabs />} />
        <Route path="data-table-1" element={<DataTable />} />
        <Route path="dice-roller" element={<DiceRoller />} />
      </Routes>
      
    </div>
  );
}

export default App;
