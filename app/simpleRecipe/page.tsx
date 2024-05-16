import Image from "next/image";
import OmeletteImage from "@/assets/recipe-page-main/assets/images/image-omelette.jpeg";

const SimpleRecipe = () => {
  return (
    <div className="p-8">
      <div>
        <Image
          src={OmeletteImage}
          alt="omelette image"
          className="w-[60%] h-[20rem] rounded-2xl"
        />
        <h1>Simple Omelette Recipe</h1>
      </div>
    </div>
  );
};

export default SimpleRecipe;
