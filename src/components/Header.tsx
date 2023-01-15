type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Name</h1>
        <div className="header__price-box">
          <p>Total Items:</p>
          <p>Total Price:</p>
        </div>
      </div>
    </header>
  )
  return <div>Header</div>;
};
