import React from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Pagination({ page, pageCount }) {
  const navigate = useNavigate();
  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    navigate(`?page=${event.selected + 1}`);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel="‹"
      nextLabel="›"
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination justify-content-center mt-5"
      activeClassName="active"
      forcePage={page ? page - 1 : 0}
    />
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  pageCount: PropTypes.number,
};

Pagination.defaultProps = {
  page: 0,
  pageCount: 1,
};

export default Pagination;
