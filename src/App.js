// App.js is the center of the application. Think of App.js as the root component, 
// or the wrapper component that houses all of the other components

import React, { useState } from 'react';
// import components below
import Nav from './components/Nav/';
import About from './components/About/';
import Gallery from './components/Gallery/';
import ContactForm from './components/Contact';

function App() {
  // initial value of false to prevent contact form from showing when user gets to homepage
  // use contactSelected for a conditional to render the page
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* Conditionally render components to view gallery of pics, or contact form */}
          {/* this is a ternary operator ? : */}
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
              <ContactForm></ContactForm>
            )}
        </div>
      </main>
    </div>
  );
}

export default App;
