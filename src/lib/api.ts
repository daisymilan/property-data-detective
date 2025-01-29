export const submitUrl = async (jinaUrl: string) => {
  const response = await fetch('YOUR_PROXY_URL/api/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: jinaUrl })
  });

  if (!response.ok) {
    throw new Error('Failed to process URL');
  }

  return response.json();
};