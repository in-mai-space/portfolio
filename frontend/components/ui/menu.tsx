import Button from "./button";

const MenuBar = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <Button onPress={() => "hi"} text="about" />
      <Button onPress={() => "hi"} text="project" />
      <Button onPress={() => "hi"} text="experience" />
    </div>
  );
};

export default MenuBar;
