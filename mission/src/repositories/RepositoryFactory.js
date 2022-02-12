import ItemRepository from './ItemRepository';
import WishRepository from './WishRepository';

const repositories = {
  item: ItemRepository,
  wish: WishRepository,
};

export default { get: (name) => repositories[name] };
