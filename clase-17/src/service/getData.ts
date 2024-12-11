
interface ApiResponse {
  data: string;
}

export const getData = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch('https://example.com');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Network error');
  }
};


export const getData = async (): Promise<ApiResponse> => {
  return fetch('https://example.com')
    .then((response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
  })
  .catch((error) => console.log(error));
};
