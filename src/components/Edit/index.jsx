import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { serverPath } from '../../helpers/vars';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('select');
    const [date, setDate] = useState('')

    useEffect(() => {
        fetch(serverPath + 'requests/' + id)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const { product, name, phone, email, status, date } = data;

                setProduct(product);
                setName(name);
                setPhone(phone);
                setEmail(email);
                setStatus(status);
                setDate(date);

            })



    }, []);


    useEffect(() => {
        document.body.className = '';
        document.body.classList.add('with-nav')
    })

    const onHandleSubmit = (e) => {
        e.preventDefault();

        const updatedRequest = {
            product, name, phone, email, status, date
        }

        fetch(serverPath + 'requests/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedRequest)
        }).then(res => {
            res.ok && navigate('/table');
        })
    }

    return (<>
        {/* <!-- main-wrapper --> */}
        <div className="form-wrapper">
            <div className="container-fluid">
                {/* <!-- row --> */}
                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <div className="admin-heading-1">Работа с заявкой</div>
                    </div>
                    <div className="col text-right">

                        <Link to={`/table`} className="btn btn-link">Вернуться назад</Link>

                    </div>
                </div>
                {/* <!-- // row -->
                <!-- row --> */}
                <div className="row">
                    {/* <!-- col --> */}
                    <div className="col">
                        <form id="form" onSubmit={onHandleSubmit}>
                            {/* <!-- card --> */}
                            <div className="card mb-4">
                                <div className="card-header">Данные о заявке</div>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>ID:</strong>
                                        </div>
                                        <div className="col">Заявка №<span id="number">{id}</span></div>
                                        <input name="id" type="hidden" id={id} />
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Дата создания:</strong>
                                        </div>
                                        <div className="col" id="date">{date}</div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Продукт:</strong>
                                        </div>
                                        <div className="col">
                                            <select id="product" name="product" onChange={e => setProduct(e.target.value)} value={product} className="custom-select" >
                                                <option value="course-html">Курс по верстке</option>
                                                <option value="course-js">
                                                    Курс по JavaScript
                                                </option>
                                                <option value="course-vue">Курс по VUE JS</option>
                                                <option value="course-php">Курс по PHP</option>
                                                <option value="course-wordpress">
                                                    Курс по WordPress
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Имя:</strong>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={e => setName(e.target.value)}
                                                value={name}
                                                id="name"
                                                name="name"
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Email:</strong>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Телефон:</strong>
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                id="phone"
                                                name="phone"
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <strong>Статус заявки:</strong>
                                        </div>
                                        <div className="col">
                                            <select className="custom-select" onChange={(e) => setStatus(e.target.value)} value={status} id="status" name="status">
                                                <option value="select">Выберите...</option>
                                                <option value="new">Новая</option>
                                                <option value="inwork">В работе</option>
                                                <option value="complete">Завершена</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //card --> */}
                            <div className="row justify-content-between">
                                <div className="col text-right">
                                    <button type="submit" className="btn btn-primary">Сохранить изменения</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <!-- //col --> */}
                </div>
                {/* <!-- //row --> */}
            </div>
        </div>
        {/* <!-- // main-wrapper --> */}
    </>);
}

export default Edit;