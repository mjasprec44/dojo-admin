import prismaDb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const { storeId } = await params;

  const store = await prismaDb.store.findFirst({ where: { id: storeId } });

  if (!store) {
  }
  return <div>Active Store: {store?.name}</div>;
};

export default DashboardPage;
