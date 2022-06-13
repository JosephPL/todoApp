import { Routes, Route } from "react-router-dom";

import All from './routes/All';
import Active from './routes/Active';
import Complete from './routes/Complete';

import Nav from "./components/Nav";

const App = () => {

  return (
    <div className="App">
      <header>
        <h1>#todo</h1>
      </header>
      
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="active" element={<Active />} />
          <Route path="complete" element={<Complete />} />
        </Routes>
      </main>
    </div>
  )
};

export default App;
