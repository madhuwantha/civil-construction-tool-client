import React, { Component } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  CardFooter,
  Button,
  ButtonGroup,
} from "reactstrap";

import { connect } from "react-redux";
import { loadDepartments, loadDepartmentsPage } from "../../store/action/department";
import MyPagination from "../../components/MyPagination";

class DepartmentList extends Component {
  constructor(props) {
    super(props);
    this.props.loadDepartmentsPage(0,5);
  }
  render() {
    return (
      <div className="animated fadeIn my-height">
        <Row className="full-height">
          <Col className="full-height">
            <Card className="full-height">
              <CardHeader>
                <i className="fa fa-align-justify"></i> Departments List
                <input
                  placeholder="Find by title"
                  className="float-right"
                  type="text"
                />
              </CardHeader>
              <CardBody className="full-height scroll">
                <Table
                  hover
                  bordered
                  striped
                  responsive
                  size="md"
                  className="table"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Code</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.departments &&
                    this.props.departments.length > 0 ? (
                      this.props.departments.map((department) => {
                        return (
                          <tr key={department.id}>
                            <th scope="row">2</th>
                            <td>{department.name}</td>
                            <td>{department.code}</td>
                            <td className="text-align-center">
                              <ButtonGroup>
                                <Button>Middle</Button>
                                <Button>Right</Button>
                              </ButtonGroup>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr key="1">
                        <td colSpan="5">No tada found</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
                <nav className="float-right">
                  <MyPagination fetch={this.props.loadDepartmentsPage}/>
                  {/*<Pagination >*/}
                  {/*  <PaginationItem >*/}
                  {/*    <PaginationLink previous tag="button">*/}
                  {/*      Prev*/}
                  {/*    </PaginationLink>*/}
                  {/*  </PaginationItem>*/}
                  {/*  <PaginationItem active>*/}
                  {/*    <PaginationLink tag="button">1</PaginationLink>*/}
                  {/*  </PaginationItem>*/}
                  {/*  <PaginationItem>*/}
                  {/*    <PaginationLink tag="button">2</PaginationLink>*/}
                  {/*  </PaginationItem>*/}
                  {/*  <PaginationItem>*/}
                  {/*    <PaginationLink tag="button">3</PaginationLink>*/}
                  {/*  </PaginationItem>*/}
                  {/*  <PaginationItem>*/}
                  {/*    <PaginationLink tag="button">4</PaginationLink>*/}
                  {/*  </PaginationItem>*/}
                  {/*  <PaginationItem>*/}
                  {/*    <PaginationLink next tag="button">*/}
                  {/*      Next*/}
                  {/*    </PaginationLink>*/}
                  {/*  </PaginationItem>*/}
                  {/*</Pagination>*/}
                </nav>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.department.departments);
  return { departments: state.department.departments,
    isLoading: state.behavior.isLoading
  };
};

export default connect(mapStateToProps, { loadDepartments, loadDepartmentsPage })(DepartmentList);
