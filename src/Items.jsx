import SingleComponent from './SingleComponent';

const Items = ({ items, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleComponent key={item.id} item={item} removeItem={removeItem} />
        );
      })}
    </div>
  );
};
export default Items;
