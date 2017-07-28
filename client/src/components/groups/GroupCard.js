import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const GroupCard = ({ id, groupName, created, isOwner }) =>
  <Card>
    <Card.Content>
      <Icon floated="right" name="group" style={{ float: 'right' }} />
      <Card.Header>
        {groupName}
      </Card.Header>
      <Card.Meta>
        Created: {distanceInWordsToNow(created, { addSuffix: true })}
      </Card.Meta>
      <Card.Description>Post notes in this group</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <Button color="green">
          Chat
        </Button>
        {isOwner && <Button secondary>
          Add Users
        </Button>
        }
      </div>
    </Card.Content>
  </Card>;

export default GroupCard;
