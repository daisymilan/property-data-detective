export const submitUrl = async (jinaUrl: string) => {
  const response = await fetch('https://n8n.servenorobot.com/webhook/real-estate', {
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