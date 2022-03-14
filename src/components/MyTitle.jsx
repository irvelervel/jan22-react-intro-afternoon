// the easiest way of writing a React Component is with an arrow function

export const MyTitle = () => {
  let x = 10;
  let y = x * 50;

  return (
    <div>
      <h3>value of y is: {y}</h3>
    </div>
  );
};

// export default MyTitle;
