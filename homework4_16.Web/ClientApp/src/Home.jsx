﻿import React from 'react';
import PersonRow from './PersonRow';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {
    state = {
        people: [],
        currentPerson: {
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        }
    }

    componentDidMount = async () => {
        this.loadPeople();
        
    }
    loadPeople = async() => {
        const response = await axios.get('/api/peoplecars/getall');
        this.setState({ people: response.data });
    }


   

    render() {
        return (
            <>
                <Link to='/addperson'>
                    <button className="btn btn-success btn-lg w-100">Add Person</button>
                </Link>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map(p => <PersonRow key={p.id} person={p}></PersonRow>)}

                    </tbody>
                </table>
            </>
        )
    }
}

export default Home;

