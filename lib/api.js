const API_URL = 'http://localhost:8000/api/v2';

export async function getDocuments() {
  const res = await fetch(`${API_URL}/documents/`);
  if (!res.ok) throw new Error('Failed to fetch documents');
  const data = await res.json();
  return data.items;
}

export async function getPages() {
  const res = await fetch(`${API_URL}/pages/`);
  if (!res.ok) throw new Error('Failed to fetch pages');
  const data = await res.json();
  return data.items;
}
