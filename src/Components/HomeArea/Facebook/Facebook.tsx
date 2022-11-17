import css from "./Facebook.module.css"

function Facebook(): JSX.Element {
    return (
        <div className={css.Facebook + " Box"}>
			<span className={css.LargeText + ' ' + css.CoolText}>facebook page: https://facebook.com/northwind</span>
        </div>
    );
}

export default Facebook;
