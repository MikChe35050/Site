import CharacterButton from "../character";
import ContactMeButton from "../contactMeButton";

export default function HomePage() {
  const CreateUrl = (
    params: string | string[][] | Record<string, string> | URLSearchParams
  ): string => {
    return new URLSearchParams(params).toString();
  };

  return (
    <div
      className="view"
      style={{
        backgroundImage: "url(back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <ContactMeButton />
      <h1
        style={{
          color: "black",
          textAlign: "center",
          position: "absolute",
          top: 20,
          left: 0,
          right: 0,
        }}
      >
        Welcome to my character showcase! Click on a character to see more
        details. (I am gay)
      </h1>
      <CharacterButton
        photoUrl="./1.png"
        borderPhotoUrl="./2.png"
        href={`/second?${CreateUrl({
          MainZoneBackground: "./car.mp4",
          MainZoneBackgroundType: "video",
          MainZoneName: "Truck",
          TextZoneDescription: "This is a fake taxi running to ur mom.",
          TextZoneAnimation: "./car_second.mp4",
          TextZoneAnimationType: "video",
        })}`}
        top={400}
      />
      <CharacterButton
        photoUrl="./Golem.png"
        borderPhotoUrl="./Golem_alpha.png"
        href={`/second?${CreateUrl({
          MainZoneBackground: "./master_full.mp4",
          MainZoneBackgroundType: "video",
          MainZoneName: "Truck",
          TextZoneDescription: "This is a fake taxi running to ur mom.",
          TextZoneAnimation: "./car_second.mp4",
          TextZoneAnimationType: "video",
        })}`}
        top={400}
        shift={500}
        
      />
      <CharacterButton
        photoUrl="./3.png"
        borderPhotoUrl="./4.png"
        href={`/second?${CreateUrl({
          MainZoneBackground: "./car.mp4",
          MainZoneBackgroundType: "video",
          MainZoneName: "Truck",
          TextZoneDescription: "This is a fake taxi running to ur mom.",
          TextZoneAnimation: "./car_second.mp4",
          TextZoneAnimationType: "video",
        })}`}
        top={400}
      />
      <CharacterButton
        photoUrl="./5.png"
        borderPhotoUrl="./6.png"
        href={`/second?${CreateUrl({
          MainZoneBackground: "./car.mp4",
          MainZoneBackgroundType: "video",
          MainZoneName: "Truck",
          TextZoneDescription: "This is a fake taxi running to ur mom.",
          TextZoneAnimation: "./car_second.mp4",
          TextZoneAnimationType: "video",
        })}`}
        top={230}
        shift={450}
      />
    </div>
  );
}
