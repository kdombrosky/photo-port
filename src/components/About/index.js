import React from 'react'; 
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    // Return JSX - JavaScript XML
    // React.createElement("the html element you wish to create", props, 
    // remaining children(any child elements between the opening and closing tag of that element))
    
    // This is the behind the scenes equivilant of what is being returned below
    // React.createElement("section", {}, [
    // React.createElement("h1", {}, "Who am I?"),
    // ])
    return (
        <section className="my-5">
            
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;