import React from 'react';
import "./index.css";

const TransactionHistory = () => {
    const testItems = [
        {
            title: 'Cardboard boxes',
            description: 'Jan 2nd 2023, 2pm to 4pm',
        },
        {
            title: 'Office Supplies',
            description: '5th Jan 2023, 10am to 12pm',
        },
        {
            title: 'Packaging Materials',
            description: '8th Jan 2023, 2pm to 4pm',
        },
        {
            title: 'Cardboard boxes',
            description: '12th Jan 2023, 10am to 12pm',
        },
    ];

    return (
        <div className='shadow bg-light p-3 h-100'>
            <h5 className='fw-bold'>Transaction History</h5>
            {testItems.map((item, index) => (
                <div key={index} className="test-div row d-flex align-items-center">
                    <div className="col-md-12">
                        <p className="mb-0 fw-bold">{item.title}</p>
                        <p className="test_details">{item.description}</p>
                    </div>
                </div>
            ))}
            <hr />
            <div className="text-center">
                <button className="btn btn-primary">See All</button>
            </div>
        </div>
    );
};

export default TransactionHistory;
