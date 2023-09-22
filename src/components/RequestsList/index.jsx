import StatusFilter from '../StatusFilter';
import ProductFilter from '../ProductFilter';
import RequestRow from '../RequestRow';

const RequestsList = ({ statusFilter, productFilter, requests, changeStatusFilter, changeProductFilter }) => {

    const getRequestList = () => {
        return requests.map(request => {
            return (
                <RequestRow key={request.id} request={request} />
            )
        })
    }

    return (<>
        {/* <!-- main-wrapper --> */}
        <div className="main-wrapper">
            <div className="container-fluid">
                <div className="admin-heading-1">Все заявки</div>

                <form action="">
                    {/* <!-- <div className="form-row"> --> */}
                    <div className="row mb-3 justify-content-start">

                        <StatusFilter statusFilter={statusFilter} changeStatusFilter={changeStatusFilter} />

                        <ProductFilter productFilter={productFilter} changeProductFilter={changeProductFilter} />
                    </div>
                </form>

                <table className="table fs-14">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>дата</th>
                            <th>продукт</th>
                            <th>имя</th>
                            <th>email</th>
                            <th>телефон</th>
                            <th>статус</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tbody">

                        {requests && getRequestList()}


                    </tbody>
                </table>
            </div>
        </div>
        {/* <!-- // main-wrapper --> */}
    </>);
}

export default RequestsList;