import React, { Component } from "react";
import Pagination from "react-js-pagination";

import { connect } from "react-redux";


class MyPagination extends Component{
  
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.props.fetch(pageNumber, this.props.pagination.size)
  }

  render() {
    return(
      <div className="d-flex justify-content-center">
        <Pagination
          hideNavigation
          activePage={this.props.pagination.activePage}
          itemsCountPerPage={this.props.pagination.itemsCountPerPage}
          totalItemsCount={this.props.pagination.totalItemsCount}
          pageRangeDisplayed={this.props.pagination.size}
          itemClass='page-item'
          linkClass='btn btn-light'
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    pagination:  state.pagination
  };
};

export default connect(mapStateToProps, {  })(MyPagination);

