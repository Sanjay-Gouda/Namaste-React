export const filterRestoList = (searchText, restroList) => {
  const filterData = restroList.filter((data) =>
    data?.data?.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return filterData;
};
