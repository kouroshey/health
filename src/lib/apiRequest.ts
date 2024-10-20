export const apiRequest = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
