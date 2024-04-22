export const state = {
  currentPage: window.location.pathname,
};

export const baseUrl = "http://localhost:3000/";

export const query = {
  currentQuery: location.search.split("=")[1],
};
