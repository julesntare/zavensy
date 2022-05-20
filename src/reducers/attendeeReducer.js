const initialAttendees = [];
const attendeeReducer = (state = initialAttendees, action) => {
  switch (action.type) {
    case "ADD_ATTENDEE":
      return state.concat([action.payload]);
    case "EDIT_ATTENDEE":
      return state.map((attendee) =>
        attendee.id === action.id
          ? { ...attendee, editing: !attendee.editing }
          : attendee
      );
    case "UPDATE_ATTENDEE":
      return state.map((attendee) => {
        if (attendee.id === action.id) {
          return {
            ...attendee,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            mobile: action.payload.mobile,
            email: action.payload.email,
            isAttending: action.payload.isAttending,
            editing: !attendee.editing,
          };
        } else {
          return attendee;
        }
      });
    case "DELETE_ATTENDEE":
      return state.filter((attendee) => attendee.id !== action.id);
    default:
      return state;
  }
};

export default attendeeReducer;
