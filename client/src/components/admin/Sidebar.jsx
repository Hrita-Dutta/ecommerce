import { adminSidebarMenuItems } from "@/config";
import { ShieldUser } from "lucide-react";
import { useNavigate } from "react-router";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex flex-col gap-2">
      {adminSidebarMenuItems.map((menuItem) => {
        const Icon = menuItem.icon;
        return (
          <div
            className="flex text-lg items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground"
            key={menuItem.id}
            onClick={() => {
              setOpen ? setOpen(false) : null;
              navigate(menuItem.path);
            }}
          >
            <Icon />
            {menuItem.label}
          </div>
        );
      })}
    </nav>
  );
}

const AdminSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-4">
                <ShieldUser size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden lg:flex w-64 flex-col border-r bg-background p-6 ">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ShieldUser size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </>
  );
};

export default AdminSidebar;
