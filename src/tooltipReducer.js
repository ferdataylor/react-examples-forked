import { SHOW_TOOLTIP, HIDE_TOOLTIP } from './tooltipActions';

const initialState = {}; // Empty initial state

const tooltipReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOOLTIP:
      return {
        ...state,
        [action.payload]: {
          visible: true,
          content: state[action.payload]?.content || '',
        }, // Keep content if exists
      };
    case HIDE_TOOLTIP:
      return {
        ...state,
        [action.payload]: {
          visible: false,
          content: state[action.payload]?.content || '',
        }, // Keep content if exists
      };
    default:
      return state;
  }
};

export default tooltipReducer;
