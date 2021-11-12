// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import AssetActions from "../redux/actions/AssetActions";

// END IMPORT ACTIONS

/** APIs

* actionsAsset.list
*	@description CRUD ACTION list
*
* actionsAsset.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*

**/


class AssetList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsAsset.loadAssetList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsAsset.deleteAsset(this.state.idDelete).then(data => {
      this.props.actionsAsset.loadAssetList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Description",
        type: "string",
        label: "Description"
      }, 
      {
        id: "LastLocation",
        type: "custom",
        label: "LastLocation"
      }, 
      {
        id: "Org",
        type: "number",
        label: "Org"
      }, 
      {
        id: "RewardAmount",
        type: "custom",
        label: "RewardAmount"
      }, 
      {
        id: "Type",
        type: "number",
        label: "Type"
      }, 
      {
        id: "UnitNumber",
        type: "string",
        label: "UnitNumber"
      },
    ];
    const link = "/assets/";

    return (
      <div>
        <h1>Asset List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">LastLocation</TableCell>
              <TableCell align="right">Org</TableCell>
              <TableCell align="right">RewardAmount</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">UnitNumber</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/assets/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Description }</TableCell>
                <TableCell align="right">{ row.LastLocation }</TableCell>
                <TableCell align="right">{ row.Org }</TableCell>
                <TableCell align="right">{ row.RewardAmount }</TableCell>
                <TableCell align="right">{ row.Type }</TableCell>
                <TableCell align="right">{ row.UnitNumber }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/assets/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsAsset: bindActionCreators(AssetActions, dispatch),
  };
};

// Validate types
AssetList.propTypes = { 
  actionsAsset: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.AssetListReducer.listAsset
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetList);
