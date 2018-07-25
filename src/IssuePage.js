import React, { Component } from 'react';
import {
    Panel,
    Button, Glyphicon,
    ToggleButtonGroup, ToggleButton, Tooltip, FormGroup, FormControl
} from "react-bootstrap";

class IssuePage extends Component {
    render() {
        return (
            <Panel bsStyle="success">
                <Panel.Heading>
                    <Panel.Title>
                        <Glyphicon glyph="user" />
                        {" 10초 보험설계"}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <h4> 내게 꼭 맞는 보험은 뭘까? </h4>
                    <p> 최적의 플랜을 받아보세요. </p>
                    <p style={{ textAlign: "center" }}>
                        <img src="assets/images/plans.svg"
                            style={{ width: "90%", paddingBottom: "20px" }} />
                    </p>
                    {this._Render_inputs()}
                </Panel.Body>
                <Panel.Footer>
                    <Button block
                        bsStyle="primary" bsSize="large"
                        disabled={!this._Validate()}
                        onClick={this._Click_issue.bind(this)}>
                        <Glyphicon glyph="search" />
                        {" 검색하기"}
                    </Button>
                </Panel.Footer>
            </Panel>
        );
    }
}

export default IssuePage;