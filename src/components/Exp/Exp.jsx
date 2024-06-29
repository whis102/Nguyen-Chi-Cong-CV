import { useState } from "react";
import { JOBS } from "../../data";
import JobBtn from "../JobBtn/JobBtn";

export default function Exp() {
  const [selectedJob, setSelectedJob] = useState(null);

  function handleSelected(selectedBtn) {
    setSelectedJob(selectedBtn);
  }

  return (
    <>
      <JobBtn
        isSelected={selectedJob === "BlueOC"}
        onSelect={() => {
          handleSelected("BlueOC");
        }}
      >
        BlueOC
      </JobBtn>

      <JobBtn
        isSelected={selectedJob === "mindX"}
        onSelect={() => {
          handleSelected("mindX");
        }}
      >
        MindX
      </JobBtn>

      <JobBtn
        isSelected={selectedJob === "Multiple part-time jobs"}
        onSelect={() => {
          handleSelected("Multiple part-time jobs");
        }}
      >
        Others
      </JobBtn>
      {!selectedJob ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{JOBS[selectedJob].title}</h3>
          <p>{JOBS[selectedJob].duration}</p>
          <ul>
            <li>{JOBS[selectedJob].description}</li>
          </ul>
        </div>
      )}
    </>
  );
}
