import cat from '../images/catpic.jpg';

export default function About() {
    return (
        <div>
            <img src={cat} alt="Alt Text: photo of my cat" />
            <p>junior fullstack MERN dev.</p>
        </div>
    );
}