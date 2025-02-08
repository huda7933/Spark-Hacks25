import React from 'react';
import './index.css'; 

const listingData = [
    {
        title: 'Food',
        level: 'Coffee grounds',
        date: '2nd Jan 2023',
        status: 'Completed'
    },
    {
        title: 'Whiteboard',
        level: 'Office Supplies',
        date: '9th April 2023',
        status: 'Pending',
    },
    {
        title: 'Materials',
        level: 'Glass jars',
        date: '5th June 2023',
        status: 'Pending',
    },
    {
        title: 'Plastic',
        level: 'Stars',
        date: '7th July 2023',
        status: 'Pending',
    },
    {
        title: 'CSS',
        level: 'Intermediate',
        date: '2nd Feb 2023',
        status: 'Completed',
    },
];

const ListingTable = () => {
    return (
        <div className="shadow mx-1 px-3 bg-light rounded-3">
            <div className="d-flex align-items-center justify-content-between p-3 mt-3">
                <h4 className="mb-0">My Listings</h4>
                <button className="btn">See All</button>
            </div>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Date posted</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listingData.map((listing, index) => {
                            // Set color based on status
                            let textColor = 'blue';
                            if (listing.status === "Completed") textColor = 'green';
                            else if (listing.status === 'Pending') textColor = 'orange';

                            return (
                                <tr key={index}>
                                    <td>{listing.title}</td>
                                    <td>{listing.date}</td>
                                    <td style={{ color: textColor }}>{listing.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListingTable;
