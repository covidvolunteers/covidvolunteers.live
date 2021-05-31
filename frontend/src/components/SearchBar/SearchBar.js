import { Fragment, useEffect, useState } from "react";
import whatsappIcon from "./whatsapp.webp";

export default function SearchBar({ data, ...rest }) {
  // create a local copy of supplierList for searching, filtering etc
  const [suppliers, setSuppliers] = useState(data.supplierList || []);
  const [queryInput, setqueryInput] = useState("");

  useEffect(() => {
    setSuppliers(data.supplierList);
  }, [data.supplierList]);

  const searchItems = () => {
    if (!suppliers) return [];
    return suppliers.map((item) => (
      <div
        className="border-gray-300 border-b-2 p-4 pb-5"
        key={item.name}
      >
        <div className="text-black text-lg pb-1">
          <span>{item.name} </span>
          <a href="https://covidvolunteers.live" onClick={() => shareInWhatsapp(item)}>
            <img
              class="h-5 inline pl-3"
              src={whatsappIcon}
              alt="share in whatsapp"
            />
          </a>
        </div>
        <div className="text-gray-900 text-opacity-50">{item.description}</div>
        <div className="text-gray-900 text-opacity-75">
          <a href={`tel:0${item.contact}`}>+91 {item.contact} </a>
        </div>
          {item.tags.map(tag => (
          <span className="bg-indigo-500 px-2 py-0.5 rounded text-white text-sm mr-2" key={tag+item.name}onClick={() =>clickTag(tag)}> {tag} </span>))}
      </div>
    ));
  };

  const shareInWhatsapp = (supplier) => {
    let message = "Sourced from https://covidvolunteers.live%0a";
    for (var key in supplier) {
      if (key !== "tags" && supplier[key] != null && supplier[key] !== "") {
        message += supplier[key];
        message += "%0a";
      }
    }

    window.open("https://api.whatsapp.com/send?text=" + message, "_blank");
  };

  const clickTag = (tag) => {
    setqueryInput(tag);
    filterSuppliers({ target: { value: tag } });
  }
  const filters = () => {
    const { tagList } = data;
    if (!tagList) return [];
    return tagList.map((tag) => (
      <button
        class="rounded-full bg-gray-50 text-indigo-700 px-2 my-1 mx-1 text-sm"
        type="button"
        onClick={() => clickTag(tag)}
        key={`${tag}_tag`}
      >
        {tag}
      </button>
    ));
  };

  const filterSuppliers = (event) => {
    const { supplierList } = data;
    var query = event.target.value;
    console.log("query", query);

    // Reset filter if query is empty string
    if (query.length === 0) {
      setSuppliers(supplierList);
    }

    // Do nothing if query is too short
    if (query.length < 3) return;

    var filtered = [];
    query = query.toLowerCase();

    // Search in supplier name, description and contact
    supplierList.forEach(function (value) {
      var suppliername = value.name.toLowerCase();
      var description = value.description.toLowerCase();
      var contact = value.contact.toLowerCase();
      var tags = value.tags;

      if (
        suppliername.search(query) >= 0 ||
        description.search(query) >= 0 ||
        contact.search(query) >= 0
      ) {
        filtered.push(value);
      } else {
        tags.forEach(function (tag) {
          var tag_ = tag.toLowerCase();
          if (tag_.search(query) >= 0) {
            filtered.push(value);
          }
        });
      }
    });

    setSuppliers(filtered);
  };
  // to clear text
  const clearText = () => clickTag("");

  return (
    <>
      <nav className="bg-indigo-500 p-4 sticky top-0 z-20 ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative">
          <div className="flex rounded-l-full">
            <input
              className="w-full p-2 pl-6 rounded-l-full shadow"
              type="text"
              defaultValue={queryInput}
              onChange={filterSuppliers}
              placeholde
              r="enter what you are looking for..."
            />

            <button
              onClick={clearText}
              className="bg-white px-3 text-blue-700 hover:text-blue-400 text-lg"
            >
              x
            </button>
            <button className="bg-white px-4 w-auto flex justify-end items-center text-blue-500 hover:text-blue-400 border-gray-50 border-l-2 rounded-r-full shadow">
              <i>search</i>
            </button>
          </div>
          {/* show filters aka taglist */}
          {data.tagList && (
            <div class="flex-wrap flex space-x-2 pt-1 max-h-28 overflow-x-scroll">
              {filters()}
              <span
                class="absolute font-extrabold text-lg text-gray-100 bg-indigo-500 -bottom-3 -right-3 cursor-pointer px-2 rounded"
                // class="absolute font-extrabold text-lg text-white -bottom-1.5 -right-3 cursor-pointer"
                onClick={() => clickTag("")}
              >
                Reset Filters
              </span>
            </div>
          )}
        </div>
      </nav>
      {/* show all items that passes the filter / search query or the entire thing */}
      <div className="p-4">
        <div className="relative flex flex-col focus-within:items-center bg-white border-b-2 border-gray-50 rounded-xl">
          {searchItems()}
        </div>
      </div>
    </>
  );
}
