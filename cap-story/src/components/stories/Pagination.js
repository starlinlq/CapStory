import React from "react";
import { Pages, PageNumber } from "./Pagination.elements";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const numberOfpages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    numberOfpages.push(i);
  }
  return (
    <Pages>
      {numberOfpages.map((number) => (
        <PageNumber key={number} onClick={() => paginate(number)}>
          {number}
        </PageNumber>
      ))}
    </Pages>
  );
};

export default Pagination;
