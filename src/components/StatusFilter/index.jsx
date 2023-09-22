import statusButtons from "../../utils/statusButtons";

const StatusFilter = ({ statusFilter, changeStatusFilter }) => {

    const buttonRenders = statusButtons.map(btn => {
        const classesNames = btn.value === statusFilter ? 'btn btn-light active' : 'btn btn-light';

        return <a href="#" key={btn.value} className={classesNames} data-value={btn.value} onClick={(e) => { changeStatusFilter(e.target.dataset.value) }}>{btn.name}</a>
    })



    return (<>

        {/* <!-- Col --> */}
        <div className="col">
            <div id="topStatusBar" className="btn-group" role="group" aria-label="...">

                {buttonRenders}
                {/* <a href="#" className="btn btn-light" data-value="all" onClick={(e) => { changeStatusFilter(e.target.dataset.value) }}>Все</a>
                <a href="#" className="btn btn-light" data-value="new" onClick={(e) => { changeStatusFilter(e.target.dataset.value) }}>Новые</a>
                <a href="#" className="btn btn-light" data-value="inwork" onClick={(e) => { changeStatusFilter(e.target.dataset.value) }}>В работе</a>
                <a href="#" className="btn btn-light" data-value="complete" onClick={(e) => { changeStatusFilter(e.target.dataset.value) }}>Завершенные</a> */}
            </div>
        </div>
        {/* <!-- // Col --> */}
    </>);
}

export default StatusFilter;