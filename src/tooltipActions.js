// Action Types
export const SHOW_TOOLTIP = 'SHOW_TOOLTIP';
export const HIDE_TOOLTIP = 'HIDE_TOOLTIP';

// Action Creators
export const showTooltip = (tooltipId) => ({
  type: SHOW_TOOLTIP,
  payload: tooltipId,
});

export const hideTooltip = (tooltipId) => ({
  type: HIDE_TOOLTIP,
  payload: tooltipId,
});
