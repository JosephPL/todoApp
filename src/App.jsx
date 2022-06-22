import { Routes, Route } from "react-router-dom";

import All from './routes/All';
import Active from './routes/Active';
import Complete from './routes/Complete';

import Nav from "./components/Nav";
import { TodoProvider } from "./context/TodoProvider";

const App = () => {

  return (
      <div className="App">
      <header>
        <h1>#todo</h1>
      </header>
      
      <Nav />
      <TodoProvider >
        <main>
          <Routes>
            <Route path="/" index element={<All />} />
            <Route path="active" element={<Active />} />
            <Route path="complete" element={<Complete />} />
          </Routes>
        </main>
        </TodoProvider>
     </div>
    
  )
};

export default App;
