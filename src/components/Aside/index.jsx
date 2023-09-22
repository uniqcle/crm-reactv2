import statusButtons from "../../utils/statusButtons";

const Aside = ({ statusFilter, changeStatusFilter }) => {



    const buttonRenders = statusButtons.map(btn => {
        const classesNames = btn.value === statusFilter ? 'active' : '';

        //return <a href="#" key={btn.value} className={classesNames} data-value={btn.value} onClick={(e) => { changeStatusFilter(e.target.dataset.value) }}>{btn.name}</a>
        return <li key={btn.value}>
            <a
                className={classesNames}
                data-value={btn.value}
                data-role="left-status"
                onClick={(e) => { changeStatusFilter(e.target.dataset.value) }} href="#">
                {btn.name}

           </a>

        </li>
    })




    return (<>
        {/* <!-- left-panel --> */}
        <div className="left-panel blue-skin">
            {/* <!-- Logo --> */}
            <div className="left-panel__logo">
                <div className="left-panel__logo-title">CRM заявки</div>
                <div className="left-panel__logo-subtitle">учебный проект webcademy</div>
            </div>
            {/* <!-- // Logo --> */}

            {/* <!-- User --> */}
            <div className="left-panel__user clearfix">
                <div className="left-panel__user-photo">
                    <img src="img/avatars/avatar-128.jpg" alt="Avatar" />
                </div>
                <div className="left-panel__user-name">Андрей <br />Анучкин</div>
            </div>
            {/* <!-- // User --> */}
            {/* <!-- Navigation 1 --> */}
            <div className="left-panel__navigation">
                <div className="left-panel__navigation-title">Заявки</div>
                <ul>
                    {buttonRenders}
                    {/* <li><a data-value="all" data-role="left-status" href="#" className="active">Все вместе</a></li>
                    <li><a data-value="new" data-role="left-status" href="#" >Новые<div className="badge" id="badge-new">12</div></a></li>
                    <li><a data-value="inwork" data-role="left-status" href="#">В работе</a></li>
                    <li><a data-value="complete" data-role="left-status" href="#">Завершенные</a></li> */}
                </ul>
            </div>
            {/* <!-- // Navigation 1 --> */}

        </div>
        {/* <!-- // left-panel --> */}

    </>);
}

export default Aside;