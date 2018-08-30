import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <p>
     {props.repos}
    </p>
  </div>
)


export default RepoList;