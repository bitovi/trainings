const baseUrl = "https://cowbird-staging.fly.dev/groups/bun-experiment/mocks";

export async function getData(endpoint: string) {
  const response = await fetch(`${baseUrl}/${endpoint}`);
  const data = await response.json();
  return data;
}
