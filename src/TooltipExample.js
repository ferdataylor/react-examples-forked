import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from 'react-tooltip';
import { showTooltip, hideTooltip } from './tooltipActions'; // Your actions

// import TooltipContainer from './TooltipContainer';
// import TooltipTrigger from './TooltipTrigger';

// TooltipTrigger Component
const TooltipTrigger = ({ children, tooltipId, content }) => {
  const dispatch = useDispatch();

  return (
    <span
      data-tip={content}
      data-for={tooltipId}
      onMouseEnter={() => dispatch(showTooltip(tooltipId))}
      onMouseLeave={() => dispatch(hideTooltip(tooltipId))}
    >
      {children}
    </span>
  );
};

// Tooltip Component
const TooltipContainer = () => {
  const tooltipState = useSelector((state) => state.tooltip); // Get tooltip state

  return (
    <div>
      {Object.entries(tooltipState).map(([id, { visible, content }]) => (
        <Tooltip key={id} id={id} isOpen={visible}>
          {content}
        </Tooltip>
      ))}
    </div>
  );
};

// Example Usage
const TooltipExample = () => (
  <div>
    <TooltipTrigger tooltipId="myTooltip" content="This is a tooltip!">
      Hover over me
    </TooltipTrigger>
    <TooltipContainer />
  </div>
);

// export default TooltipContainer;
// export default TooltipTrigger;
// export default TooltipExample;
