import React from 'react';
import './App.css';
import Home from '../src/features/Home/Home';
import Header from '../src/features/Header/Header';
import Subreddits from '../src/features/Subreddits/Subreddits';

function App() {
  return (
    <>
    <Header />
    <main>
      <Home />
    </main>
    <aside>
      <Subreddits />
    </aside>
    </>
  );
}

export default App;
