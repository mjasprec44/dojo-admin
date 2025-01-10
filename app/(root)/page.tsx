"use client";
// import { UserButton } from "@clerk/nextjs";
import { Modal } from "@/components/ui/modal";
export default function SetupPage() {
  return (
    <div className="p-4">
      {/* <UserButton /> */}
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="test"
        description="test desc"
      ></Modal>
    </div>
  );
}
