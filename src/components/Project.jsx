function Project(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            {/* <img src={props.imgsrc} alt="Alt Text: website preview"></img> */}
            <a href={`${props.applink}`}>App Link</a>
            <a href={`https://github.com/clendinning1/${props.gh}`}>GH Repo</a>
        </div>
    );
}

export default Project;