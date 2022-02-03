// eslint-disable-next-line
const API_URL = `https://mate.acade11123my/students-api/goods`;

export async function getAllGoods(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);

    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error ', error);

    throw new Error('error');
  }
}

export const getFiveFirst = async () => {
  const goods = await getAllGoods();

  return [...goods]
    .sort((goodFirst, goodSecond) => (
      goodFirst.name.localeCompare(goodSecond.name)
    ))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await fetch(`${API_URL}?color=red`);

  return goods.json();
};