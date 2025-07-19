import React from 'react';

const NavList = ({ NavData, level = 0 }) => {
  return (
    <ul style={{ paddingLeft: level * 16 }}>
      {NavData.map((node) => (
        <li key={node.key}>
          <span>{node.label}</span>
          {node.children && node.children.length > 0 && (
            <NavList NavData={node.children} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavList;