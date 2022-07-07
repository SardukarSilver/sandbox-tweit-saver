import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import Header from "./components/Header";
import SaveSection from "./components/SaveSection";
import SearchSection from "./components/SearchSection";

import "./App.css";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-wrapper">
        <Header />
        <div className="layout-wrapper">
          <SearchSection />
          <div className="dd-wrapper">Drag to save</div>
          <SaveSection />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
