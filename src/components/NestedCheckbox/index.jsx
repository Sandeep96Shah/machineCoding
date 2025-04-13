import React, { useState } from "react";
import { data } from "./data";
import "./nestedCheckbox.css";

const Checkbox = ({
  data,
  checkboxResult,
  setCheckboxResult,
  allData,
  parentNode = null,
}) => {
  return (
    <>
      {data.map((node) => {
        const updateAllChildrenNode = ({
          data,
          isChecked,
          updatedCheckedResult,
        }) => {
          data?.forEach((node) => {
            updatedCheckedResult[node?.id] = isChecked;
            if (node?.children) {
              updatedCheckedResult = updateAllChildrenNode({
                data: node?.children,
                isChecked,
                updatedCheckedResult,
              });
            }
          });
          return updatedCheckedResult;
        };

        const getParentChildrenNodes = ({ childrenList }) => {
          let finalChildrenNodes = [];
          for (let i = 0; i < childrenList?.length; i++) {
            if (childrenList[i]?.id === parentNode) {
              return childrenList[i]?.children;
            }
            if (childrenList[i]?.children) {
              finalChildrenNodes = getParentChildrenNodes({
                childrenList: childrenList[i]?.children,
              });
            }
            if (finalChildrenNodes?.length) {
              return finalChildrenNodes;
            }
          }
          return finalChildrenNodes;
        };

        const getParentValue = ({ resultChecked, childrenNodes }) => {
          let isChecked = true;
          for (let i = 0; i < childrenNodes?.length; i++) {
            isChecked = isChecked && resultChecked[childrenNodes[i]?.id];
          }
          return isChecked;
        };

        const handleOnChange = (e) => {
          const isChecked = e?.target?.checked;
          setCheckboxResult((prevResult) => {
            let updatedCheckedResult = {
              ...prevResult,
              [node?.id]: isChecked,
            };
            updatedCheckedResult = updateAllChildrenNode({
              data: node?.children,
              isChecked,
              updatedCheckedResult,
            });
            const childrenNodes = getParentChildrenNodes({
              childrenList: allData,
            });
            const isParentChecked = getParentValue({
              resultChecked: updatedCheckedResult,
              childrenNodes,
            });
            updatedCheckedResult[parentNode] = isParentChecked;
            return updatedCheckedResult;
          });
        };

        const getDefaultValue = () => {
          if (!node?.children) {
            return checkboxResult[node?.id];
          }
          return checkboxResult?.[node?.id];
        };
        return (
          <div className="checkbox-container" key={node?.id}>
            <input
              type={"checkbox"}
              onChange={handleOnChange}
              checked={getDefaultValue()}
            />
            <span>{node?.name}</span>
            {node?.children && (
              <Checkbox
                data={node.children}
                checkboxResult={checkboxResult}
                setCheckboxResult={setCheckboxResult}
                allData={allData}
                parentNode={node?.id}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

const NestedCheckbox = () => {
  const [checkboxResult, setCheckboxResult] = useState({});
  return (
    <div>
      <Checkbox
        data={data}
        checkboxResult={checkboxResult}
        setCheckboxResult={setCheckboxResult}
        allData={data}
      />
    </div>
  );
};

export default NestedCheckbox;
