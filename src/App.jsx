import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

const BASE_URL = "http://localhost:3005";
//! DIQQET DIQQET burada biz json serverden istifade etmis olduq. json serveri qurasdirmaq ve elave terminalda onu istifade ederek ayaga qaldirmaq lazimdir. yani bunlari istifade etdiyimiz zaman normalda 3 terminal acilir biri react projesi icin  biri api ucun biride elave isleri yerine yetirmek ucun terminal
function App() {
  //! Burada post isteyi ile db-ye data yuklemis olduq   POST istegi
  const createUser = async (newData) => {
    const response = await axios.post(`${BASE_URL}/users`, newData);
    console.log("response", response.data);
  };

  //! Burada put metodu ile var olan bir datani guncelledik
  const updateUser = async (userID, uptadeData) => {
    const response = await axios.put(`${BASE_URL}/users/${userID}`, uptadeData);
    console.log(response.data);
  };

  //! Burada delete methodu ile id nomresine gore datani sildik
  const deleteUser = async (userID) => {
    const response = await axios.delete(`${BASE_URL}/users/${userID}`);
    console.log(response.data);
  };

  //? Yuklenecek ( uptade ) olacaq data
  const data = {
    id: 1,
    userName: "RCgroup",
    password: "xxxxx",
  };
  //
  //
  //
  //
  //
  //!----------------------------------------------------------------

  //! ASENKRON PROBLEM orneyi Burada biz ilk once bir unvana istek ataciyiq ve o unvandan gelen datanin daxilindeki post id ile basqa bir unvana istek ataciyiq ve datani cekib consolda yazaciyiq.

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  };

  const getUserPostId = async (postId) => {
    const responsePost = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    return responsePost.data;
  };

  const getPost = async () => {
    const userPostId = await getUserById(4);
    const post = await getUserPostId(userPostId);
    console.log(post);
  };
  //! Bura qeder asenkron problemine ornek verdik
  //!----------------------------------------------------------------
  useEffect(() => {
    getPost(); //! asnkron probleminden cagrilan function
    //? Burada ise datani useEffect daxilinde sehive yuklendiyi zaman db-ye yukleyirik function burada cagrilib
    // createUser(data);
    //!
    //? Burada ise datani guncellemek ucun useEffect icerisinde yazdigimiz functionu cagirmis olduq
    // updateUser(2,data);
    //!
    //? Burada ise delet functionu ile id nomresine gore datani sile bilirik ve sildik.
    // deleteUser(1);
  }, []);
  return (
    <div>
      <div>Lorem, ipsum.</div>
    </div>
  );
}

export default App;
