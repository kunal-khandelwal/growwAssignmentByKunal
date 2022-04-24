import React, { useCallback, useEffect, useState } from "react";
import BankTable from "../Banks/BankTable";

const SearchBar = () => {
  const cities = ["Mumbai", "Delhi", "Kolkata", "Kherli", "Jaipur"];

  const [city, setCity] = useState("Mumbai");
  const [banks, setBanks] = useState([]);
  const [filteredBanks, setFilteredBanks] = useState([]);
  const [bankNames, setBanknames] = useState([]);

  const searchHandler = async (cityNameToBeSearched) => {
    const url = `https://vast-shore-74260.herokuapp.com/banks?city=${cityNameToBeSearched.toUpperCase()}`;
    const response = await fetch(url, { cache: "force-cache" });
    const data = await response.json();
    setBanks(data);
    setFilteredBanks(data);
    findBankNames(data);
  };

  const findBankNames = (data) => {
    let arr = ["All Banks"];
    data.filter((item) => arr.push(item.bank_name));
    setBanknames([...new Set(arr)]);
  };

  useEffect(() => {
    searchHandler('Mumbai');
  }, []);

  const citySelectHandler = async (event) => {
    setCity(event.target.value);
    await searchHandler(event.target.value);
  };
  const bankNameSelectHandler = (event) => {
    if (event.target.value == "All Banks") setFilteredBanks(banks);
    else setFilteredBanks(banks.filter((item) => item.bank_name == event.target.value));
  };

  return (
    <>
      <div className="text-center m-3 row">
        <div className="col">
          <select
            className="form-select form-select-md my-2 text-center"
            name="city"
            onChange={citySelectHandler}
            onClick={citySelectHandler}
          >
            {cities.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col">
          {bankNames.length > 0 && (
            <select
              className="form-select form-select-md my-2 text-center"
              name="bankName"
              onChange={bankNameSelectHandler}
            >
              {bankNames.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          )}
        </div>
      </div>
      {banks.length > 0 && <BankTable banks={filteredBanks} />}
    </>
  );
};

export default SearchBar;
