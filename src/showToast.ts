import EventBus from "./eventBus";

export const showToast = (message: String) => {
  EventBus.publish("SHOW_TOAST", { message });
};
