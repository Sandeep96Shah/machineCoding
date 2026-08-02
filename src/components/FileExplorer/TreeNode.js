import { memo } from "react";
const TreeNode = ({ node, toggleFolder, expandedFolders }) => {
  const { id, name, children } = node;
  const hasChildren = children && children.length > 0;
  const isExpanded = expandedFolders.has(id);

  return (
    <div style={{ marginLeft: "20px" }}>
      <button onClick={() => hasChildren && toggleFolder(node)}>
        {hasChildren ? (isExpanded ? "📂" : "📁") : "📄"} {node.name}
      </button>
      {hasChildren && isExpanded && (
        <div>
          {children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              toggleFolder={toggleFolder}
              expandedFolders={expandedFolders}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(TreeNode);
