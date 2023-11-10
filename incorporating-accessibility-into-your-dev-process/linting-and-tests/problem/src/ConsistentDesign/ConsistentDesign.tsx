import React from "react";

const ConsistentDesign = () => {
    return (
        <section>
            <h2>Consistent design</h2>
            <p>Folks at Bitovi have expertise in the following areas:</p>
            <ul>
                <li><a href="https://www.bitovi.com/services/agile-project-management-consulting">Project Management</a></li>
                <li><button onClick={() => { window.location.href = 'https://www.bitovi.com/services/product-design-consulting' }}>Product Design</button></li>
                <li><a href="https://www.bitovi.com/services/frontend-development-consulting">Frontend Engineering</a></li>
                <li><button onClick={() => { window.location.href = 'https://www.bitovi.com/services/backend-engineering-consulting' }}>Backend Engineering</button></li>
                <li><a href="https://www.bitovi.com/services/devops-consulting">DevOps Engineering</a></li>
            </ul>
        </section>
    );
};

export default ConsistentDesign;