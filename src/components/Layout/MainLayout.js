import React from "react";
import Navbar from './Navbar';


export default function MainLayout({children}) {
  

  return (
    <main className="cr-app bg-light">
      <Navbar/>
      {children}
    </main>
    
  );
}