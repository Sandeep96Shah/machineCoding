import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ImagePreview from "./components/ImagePreview";
import { data } from "./data";

describe("React Image Previewer", () => {
  const renderApp = (images) => render(<ImagePreview images={images} />);
  const TEST_IDS = {
    IMAGES_DIV: "images-div",
    SHOW_ALL_BTN: "show-all-btn",
    HIDE_ALL_BTN: "hide-all-btn",
  };

  afterEach(() => {
    cleanup();
  });

  const generateRandomData = (currentLength) => {
    const length = currentLength ?? 1 + Math.round(Math.random() * 3);
    const offset = Math.round(Math.random() * 3);
    const currentData = [];
    for (let i = 0; i < length; i++) {
      currentData.push(data[(i + offset) % 4]);
    }
    return currentData;
  };

  const generateRandomIndex = (length) => {
    return Math.round(Math.random() * (length - 1));
  };

  it("Renders corretly initially", async () => {
    const data = generateRandomData(4);
    renderApp(data);
    const imagesDiv = await screen.findByTestId(TEST_IDS.IMAGES_DIV);
    expect(imagesDiv.childNodes).toHaveLength(data.length);
    const images = await screen.findAllByRole("img");
    for (let i = 0; i < 4; i++) {
      expect(images[i]).toHaveAttribute("src", data[i].src);
    }
  });

  it("Renders correctly with no images", async () => {
    renderApp([]);
    const imagesDiv = await screen.findByTestId(TEST_IDS.IMAGES_DIV);
    expect(imagesDiv.childNodes).toHaveLength(0);
  });

  it("Has correct show and hide functionality", async () => {
    let data = generateRandomData(4);
    let checkData = data.map((a) => {
      return { ...a };
    });
    renderApp(data);
    const imagesDiv = screen.getByTestId(TEST_IDS.IMAGES_DIV);
    expect(imagesDiv.childNodes).toHaveLength(checkData.length);
    const randomIndex = generateRandomIndex(checkData.length);
    fireEvent.click(imagesDiv.childNodes[randomIndex]);
    checkData[randomIndex].visible ^= true;
    for (let i = 0; i < 4; i++) {
      if (checkData[i].visible) {
        expect(imagesDiv.childNodes[i]).toHaveAttribute(
          "src",
          checkData[i].src
        );
      } else {
        expect(imagesDiv.childNodes[i]).toHaveTextContent("Hidden Image");
      }
    }
  });

  it("Has correct show all button functionality", async () => {
    let data = generateRandomData(4);
    for (let x of data) {
      x.visible = false;
    }
    const checkData = [...data];
    renderApp(data);
    const imagesDiv = screen.getByTestId(TEST_IDS.IMAGES_DIV);

    const showAllBtn = screen.getByTestId(TEST_IDS.SHOW_ALL_BTN);
    fireEvent.click(showAllBtn);

    for (let i = 0; i < 4; i++) {
      expect(imagesDiv.childNodes[i]).toHaveAttribute("src", checkData[i].src);
    }
  });
  it("Has correct hide all button functionality", async () => {
    let data = generateRandomData(4);
    renderApp(data);
    const imagesDiv = screen.getByTestId(TEST_IDS.IMAGES_DIV);
    const showAllBtn = screen.getByTestId(TEST_IDS.SHOW_ALL_BTN);
    fireEvent.click(showAllBtn);
    const hideAllBtn = screen.getByTestId(TEST_IDS.HIDE_ALL_BTN);
    fireEvent.click(hideAllBtn);

    for (let i = 0; i < 4; i++) {
      expect(imagesDiv.childNodes[i]).toHaveTextContent("Hidden Image");
    }
  });

  it("Has overall correct functionality", async () => {
    let data = generateRandomData(4);
    let checkData = data.map((a) => {
      return { ...a };
    });
    renderApp(data);
    const imagesDiv = screen.getByTestId(TEST_IDS.IMAGES_DIV);
    for (let i = 0; i < 5; i++) {
      const randomIndex = generateRandomIndex(checkData.length);
      fireEvent.click(imagesDiv.childNodes[randomIndex]);
      checkData[randomIndex].visible ^= true;
      for (let i = 0; i < 4; i++) {
        if (checkData[i].visible) {
          expect(imagesDiv.childNodes[i]).toHaveAttribute(
            "src",
            checkData[i].src
          );
        } else {
          expect(imagesDiv.childNodes[i]).toHaveTextContent("Hidden Image");
        }
      }
    }
  });
});  