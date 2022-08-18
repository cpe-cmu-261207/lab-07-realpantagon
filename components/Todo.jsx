import React, { useState } from "react";
import { useEffect } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [hide, setHide] = useState({ display: "none" });

  return (
    <div
      onMouseOver={() => setHide({ display: "" })}
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOut={() => setHide({ display: "none" })}
    >
      <span
        className="me-auto"
        style={{ textDecoration: props.completed ? "line-through" : "" }}
      >
        {props.title}
      </span>

      <button style={hide} onClick={props.onMark} className="btn btn-success">
        <IconCheck />
      </button>
      <button style={hide} className="btn btn-secondary">
        <IconArrowUp />
      </button>
      <button style={hide} className="btn btn-secondary">
        <IconArrowDown />
      </button>
      <button style={hide} onClick={props.ondelete} className="btn btn-danger">
        <IconTrash />
      </button>
    </div>
  );
}
