import React from 'react';
import Header from '../Header';
import Courses from '../Items';
import CourseList from '../Listings';
import TestSchedule from '../TestSchedule'; 
import './index.css';

const courseDetails = [
    { id: 1, total: 2, text: 'Current Listings ', color: 'orange' },
    { id: 2, total: 5, text: 'Completed Listings', color: 'green' },
    { id: 3, total: 10, text: 'Interested Courses', color: 'blue' },
];

const Body = () => {
    return (
        <div className='w-100 course-wrapper'>
            <Header />
            <h4 className='mx-3 d-block'>Welcome Back, Aqualink</h4>
            <div className='d-flex justify-content-around'>
                <div>
                    <div className='d-flex gap-5 mt-4'>
                        {courseDetails.map(each => (
                            <Courses key={each.id} each={each} />
                        ))}
                    </div>
                    <div>
                        <CourseList />
                    </div>
                </div>
                <TestSchedule />
            </div>
        </div>
    );
};

export default Body;
