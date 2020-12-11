export const normalizeData = (data) =>
  data.reduce(
    (acc, curr) => ({
      ...acc,
      ids: acc.ids.concat(curr.id),
      byId: { ...acc.byId, [curr.id]: curr },
    }),
    { ids: [], byId: {} }
  );

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
