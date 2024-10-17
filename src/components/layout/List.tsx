import ListItem, { ListItemProps } from "./ListItem";

interface ListProps {
  items: ListItemProps[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={index}>
          <ListItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default List;
