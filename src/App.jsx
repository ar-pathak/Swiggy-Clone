import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './feature/home/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p style={{ padding: "1rem" }}>Loading...</p>}>
        <Routes>
          {/* Simple routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>about</h1>} />

          {/* Nested lazy routes under Dashboard */}
          <Route path="/dashboard" element={<h1>Dashboard Layout</h1>}>
            <Route index element={<h1>Dashboard layout children</h1>} />
            <Route path="profile" element={<h1>profile</h1>} />
            <Route path="settings" element={<h1>settings</h1>} />
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={<h2 style={{ padding: "1rem" }}>Page Not Found</h2>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);