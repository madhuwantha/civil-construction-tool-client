import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  CardFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { connect } from "react-redux";
import { createDepartment } from "../../store/action/department";
import Department from "../../model/Department";

class DepartmentCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      name: "",
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeCode(event) {
    this.setState({ code: event.target.value });
  }

  handleSubmit(event) {
    const d = new Department("", this.state.name, this.state.code);
    this.props.createDepartment(d);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="10">
            <Card>
              <CardHeader>
                <strong>Add Department</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        value={this.state.name}
                        onChange={this.handleChangeName}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Code</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        value={this.state.code}
                        onChange={this.handleChangeCode}
                        type="text"
                        id="code"
                        name="code"
                        placeholder="Code"
                      />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Row className="float-right">
                  {!this.props.isLoading ? (
                    <Button
                      onClick={this.handleSubmit}
                      // type="submit"
                      size="sm"
                      color="primary"
                    >
                      <i className="fa fa-dot-circle-o"></i> Create
                    </Button>
                  ): (
                    <Button
                      onClick={this.handleSubmit}
                      // type="submit"
                      size="sm"
                      color="primary"
                    >
                      <i className="fa fa-dot-circle-o"></i> Creating
                    </Button>
                  )}
                  <Button type="reset" size="sm" color="danger">
                    <i className="fa fa-ban"></i> Reset
                  </Button>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {isLoading: state.behavior.isLoading };
};

// export default DepartmentCreate;

export default connect(mapStateToProps, { createDepartment })(DepartmentCreate);
