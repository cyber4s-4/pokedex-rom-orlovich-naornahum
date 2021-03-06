export const capatialFirstLetter = (str: string) =>
  str[0].toUpperCase() + str.slice(1);

export const makeUniqeArr = (arr: any[]) => [...new Set(arr)];

export const createEnteries = (obj: object) => Object.entries(obj);

export const findElById = <T extends { id: string; name: string }>(
  id: string,
  arr: T[]
) => arr.find((el) => id === el.id);

// Get function and time to delay. and active the function after the time is passed.
export const delayFunction = (
  // eslint-disable-next-line no-unused-vars
  func: (...args: any[]) => any,
  timeDelay: number
) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("finish");
    }, timeDelay);
  }).then(() => func());

export const createApiEndPoint = (URL: string, endPoint: string) =>
  `${URL}/${endPoint}`;

export const fetchData = async (
  url: string,
  method?: string,
  body?: object,
  moreOptions?: Partial<Request>
) => {
  const options = body
    ? {
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    : {};

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, { ...options, ...moreOptions });
    if (!response.ok) throw new Error(`Something is went wrong! `);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const promiseHandler = async <T>(promise: Promise<T>) => {
  try {
    const res = await promise;
    return [res, undefined] as const;
  } catch (error) {
    return [undefined, error] as const;
  }
};

export function getUniqueListBy<T>(arr: T[], key: keyof T) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}
