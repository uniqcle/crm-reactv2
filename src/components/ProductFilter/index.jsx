
const ProductFilter = ({ productFilter, changeProductFilter }) => {

    return (<>

        {/* <!-- Col --> */}
        <div className="col">
            <select className="custom-select" id="productSelect" value={productFilter} onChange={(e) => { changeProductFilter(e.target.value) }}>
                <option value="all">Все продукты</option>
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE JS</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
            </select>
        </div>
        {/* <!-- // Col --> */}

    </>);
}

export default ProductFilter;