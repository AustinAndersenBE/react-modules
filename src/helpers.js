export function choice(items) {
  const randomIdx = Math.floor(Math.random() * items.length);
  return items[randomIdx];
}

export function remove(items,item) {
  const itemIdx = items.indexOf(item);
  if (itemIdx !== -1) {
    return items.splice(itemIdx, 1)[0];
  }
  return undefined;
}