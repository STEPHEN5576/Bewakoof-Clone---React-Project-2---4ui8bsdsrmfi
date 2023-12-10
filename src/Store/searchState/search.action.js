// src/redux/actions/searchActions.js

export const setInputValue = (value) => ({
  type: "SET_INPUT_VALUE",
  payload: value,
});

export const setSuggestions = (suggestions) => ({
  type: "SET_SUGGESTIONS",
  payload: suggestions,
});

// Async action creator that makes an API call
export const fetchSuggestions = (query) => {
  return async (dispatch) => {
    try {
      const projectId = "{{Your_ProjectID}}"; // Replace with your actual project ID
      const response = await fetch(
        `{{base_domain}}/api/v1/ecommerce/clothes/products?query=${query}`,
        {
          method: "GET",
          headers: {
            projectId,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const productNames = data.map((product) => product.name);
        dispatch(setSuggestions(productNames)); // Dispatch SET_SUGGESTIONS action
      } else {
        console.error(
          "Error fetching suggestions:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
};
