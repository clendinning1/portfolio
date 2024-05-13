import Project from '../components/Project';
// import p1Img from '../images/jate.PNG';
// import p2Img from '../images/calendar.png';

const p1 = {
    title: 'JATE',
    // imgsrc: p1Img,
    applink: 'https://text-editor-wvtd.onrender.com/',
    gh: 'text-editor',
}

const p2 = {
    title: 'Calendar App',
    // imgsrc: p2Img,
    applink: 'https://clendinning1.github.io/calendar-app/',
    gh: 'calendar-app',
}

export default function Portfolio() {
    return (
        <div>
            <p>portfolio</p>
            <Project title={p1.title} applink={p1.applink} gh={p1.gh} />
            <Project title={p2.title} applink={p2.applink} gh={p2.gh} />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    );
}