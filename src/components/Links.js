import React from "react";

const Links = ({ links }) => {

    return (
        <div>
            <h3>Links</h3>
            <a href="#links">{links.github}</a> <br />
            <a href="#links">{links.linkedin}</a>
        </div>
    )

}

export default Links