import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Button,
  Card,
  Icon,
  Grid,
  Segment,
  Menu,
  Message,
  Divider
} from 'semantic-ui-react';

import GroupList from './GroupList';
import CreateGroup from './CreateGroup';

class Groups extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Grid verticalAlign="middle" columns={2} centered>
          <Grid.Row>
            <Message>
              <Message.Header>PostIt Groups</Message.Header>
              <p>
                Groups are all the rave in PostIt App. You can create your own
                by clicking on the button below or chat in any of your existing
                ones.
              </p>
              <Divider clearing />
              <Button as={Link} to={`${match.url}/create`} floated="right">
                Create a Group
              </Button>
            </Message>
          </Grid.Row>
        </Grid>
        <div className="ui container">
          <Route exact path={match.url} render={() => <GroupList />} />
          <Route path={`${match.url}/create`} component={CreateGroup} />
        </div>
      </div>
    );
  }
}

export default Groups;
