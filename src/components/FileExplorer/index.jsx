import { useState } from "react";
import { data } from "./constants";
import './styles.css';

const FileExplorer = () => {
  const [openedIds, setOpenedIds] = useState({});

  const updatedOpenedIds = { ...openedIds };

  const collapseAllFolders = (node) => {
    delete updatedOpenedIds[node.id];
    const n = node.children?.length ?? 0;
    for (let i = 0; i < n; i++) {
      collapseAllFolders(node.children[i]);
    }
    setOpenedIds(updatedOpenedIds);
  };

  console.log(updatedOpenedIds);

  const handleFolder = (node) => {
    if (openedIds[node.id]) {
      collapseAllFolders(node);
    } else {
      setOpenedIds((prevOpenedIds) => ({ ...prevOpenedIds, [node.id]: true }));
    }
  };

  const getSuffix = (id, isChilden) => {
    if (!isChilden) return;
    return `[${openedIds[id] ? "-" : "+"}]`;
  };

  const renderNode = (nodes) => {
    if (!nodes) return;
    const nonDirectories = nodes.filter((node) => !node.children);
    const directories = nodes.filter((node) => node.children);
    const nodeList = [...nonDirectories, ...directories];
    return nodeList.map((node) => {
      return (
        <div key={node.id} className="file">
          <p onClick={() => handleFolder(node)}>
            {node.name} <span>{getSuffix(node.id, node.children)}</span>
          </p>
          {openedIds[node.id] ? renderNode(node.children) : null}
        </div>
      );
    });
  };

  return <div>{renderNode(data)}</div>;
}

export default FileExplorer;
