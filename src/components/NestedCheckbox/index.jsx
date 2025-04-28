import React, { useState } from "react";
import { treeData } from "./data";
import "./nestedCheckbox.css";

const NestedCheckbox = () => {
  const [checkResult, setCheckResult] = useState({});

  const handleOnChange = (node, isChecked) => {
    const updatedCheckResult = { ...checkResult };

    const updateChildren = (node, isChecked) => {
      updatedCheckResult[node.id] = isChecked;
      if (node.children) {
        node.children.forEach((child) => updateChildren(child, isChecked));
      }
    };

    updateChildren(node, isChecked);
    setCheckResult(updatedCheckResult);
  };

  const renderTree = (nodes) => {
    return nodes.map((node) => {
      let isChecked = checkResult?.[node.id] || false;

        let isChildrenChecked = node.children ? node.children.every((child) => {
          return checkResult[child.id]
        }) : isChecked;

        if(isChecked !== isChildrenChecked){
          setCheckResult((prevCheckResult) => ({...prevCheckResult, [node.id]: isChildrenChecked}))
        }

      return (
        <div className="checkbox-field" key={node.id}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(event) => handleOnChange(node, event.target.checked)}
            id={node.id}
          />
          <label htmlFor={node.id}>{node.label}</label>
          {node.children && renderTree(node.children)}
        </div>
      );
    });
  };
  return <div>{renderTree(treeData)}</div>;
};

export default NestedCheckbox;
