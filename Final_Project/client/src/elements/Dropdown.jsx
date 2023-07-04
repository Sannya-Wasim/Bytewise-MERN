const DropDown = ({ items }) => {
  return (
    <div className="dropdown">
      <ul>
        {items.map((currentItem) => {
          return (
            <li>
              <a href="">{currentItem}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
