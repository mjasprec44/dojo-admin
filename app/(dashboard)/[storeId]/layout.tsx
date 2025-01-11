import prismaDb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = await auth();
  const { storeId } = await params;

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismaDb.store.findFirst({
    where: { id: storeId, userId },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div>This will be a navbar</div>
      {children}
    </>
  );
}
