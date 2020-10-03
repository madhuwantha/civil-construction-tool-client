import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  FormGroup,
  Input,
  Col,
} from "reactstrap";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AppSwitch } from "@coreui/react";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <i className="fa fa-filter fa-lg"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="p-3">
            <h6>Filters</h6>
            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Start Date</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
              <br></br>
              <small>
                <div>
                  <FormGroup row>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="text-input"
                        name="text-input"
                        placeholder="Text"
                      />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                  </FormGroup>
                </div>
              </small>
            </div>
            <hr />

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>End Date</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
              <br></br>
              <small>
                <div>
                  <FormGroup row>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="text-input"
                        name="text-input"
                        placeholder="Text"
                      />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                  </FormGroup>
                </div>
              </small>
            </div>
            <hr />

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Letter Title</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
              <br></br>
              <small>
                <div>
                  <FormGroup row>
                    <Col xs="12" md="9">
                      <Input
                        type="datextte"
                        id="text-input"
                        name="text-input"
                        placeholder="Text"
                      />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                  </FormGroup>
                </div>
              </small>
            </div>
            <hr />

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Status</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
              <br></br>
              <small>
                <div>
                  <FormGroup row>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </div>
              </small>
            </div>
            <hr />

            {/* <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small>
                <b>CPU Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>Memory Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 1 Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 2 Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">25GB/256GB</small> */}
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
