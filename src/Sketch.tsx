import { ReactSketchCanvas, type ReactSketchCanvasRef } from "react-sketch-canvas";
import { useRef, useState } from "react";

const Sketch = () => {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [canvasColor, setCanvasColor] = useState("#ffffff");
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [eraserWidth, setEraserWidth] = useState(10);

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

  return (
    <div className="flex text-drawn-black bg-drawn-bg h-screen">
      <div className="bg-drawn-white flex flex-col justify-around p-5">
        <section className="buttons flex flex-col justify-around h-full">
          <section className="flex gap-5">
            <input type="image" src="/pencil.svg" className="btn btn-sm btn-outline-primary" disabled={!eraseMode} onClick={handlePenClick}></input>
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
            <input type="image" src="/erase.svg" className="btn btn-sm btn-outline-primary" disabled={eraseMode} onClick={handleEraserClick}></input>
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
          <input type="color" className="w-full h-full" value={strokeColor} onChange={handleStrokeColorChange} />
          <input type="color" className="w-full h-full" value={canvasColor} onChange={handleCanvasColorChange} />
        </section>
      </div>
      <div className="flex justify-center w-full p-[2%] py-[3%]">
        <ReactSketchCanvas ref={canvasRef} strokeColor={strokeColor} canvasColor={canvasColor} strokeWidth={strokeWidth} eraserWidth={eraserWidth} />
      </div>
    </div>
  );
};

export default Sketch;
