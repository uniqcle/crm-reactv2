import { Link } from 'react-router-dom'
import productList from '../../utils/productList';
import statusLabels from '../../utils/statusLabels';
import formatPhoneNumber from '../../utils/formatPhone';

const RequestRow = ({ request }) => {

    const colorBadges = {
        new: 'danger',
        inwork: 'warning',
        complete: 'success'
    }

    const classStatus = colorBadges[request.status];

    return (

        <>
            <tr>
                <th scope="row">{request.id}</th>
                <td>{request.date}</td>
                <td>{productList[request.product]}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{formatPhoneNumber(request.phone)}</td>
                <td>
                    <div className={`badge badge-pill badge-${classStatus}`}> {statusLabels[request.status]}</div>
                </td>
                <td>
                    <Link to={`/edit/${request.id}`}>Редактировать</Link>
                </td>
            </tr>

        </>);
}

export default RequestRow;