import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import parseData from "./utils";


export const Homepage = (props) => {
  const gsheet_url =
    "https://spreadsheets.google.com/feeds/list/1ageTMu46SX5Zkq417sZG1izEZdFMUIlUY-TN32rGNA8/1/public/values?alt=json";
  // let supplierList = [];
  // let supplierDetailsList = [];
  // let tagList = [];
  const [gsData, setgsData ] =  useState({}) 

  useEffect(() => {
    axios
      .get(gsheet_url)
      .then((response) => {
        console.log('response', response.data);
        const resp  = parseData(response.data.feed.entry)
        console.log('response', resp);
        setgsData(resp)
      });
  }, ['']);
  console.log('gsData',gsData)
  return (
    <>
      <SearchBar data={gsData}/>
    </>
  );
};
