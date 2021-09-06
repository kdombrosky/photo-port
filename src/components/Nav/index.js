import React, { useEffect } from 'react'; 
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    // variable values sent into this function in App.js
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;
    
    // useEffect hook to re-render category name when current
    // runs *after* return statement
    // [currentCategory] is what you're watching for
    // first argument is the function to run, 
    // second argument is when do we run the function you passed us
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
            </a>
            </h2>
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                    About me
                </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                {categories.map((category) => (
                <li
                className={`mx-1 ${
                    currentCategory.name === category.name && !contactSelected && `navActive`
                    }`}
                key={category.name}
                >
                    {/* render Gallery  */}
                    <span onClick={() => {
                        setCurrentCategory(category);
                        setContactSelected(false);
                    }}
                    >
                    {capitalizeFirstLetter(category.name)}
                    </span>
                </li>
                ))}
            </ul>
            </nav>
        </header>
    );
}

export default Nav;