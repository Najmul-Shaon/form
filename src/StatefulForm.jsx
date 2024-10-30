const StatefulForm = () => {

    

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sub");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default StatefulForm;
