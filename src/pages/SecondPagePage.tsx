import { useSearchParams } from "react-router-dom";
import SecondPage from "../SecondPage";

export default function SecondPagePage() {
  const [search] = useSearchParams();
  const params = {
    MainZoneBackground: search.get("MainZoneBackground") || undefined,
    MainZoneBackgroundType: search.get("MainZoneBackgroundType") || undefined,
    MainZoneName: search.get("MainZoneName") || "Page",
    TextZoneDescription: search.get("TextZoneDescription") || "",
    TextZoneAnimation: search.get("TextZoneAnimation") || "",
    TextZoneAnimationType: search.get("TextZoneAnimationType") || "",
  };

  return <SecondPage {...params} />;
}
