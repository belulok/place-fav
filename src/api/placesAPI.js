export const markFavoriteApi = async (placeId) => {
    const response = await fetch('/api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ placeId }),
    });

    if (!response.ok) {
      throw new Error('Failed to mark as favorite');
    }

    return response.json();
  };
