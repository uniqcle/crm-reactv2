import { Link } from 'react-router-dom'

const Nav = () => {
    return (<>

        {/* <!-- Навигация по проекту --> */}
        <nav className="project-nav">
            <div className="project-nav__links-wrapper">
                <Link to="/">Форма добавления заявок</Link>
                <Link to="table">Таблица с заявками</Link>
                <Link to="edit">Редактирование заявки</Link>
            </div>
        </nav>

    </>);
}

export default Nav;