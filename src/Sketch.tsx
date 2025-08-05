import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";

const Sketch: React.FC = () => {
  //VERY messy/long code ahead, was more focused on making this part actually work than cleanliness or neatness
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [canvasColor, setCanvasColor] = useState("#ffffff");
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);

  useHotkeys("ctrl+z, meta+z", (e) => {
    e.preventDefault(); // Prevent the browser’s default save action
    handleUndoClick();
    console.log("undo");
  });

  useHotkeys("ctrl+y, ctrl+shift+y, meta+y, meta+shift+z", (event) => {
    event.preventDefault(); // Prevent the browser’s default save action
    handleRedoClick();
  });

  useHotkeys("p", (event) => {
    event.preventDefault(); // Prevent the browser’s default save action
    handlePenClick();
  });

  useHotkeys("e", (event) => {
    event.preventDefault(); // Prevent the browser’s default save action
    handleEraserClick();
  });
  const handleExportImage = () => {
    canvasRef.current?.exportImage("png").then((data) => {
      console.log(data);
      const link = document.createElement("a");
      link.href = data;

      link.download = "canvas.png";

      link.click();
    });
  };

  const handleStrokeColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeColor(event.target.value);
  };

  const handleCanvasColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCanvasColor(event.target.value);
  };

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };
  const handleStrokeWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(+event.target.value);
  };

  const handleEraserWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEraserWidth(+event.target.value);
  };
  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const location = useLocation();
  let prompt = location.state?.prompt;
  if (prompt) {
    if (prompt.prompt1) {
      prompt = prompt.prompt1;
    } else if (prompt.prompt2) {
      prompt = prompt.prompt2;
    } else if (prompt.prompt3) {
      prompt = prompt.prompt3;
    } else {
      prompt = "None";
    }
  }
  return (
    <div className="flex text-drawn-black bg-drawn-bg h-screen">
      <div className="bg-drawn-white flex flex-col justify-around p-5">
        <section className="buttons flex flex-col justify-around h-full">
          <section className="flex gap-5">
            <input
              type="image"
              src="/pencil.svg"
              className="btn btn-sm btn-outline-primary hover:cursor-pointer"
              disabled={!eraseMode}
              onClick={handlePenClick}
            ></input>
            <input
              disabled={eraseMode}
              type="range"
              className="form-range"
              min="1"
              max="20"
              step="1"
              id="strokeWidth"
              value={strokeWidth}
              onChange={handleStrokeWidthChange}
            />
          </section>
          <section className="flex gap-5">
            <input
              type="image"
              src="/erase.svg"
              className="btn btn-sm btn-outline-primary hover:cursor-pointer"
              disabled={eraseMode}
              onClick={handleEraserClick}
            ></input>
            <input
              disabled={!eraseMode}
              type="range"
              className="form-range"
              min="1"
              max="20"
              step="1"
              id="eraserWidth"
              value={eraserWidth}
              onChange={handleEraserWidthChange}
            />
          </section>
          <section className="flex gap-5">
            <input type="image" src="/undo.svg" className="btn btn-sm btn-outline-primary" onClick={handleUndoClick}></input>
            <input type="image" src="/redo.svg" className="btn btn-sm btn-outline-primary" onClick={handleRedoClick}></input>
          </section>
        </section>
        <section className="flex h-full gap-5">
          <input type="color" className="w-full h-full hover:cursor-pointer" value={strokeColor} onChange={handleStrokeColorChange} />
          <input type="color" className="w-full h-full hover:cursor-pointer" value={canvasColor} onChange={handleCanvasColorChange} />
        </section>
        <button className="bg-drawn-black rounded-full text-drawn-white m-[5%] w-[50%] self-center hover:cursor-pointer" onClick={handleExportImage}>
          Export
        </button>
      </div>
      <div className="flex flex-col items-center justify-around gap-[4%] w-full p-[2%] py-[3%]">
        {prompt && <h1 className="font-header text-2xl text-drawn-white">Prompt: {prompt}</h1>}
        <ReactSketchCanvas
          svgStyle={{ cursor: "url(/external/cursors/cursor.cur), auto" }}
          ref={canvasRef}
          strokeColor={strokeColor}
          canvasColor={canvasColor}
          strokeWidth={strokeWidth}
          eraserWidth={eraserWidth}
        />
      </div>
    </div>
  );
};

export default Sketch;
