import React from 'react';

const TableOfContents = () => {
  const contents = [
    { id: 1, title: 'Introduction to React' },
    { id: 2, title: 'Components and Props' },
    { id: 3, title: 'State and Lifecycle' },
    { id: 4, title: 'Handling Events' },
    { id: 5, title: 'React Router' }
  ];

  return (
    <div style={{ margin: '50px auto', width: '600px', textAlign: 'center' }}>
      <h2>Table of Contents</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(content => (
            <tr key={content.id}>
              <td>{content.id}</td>
              <td>{content.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOfContents;
