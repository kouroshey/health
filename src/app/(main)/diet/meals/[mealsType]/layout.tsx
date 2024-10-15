import MealsItemData from "@/store/local/MealsItemData.json";

export async function generateMetadata({
  params,
}: {
  params: { mealsType: string };
}) {
  const mealsType = decodeURIComponent(params.mealsType);
  const persianNameMeal = MealsItemData.find(
    (meal) => meal.link.slice(15) === mealsType,
  )!;
  return {
    title: persianNameMeal.name,
  };
}

export default function MealsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
