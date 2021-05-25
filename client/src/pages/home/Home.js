import React from 'react'
import { Card, Button } from 'react-bootstrap'
import CardContainer from './CardContainer';

const Home = () => {
   const data = [
      {
         title: "Task pertama",
         address: "Disini"
      },
      {
         title: "Task kedua",
         address: "Disana"
      },
      {
         title: "Task ketiga",
         address: "Disitu"
      },
   ]

   return (
      <div className="Home bg-danger">
         <div className="pt-5 d-flex" style={{overflowX: "scroll"}}>
            {data.map(content => (
               <CardContainer title={content.title} address={content.address} />
            ))}
         </div>
      </div>
   );
}

export default Home
