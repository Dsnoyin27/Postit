import React from "react";
import {connect} from "react-redux";
import GroupsList from "./GroupsList";
import {getGroup} from "./actions";
import { Link } from "react-router";

class GroupsPage extends React.Component {
  componentDidMount(){
    this.props.getGroup();
  }
  render(){
    return(
      <div>
        <ul className="nav navbar-nav navbar-right">
        <li>
          <h3><Link to="/groups/new">New Group</Link></h3>
        </li>
      </ul>
        <h6> Groups</h6>
        <GroupsList groups={this.props.groups}/>
        </div>
    );
  }
}

GroupsPage.propTypes = {
  groups: React.PropTypes.array.isRequired,
  getGroup: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
  groups: state.groups
}
}

export default connect(mapStateToProps, {getGroup})(GroupsPage);
