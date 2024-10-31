import { Metadata } from "next";

type Props = {
  params: { method: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const method = (await params).method;
  const [title] = method.split("_");
  return {
    title,
  };
}

export default function CookingMethodsDynamicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
