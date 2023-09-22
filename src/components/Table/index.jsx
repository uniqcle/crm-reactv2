import { Component, createContext } from 'react';
import Aside from '../Aside';
import RequestsList from '../RequestsList';
import { serverPath } from '../../helpers/vars';

export const TableContext = createContext(null)

class Table extends Component {

    state = {
        requests: [],
        filter: {
            status: 'all',
            product: 'all'
        }
    }

    constructor() {
        super();
        this.addInitClasses();
        this.fetchData(serverPath + 'requests');
    }

    componentDidMount() {
        this.getFromStorageFilter()
    }

    addInitClasses() {
        document.body.className = '';
        document.body.classList.add('with-nav', 'body--dashboard')
    }


    getFromStorageFilter() {
        let filter = {
            'product': 'all',
            'status': 'all',
        }

        let filterFromStorage = JSON.parse(localStorage.getItem('filter'));

        if (filterFromStorage) {

            this.setState(state => {
                return {
                    ...state.filter,
                    filter: filterFromStorage
                }
            })

            return;
        }
        this.setState(state => {
            return {
                ...state.filter,
                filter: filter
            }
        })

        return;
    }


    setToStorageFilter(newFilter) {
        localStorage.setItem('filter', JSON.stringify(newFilter));
    }


    fetchData(url) {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                this.setState(value => {
                    return value.requests = {
                        ...value,
                        requests: data
                    }
                })
            })
    }

    changeStatusFilter = (type) => {

        this.setState(state => {

            const newFilter = {
                ...state.filter,
                status: type
            }

            this.setToStorageFilter(newFilter)

            return {
                ...state,
                filter: newFilter
            }
        })



    }


    changeProductFilter = (type) => {
        this.setState(state => {
            const newFilter = {
                ...state.filter,
                product: type
            }

            this.setToStorageFilter(newFilter)

            return {
                ...state,
                filter: newFilter
            }
        })


    }

    filterByStatus = (requests, status) => {
        switch (status) {
            case 'all':
                return requests;

            case 'new':
                return requests.filter(r => r.status === 'new');

            case 'inwork':
                return requests.filter(r => r.status === 'inwork');

            case 'complete':
                return requests.filter(r => r.status === 'complete');

            default:
                return requests;
        }
    }

    filterByProduct = (requests, product) => {
        switch (product) {
            case 'all':
                return requests;

            case 'course-html':
                return requests.filter(r => r.product === 'course-html');

            case 'course-js':
                return requests.filter(r => r.product === 'course-js');

            case 'course-vue':
                return requests.filter(r => r.product === 'course-vue');

            case 'course-php':
                return requests.filter(r => r.product === 'course-php');

            case 'course-wordpress':
                return requests.filter(r => r.product === 'course-wordpress');

            default:
                return requests;
        }
    }


    render() {

        const filteredByStatus = this.filterByStatus(this.state.requests, this.state.filter.status);
        const filteredByProduct = this.filterByProduct(filteredByStatus, this.state.filter.product)



        return (
            <>

                <Aside statusFilter={this.state.filter.status} changeStatusFilter={this.changeStatusFilter} />

                {this.state.requests && <RequestsList
                    requests={filteredByProduct}
                    statusFilter={this.state.filter.status}
                    productFilter={this.state.filter.product}
                    changeStatusFilter={this.changeStatusFilter}
                    changeProductFilter={this.changeProductFilter}
                />}


            </>
        );
    }

}

export default Table; 