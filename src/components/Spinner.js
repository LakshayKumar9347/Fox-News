import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            // <div>
            //     <div className="container" style={{ width: "92%", margin: "2rem auto auto auto" }}>
            //         <div className="d-flex align-items-center text-light">
            //             <strong>Loading...</strong>
            //             <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            //         </div>
            //     </div>
            // </div>
            <div className="container d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
