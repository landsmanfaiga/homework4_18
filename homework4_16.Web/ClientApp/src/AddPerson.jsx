import React from 'react';
import withRouter from './withRouter';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddPerson extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }
    onTextChange = e => {
        if (e.target.name == "firstName") {
            this.setState({ person: { ...this.state.person, firstName: e.target.value } });
        }
        else if (e.target.name == "lastName") {
            this.setState({ person: { ...this.state.person, lastName: e.target.value } });
        }
        else if (e.target.name == "age") {
            this.setState({ person: { ...this.state.person, age: e.target.value } });
        }
    }

    onSubmitClick = async () => {
        const { firstName, lastName, age } = this.state.person;
        await axios.post('/api/peoplecars/addperson', { firstName: firstName, lastName: lastName, age: age });
        this.setState({
            person: {
                firstName: '',
                lastName: '',
                age: '',
                }
        });
        this.props.navigate('/');
    }
    render() {
        const { firstName, lastName, age } = this.state.person;
        return (
           <>
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                    <h2>Add a New Person</h2>
                    <input type="text" className="form-control" name="firstName" placeholder="First Name" value={firstName} onChange={this.onTextChange} />
                            <br/>
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" value={lastName} onChange={this.onTextChange} />
                            <br/>
                    <input type="text" className="form-control" name="age" placeholder="Age" value={age} onChange={this.onTextChange} />
                    <br />
               
                    <button className="btn btn-primary btn-lg btn-block" onClick={this.onSubmitClick}>Submit</button>
                    
                            
                </div>
            </>
        )
    }
}

export default withRouter(AddPerson);
