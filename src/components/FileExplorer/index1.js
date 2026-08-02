// get the structure
// display with dummy data
// show symbol to collapse or expand
// add event handler to expand or collapse

import { useState, useCallback } from "react";
import { data } from "./constants";

const FileExplorer = () => {
  const [openIds, setOpenIds] = useState({});
  const [expandedFolders, setExpandedFolders] = useState(new Set());

  const getDescendants = (children = [], ids = []) => {
    const n = children.length;
    for (let i = 0; i < n; i++) {
      ids.push(children[i].id);

      if (children[i].children) {
        getDescendants(children[i].children, ids);
      }
    }
    return ids;
  };

  const toggleFolder = useCallback((node) => {
    setExpandedFolders((prevExpandedFolders) => {
      const next = new Set(prevExpandedFolders);

      if (next.has(node.id)) {
        next.delete(node.id);

        // write method to get all the descendants node ids
        const descendants = getDescendants(node.children);

        descendants.forEach((id) => next.delete(id));
      } else {
        next.add(node.id);
      }
      return next;
    });
  }, []);

  const getPrefix = ({ id, hasChildren }) => {
    if (!hasChildren) return;
    return expandedFolders.has(id) ? "-" : "+";
  };
  const renderItem = (item) => {
    return item.map(({ id, name, children }) => (
      <div style={{ paddingLeft: "10px" }}>
        <p onClick={() => toggleFolder({ id, children })}>
          <span>
            {getPrefix({ id, hasChildren: children && children.length })}
          </span>
          {name}
        </p>
        {children && children.length && expandedFolders.has(id)
          ? renderItem(children)
          : null}
      </div>
    ));
  };
  return (
    <div>
      <h1>File Explorer</h1>
      {renderItem(data)}
    </div>
  );
};

export default FileExplorer;
