import Dropdown from "react-bootstrap/Dropdown";

const Drawpdown = () => {
  return (
    <button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="text-logotype font-logotype text-left text-drawn-magenta flex ">
          DRAWN<p className="text-drawn-white">OUT</p>
        </Dropdown.Toggle>

        <Dropdown.Menu className="flex flex-col text-left font-logotype text-logotype">
          <Dropdown.Item href="#/action-1" className="text-drawn-cyan flex">
            DRAWN<p className="text-drawn-white">OUT</p>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="text-drawn-orange flex">
            DRAWN<p className="text-drawn-white">OUT</p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </button>
  );
};

export default Drawpdown;
