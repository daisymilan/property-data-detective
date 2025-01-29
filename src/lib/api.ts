export const submitUrl = async (jinaUrl: string) => {
  const response = await fetch('property-data-detective-8qm3ghubb-daisys-projects-0a438b62.vercel.app', {
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