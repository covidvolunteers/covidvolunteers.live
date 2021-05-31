function parseData(entries) {
  var supplierDetailSet = new Set();
  var tagSet = new Set();
  let supplierList = [];
  let supplierDetailsList = [];
  let tagList = [];

  entries.forEach(function (value) {
    var entry = {
      name: value.gsx$suppliername.$t,
      description: value.gsx$shortdescription.$t,
      contact: value.gsx$mobilenumber.$t,
      altcontact: value.gsx$alternatenumber.$t,
      landline: value.gsx$landlinenumber.$t,
      address: value.gsx$addressofsupplier.$t,
      website: value.gsx$website.$t,
      facebook: value.gsx$facebook.$t,
      instagram: value.gsx$instagram.$t,
      twitter: value.gsx$twitter.$t,
      donate: value.gsx$donateifngo.$t,
      tags: value.gsx$resource.$t.split(", "),
    };

    supplierDetailSet.add(entry.description);

    entry.tags.forEach(function (t) {
      tagSet.add(t);
    });

    supplierList.push(entry);
  });

  supplierDetailsList = Array.from(supplierDetailSet);
  supplierDetailsList.sort();

  tagList = Array.from(tagSet);
  tagList.sort();

  return {
    supplierList,
    supplierDetailsList,
    tagList
  };
}

export default parseData;
