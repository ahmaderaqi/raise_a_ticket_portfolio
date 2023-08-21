import { Card } from 'react-bootstrap'
// import './portfolio.css'
import React from 'react';
import Cards from '../Cards/Cards';

function Services() {
    return (
        <div className=" projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10 bg-white pb-4 ">
            <Cards name="websites" para="Discover our clients' websites and contact us to make an amazing one for your company" imgg="https://www.sectorlink.com/img/blog/why-are-websites-important.png"  />
            <Cards name="Mobile Apps" para="Experience seamless functionality and stunning design with our feature-rich mobile app" imgg="https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png" />
            <Cards name="E-commerce" para="Browse, choose, and purchase with ease on our visually captivating e-commerce platform" imgg="https://www.cxtoday.com/wp-content/uploads/2022/03/ecommerce-3.png"  />
            <Cards name="Gaming" para="Embark on epic virtual adventures with our immersive video game experiences" imgg="https://contentstatic.techgig.com/thumb/msid-92677072,width-460,resizemode-4/4-Programming-languages-you-must-master-for-game-development.jpg?31916" />
            <Cards name="Education" para="Enhance your educational center by using modern technologies" imgg="https://test.edu-syria.eu/wp-content/uploads/2020/04/ed-tech1553237040995.png" />
        </div>
    );
}

export default Services;



