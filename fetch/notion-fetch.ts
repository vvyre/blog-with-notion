export const notionFetch = async <Req = unknown, Res = unknown>(
  url: string,
  method: 'GET' | 'POST' = 'GET',
  body?: Req,
  option?: RequestInit & NextFetchRequestConfig
) => {
  const res = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${process.env.NOTION_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    ...option,
  });
  const result: Res = await res.json();
  return result;
};
