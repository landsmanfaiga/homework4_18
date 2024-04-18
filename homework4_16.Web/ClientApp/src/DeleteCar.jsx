import React from 'react';
import withRouter from './withRouter';

class DeleteCar extends React.Component {
    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(DeleteCar);
