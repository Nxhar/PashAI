// pages/learningPath.js
"use client"

import { useState } from 'react';

export default function LearningPath() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [nextSteps, setNextSteps] = useState([]);
  const [steps, setSteps] = useState([]);

  const learningPaths = {
    1: [2],
    2: [3, 6],
    6: [7, 8]
  };

  const handleStart = () => {
    displayNextStep(currentStep);
  };

  const displayNextStep = (step) => {
    const nextSteps = learningPaths[step];
    if (nextSteps.length === 1) {
      const nextStep = nextSteps[0];
      addStepToPath(nextStep);
    } else {
      setNextSteps(nextSteps);
      setShowPopup(true);
    } 
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleAddStep = () => {
    const selectedStep = parseInt(document.getElementById('nextSelect').value);
    addStepToPath(selectedStep);
    setShowPopup(false);
  };

  const addStepToPath = (step) => {
    setCurrentStep(step);
    // Add logic to update your learning path state or perform any other action
  };

  return (
    <div>
      <h2>Learning Path</h2>
      <div id="path">
        {/* Render the learning path nodes here */}
        <div className="node">{currentStep}</div>
      </div>
      <button onClick={handleStart}>Start Learning Path</button>

      {showPopup && (
        <div id="popup">
          <h3>Select Next Step</h3>
          <select id="nextSelect">
            {nextSteps.map(step => (
              <option key={step} value={step}>{step}</option>
            ))}
          </select>
          <button onClick={handleAddStep}>Add Step</button>
          <button onClick={handlePopupClose}>Cancel</button>
        </div>
      )}
    </div>
  );
}
