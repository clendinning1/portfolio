import Project from '../components/Project';

// project preview images
import p1Img from '../images/jate.png';
import p2Img from '../images/mongo.png';
import p3Img from '../images/commerce.png';
import p4Img from '../images/employee.png';
import p5Img from '../images/logogen.png';
import p6Img from '../images/calendar.png';


// constructor for individual projects
function Proj(title, link, sw, gh) {
    this.title = title;
    this.link = link;
    this.sw = sw;
    this.gh = gh;
}

// individual project info
const p1 = new Proj('JATE', 'https://text-editor-wvtd.onrender.com/', 'site', 'text-editor');
const p2 = new Proj('Social Media w/ MongoDB', 'https://drive.google.com/file/d/14uPt5qMzUf8RBnV7rrZ0WklNgXzDkh8D/view', 'walkthrough', 'social-mongo');
const p3 = new Proj('Commerce Database', 'https://drive.google.com/file/d/1JL0MVo8XVlfZU3c0MJarnnbH3swIyZOB/view', 'walkthrough', 'commerce-database');
const p4 = new Proj('Employee Database', 'https://drive.google.com/file/d/1G3zI8Aso9kLox39Aqn0wzcty3lcXEYSV/view', 'walkthrough', 'employee-database');
const p5 = new Proj('Logo Generator', 'https://drive.google.com/file/d/1KYDy_E600tE1QymlHfeIqXBJR_nnBEib/view', 'walkthrough', 'logo-generator');
const p6 = new Proj('Calendar App', 'https://clendinning1.github.io/calendar-app/', 'site', 'calendar-app');


export default function Portfolio() {
    return (
        <div>
            {/* feeding info to each Project component via props from above constructor */}
            <Project title={p1.title} imgsrc={p1Img} link={p1.link} sw={p1.sw} gh={p1.gh} />
            <Project title={p2.title} imgsrc={p2Img} link={p2.link} sw={p2.sw} gh={p2.gh} />
            <Project title={p3.title} imgsrc={p3Img} link={p3.link} sw={p3.sw} gh={p3.gh} />
            <Project title={p4.title} imgsrc={p4Img} link={p4.link} sw={p4.sw} gh={p4.gh} />
            <Project title={p5.title} imgsrc={p5Img} link={p5.link} sw={p5.sw} gh={p5.gh} />
            <Project title={p6.title} imgsrc={p6Img} link={p6.link} sw={p6.sw} gh={p6.gh} />
        </div>
    );
}