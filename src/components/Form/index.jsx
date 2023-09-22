import { useState, useEffect } from 'react'
import getRandomData from '../../utils/testData.js'
import { serverPath } from '../../helpers/vars.js';

const Form = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('course-php');

    // Генерация тестовых данных
    const generateTestUser = () => {

        const user = getRandomData();

        setName(user.name);
        setPhone(user.phone);
        setEmail(user.email);
        setProduct(user.product)
    }

    // 
    useEffect(() => {

        generateTestUser();
        document.body.className = '';
        document.body.classList.add('with-nav', 'radial-bg', 'flex-center')
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        const date = new Date().toISOString()
        const status = 'new'

        const newUser = {
            date: new Date(date).toLocaleDateString(),
            name,
            phone,
            email,
            product,
            status,
        }

        fetch(serverPath + 'requests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        }).then((res) => {
            res.ok && generateTestUser();
        })
    }

    return (<>

        {/* <!-- white-plate --> */}
        <div className="white-plate white-plate--payment">
            <div className="container-fluid">

                {/* <!-- header --> */}
                <div className="white-plate__header text-center">
                    <p className="white-plate__logo">
                        <span>Форма</span> заявок
                    </p>
                </div>
                {/* <!-- // header --> */}

                <div className="white-plate__line-between white-plate__line-between--main"></div>

                <form id="form" onSubmit={handleSubmit}>
                    <label>Ваши данные:</label>
                    <div className="form-group">
                        <input id="name" type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} autoComplete="on" className="form-control" placeholder="Имя и Фамилия" required />
                    </div>
                    <div className="form-group">
                        <input id="phone" type="text" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} autoComplete="on" className="form-control" placeholder="Телефон" />
                    </div>
                    <div className="form-group">
                        <input id="email" type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} autoComplete="on" className="form-control" placeholder="Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Продукт:</label>
                        <select id="product" value={product} onChange={(e) => { setProduct(e.target.value) }} name="product" className="form-control" id="exampleFormControlSelect1">
                            <option value="course-html">Курс по верстке</option>
                            <option value="course-js">Курс по JavaScript</option>
                            <option value="course-vue">Курс по VUE JS</option>
                            <option value="course-php">Курс по PHP</option>
                            <option value="course-wordpress">Курс по WordPress</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-lg btn-primary btn-block">Оформить заявку</button>
                    </div>
                </form>

            </div>
        </div>
        {/* <!-- // white-plate --> */}

    </>);
}

export default Form;