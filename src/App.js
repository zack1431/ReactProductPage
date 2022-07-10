// import logo from './logo.svg';
// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import ProductComp from './product'
// import PriceCart from './PriceCart'
import './App.css';



function Header() {
  return (
      <div className="header">
      </div>
    )
} 
// const data = [
//   {
//     plan:"Free",
//     price:"0",
//     user:"Single User",
//     storage:"5gb Storage",
//     access:"Community Access",
//     private:"Unlimited Private Projects",
//     support:"Dedicated Phone Support",
//     subdomain:"Free Subdomain",
//     reports:"Monthly Status Reports",
//     isUser:true,
//     isStorage:true,
//     isAccess:true,
//     isPrivate:false,
//     isSupport:false,
//     isSubdomain:false,
//     isReports:false
//   },
//   {
//     plan:"PLUS",
//     price:"9",
//     user:"5 Users",
//     storage:"50gb Storage",
//     access:"Community Access",
//     private:"Unlimited Private Projects",
//     support:"Dedicated Phone Support",
//     subdomain:"Free Subdomain",
//     reports:"Monthly Status Reports",
//     isUser:true,
//     isStorage:true,
//     isAccess:true,
//     isPrivate:true,
//     isSupport:true,
//     isSubdomain:true,
//     isReports:false
//   },
//   {
//     plan:"PRO",
//     price:"49",
//     user:"Unlimited Users",
//     storage:"150gb Storage",
//     access:"Community Access",
//     private:"Unlimited Private Projects",
//     support:"Dedicated Phone Support",
//     subdomain:"Free Subdomain",
//     reports:"Monthly Status Reports",
//     isUser:true,
//     isStorage:true,
//     isAccess:true,
//     isPrivate:true,
//     isSupport:true,
//     isSubdomain:true,
//     isReports:true
//   }
// ]

// function PriceCard(){
//   return (
//     <div>
//       <section className="pricing py-5">
//         <div className="container">
//           <div className="row">
//            {
//               data.map((val,idx) => 
//                  <PriceCart cardData={val} key={idx}/>
//               )
//             }
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

function App() {
  // const [users, setUsers] = useState();
  // const [movies, setMovies] = useState([]);

  // Function to collect data
  // const getApiData = async () => {
  //   let response = await fetch(
  //     "https://imdb-api.com/en/API/Top250Movies/k_3lrya3ke"
  //   )

  //   let allchars = await response.json();

  //   setMovies(allchars.items);
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);


  return (
    <div>
      <Header />
      <ProductComp />
    </div>
      /*
      {movies &&
        movies.map((user,index) => (
          <div className="item-container" key={index}>
            <div className="title">Title:{user.title}</div>
          </div>
        ))}*/
  );
}

export default App;
