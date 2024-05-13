import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div>
            <Link to="/resume.txt" target="_blank" download>Download my resume</Link>
            <p>Front-End Skills:
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Responsive design</li>
                </ul>
                Back-end Skills:
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </p>
        </div>
    );
}