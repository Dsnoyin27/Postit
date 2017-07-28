import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Segment, Card } from 'semantic-ui-react';
import GroupCard from './GroupCard';
import { fetchGroups } from '../../action-creators/groupActions';

class GroupList extends Component {
  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    const { groups } = this.props;

    if (!groups.length) {
      return (
        <Segment>
          <h2 className="ui header">You are not a member of any group.</h2>
        </Segment>
      );
    }

    return (
      <Card.Group>
        {groups.map(group =>
          <GroupCard
            key={group.id}
            id={group.id}
            groupName={group.groupname}
            created={group.createdAt}
            isOwner={group.isOwner}
          />
        )}
      </Card.Group>
    );
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}
export default connect(mapStateToProps, { fetchGroups })(GroupList);
