// High-Level Approach
// 1. Render the file/folder hierarchy recursively using the TreeNode component.
// 2. Store the expanded folder ids in a Set for O(1) lookup, insertion, and deletion.
// 3. Clicking a folder toggles its expanded/collapsed state.
// 4. When collapsing a folder, recursively collect all descendant folder/file ids
//    and remove them from the expanded state so reopening the parent starts with
//    all nested folders collapsed.
import { useState, useCallback } from "react";
import TreeNode from "./TreeNode";
import { data } from "./constants";

const FileExplorer = () => {
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

  return (
    <div>
      <h1>File Explorer</h1>
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          toggleFolder={toggleFolder}
          expandedFolders={expandedFolders}
        />
      ))}
    </div>
  );
};

export default FileExplorer;
