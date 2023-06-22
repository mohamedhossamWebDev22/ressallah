import React from 'react';

import Card from './components/card'

const App = () => {
  return (
    <>
      <div dir='rtl' className="nav">
        <h1>رسائل</h1>
        <p>رسائل لتظبيط الموود!!</p>
      </div>

      <div className="bdy">
        <Card />
      </div>

      <div className="foot">
        Made By: محمد حسام
      </div>
    </>
  );
}

export default App;
