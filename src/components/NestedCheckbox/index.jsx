import React, { useEffect, useState } from "react";
import { data } from "./data";
import "./nestedCheckbox.css";

const Checkbox = ({ data, checkboxResult, setCheckboxResult, }) => {
    console.log({sandeep999: checkboxResult});
  return (
    <>
      {data.map((node) => {

        const updateAllChildrenNode = ({data, isChecked}) => {
            data?.forEach((node) => {
                console.log({sandeepChildren: [node?.name]});
                setCheckboxResult((prevChecked) => ({
                ...prevChecked,
                [node?.id]: isChecked
                }))
                if(node?.children){
                    updateAllChildrenNode({data: node?.children, isChecked})
                }
            })
        }
        const handleOnChange = (e) => {
            const isChecked = e?.target?.checked;
          setCheckboxResult((prevResult) => ({
            ...prevResult,
            [node?.id]: isChecked,
          }));
          updateAllChildrenNode({data: node?.children, isChecked })
          
        };

        const getValue = ({data}) => {
            let isChecked = false;
            for(let i = 0; i < data?.length; i++){
                console.log({sandeep1: "Inside GetValue", [data?.[i]?.name]: data?.[i]?.name});
                if(!checkboxResult?.[data?.[i]?.id]){
                   return false; 
                }
                isChecked = data?.[i]?.children ? getValue({data: data?.[i]?.children}) : true;
                if(!isChecked) return false;
            }
            // data?.forEach((node) => {
            //     console.log({sandeep1: "Inside GetValue", [node?.name]: node?.name});
            //     if(!checkboxResult?.[node?.id]){
            //        return false; 
            //     }
            //     isChecked = node?.children ? getValue({data: node?.children}) : true;
            //     if(!isChecked) return false;
            // })
            return isChecked;
        }

        const getDefaultValue = () => {
            if(!node?.children){
                return checkboxResult[node?.id]
            }
            return checkboxResult[node?.id]
            console.log({[node?.name]: node?.children && getValue({data: node?.children})});
            // if( node?.children && getValue({data: node?.children})) {
            //     setCheckboxResult((prevResult) => ({
            //         ...prevResult,
            //         [node?.id]: true
            //     }))
            //     return true;
            // }
            return false;
        }
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
      />
    </div>
  );
};

export default NestedCheckbox;
