import React, { useState, useEffect, useCallback } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Header } from "./src/Header";
import { About } from "./src/About";
import { Contact } from "./src/Contact";
import Body from "./src/Body";
import { Hero } from "./src/Hero";
import Error from "./src/Error";

const AppLayout = () => {
  return (
    <div className='container'>
      <Header />
      < Outlet />
      {/* <Body /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout />,
      children: [
        {
           path: "/",
           element: (
            <>
              <Hero />
              <Body />
            </>
          ),
          },
          {
            path: "/Infinite-Scrolling/",
            element: (
             <>
               <Hero />
               <Body />
             </>
           ),
           },
          {
              path: "/about",
              element: <About />,
          },
          {
              path: "/contact",
              element: <Contact />,
          },
      ],
      errorElement:<Error />
  },
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // root.render(<App />);

  root.render(<RouterProvider router={appRouter}/>);
