import Button from "./button";

const MenuBar = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <Button onPress={() => ""} text="about" />
      <Button onPress={() => ""} text="project" />
      <Button onPress={() => ""} text="experience" />
    </div>
  );
};

export default MenuBar;
