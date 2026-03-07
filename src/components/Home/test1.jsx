import React, { useEffect, useState } from "react";
import HiddenImageDiv from "./HiddenImageDiv";

const ImagePreview = (props) => {
  const { images } = props;
  const [list, setList] = useState(images);

  useEffect(() => {
    setList(images);
  }, [images]);

  const handleOnClick = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, visible: !item.visible } : item
    );
    setList(updatedList);
  };

  const handleShowAll = () => {
    setList(list.map((item) => ({ ...item, visible: true })));
  };

  const handleHideAll = () => {
    setList(list.map((item) => ({ ...item, visible: false })));
  };

  return (
    <div className="layout align-items-center mt-100">
      <div className="card ma-20 pa-50">
        {/* ✅ Wrap all image rows inside a single testable div */}
        <div className="layout-column" data-testid="images-div">
          {list.map(({ src, alt, id, visible }) => (
            // ✅ Attach onClick to the outer wrapper of each child node
            <>
              {visible ? (
                <img src={src} height={200} width={300} alt={alt} onClick={() => handleOnClick(id)} key={id} />
              ) : (
                <HiddenImageDiv onClick={() => handleOnClick(id)} key={id} />
              )}
            </>
          ))}
        </div>

        <section className="card-actions justify-content-center">
          <button data-testid="show-all-btn" onClick={handleShowAll}>
            Show all
          </button>
          <button
            className="danger"
            data-testid="hide-all-btn"
            onClick={handleHideAll}
          >
            Hide all
          </button>
        </section>
      </div>
    </div>
  );
};

export default ImagePreview;

<div className="layout-column" data-testid="images-div">
    <img src={src} height={200} width={300} alt={alt} onClick={() => handleOnClick(id)} key={id} />    
</div>
