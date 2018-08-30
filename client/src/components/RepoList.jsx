import React from 'react';

const RepoList = (props) => {
console.log(props);
return (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <tr>
        <th>Owner</th>
        <th>Name</th>
        <th>Description</th>
        <th>Url</th>
        <th>Watchers</th>
        <th>Created At</th>
        <th>Updated At</th>
      </tr>
        {props.repos.map((repo) => {
          return (
          <tr>
            <td>{repo.owner}</td>
            <td>{repo.name}</td>
            <td>{repo.description}</td>
            <td>{repo.url}</td>
            <td>{repo.watchers}</td>
            <td>{repo.created_at}</td>
            <td>{repo.updated_at}</td>
          </tr>
          )
        })}
    </table>
  </div>
)
};


export default RepoList;