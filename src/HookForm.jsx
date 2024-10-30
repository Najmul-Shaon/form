import useInputState from "./Hooks/useInputState";

const HookForm = () => {
  const [name, setName] = useInputState("abc");
    const handleSubmit = (e) => {
      console.log('form', name)
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={setName} type="text" name="name" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
