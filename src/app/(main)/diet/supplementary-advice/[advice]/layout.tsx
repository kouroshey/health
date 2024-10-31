import { Metadata } from "next";

type Props = {
  params: { advice: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const advice = (await params).advice;
  const [title] = advice.split("_");
  return {
    title,
  };
}

export default function SupplementAdviceDynamicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
