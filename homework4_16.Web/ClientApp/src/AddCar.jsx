import React from 'react';
import withRouter from './withRouter';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: ''
        }
    }

    onTextChange = e => {
        if (e.target.name == "make") {
            this.setState({ car: { ...this.state.car, make: e.target.value } });
        }
        else if (e.target.name == "model") {
            this.setState({ car: { ...this.state.car, model: e.target.value } });
        }
        else if (e.target.name == "year") {
            this.setState({ car: { ...this.state.car, year: e.target.value } });
        }
    }

    onSubmitClick = async () => {
        const { make, model, year} = this.state.car;
        await axios.post('/api/peoplecars/addcar', { id: this.props.params.id, make: make, model: model, year: year });
        this.setState({
            person: {
                firstName: '',
                lastName: '',
                age: '',
            }
        });
    }
    render() {
        const { make, model, year } = this.state.car;
        return (
            <>
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                    <input type="text" className="form-control" name="make" placeholder="Make" value={make} onChange={this.onTextChange} />
                        <br/>
                    <input type="text" className="form-control" name="model" placeholder="Model" value={model} onChange={this.onTextChange} />
                        <br/>
                    <input type="text" className="form-control" name="year" placeholder="Year" value={year} onChange={this.onTextChange} />
                        <br/>
                    <Link to='/'>
                        <button className="btn btn-primary btn-lg btn-block" onClick={this.onSubmitClick}>Submit</button>
                    </Link>
                </div>
            </>
        )
    }
}

export default withRouter(AddCar);
