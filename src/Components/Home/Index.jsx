import React from "react";
import "./styles.module.scss";
import Cart from "../Cart/index";
import Products from "../Products/index";


import styles from "./styles.module.scss";
import {Login} from "../Login/index";
import { useState } from "react";
import Ranking from "../Ranking/index";

const cartOpen = true;
const Home = () => {
  const [user,setUser] = useState([]);
  return (

    <div className={styles.home}>
      {cartOpen && user.length>0 ?  
       (
        <>
          <Cart user ={user} setUser={setUser}/>
          <Products user ={user}/>
        </>
      ) : ( //aca irian el ranking
        <><Ranking user={user}  /><Login setUser = {setUser}  /></>
      )}
    </div>
  );
};

export default Home;
