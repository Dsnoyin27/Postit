import React from "react";

export default function GroupsList({ groups }) {
  const emptyGroup =( <p> There are no Groups yet</p>);
  const groupsList = (<p> Groups List </p>);


  return (
    <div>
      {groups.length === 0 ? emptyGroup : groupsList}
    </div>

  );
}
GroupsList.proptypes = {
  groups: React.PropTypes.array.isRequired
}
