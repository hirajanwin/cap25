'use client';

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname, useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: 'Metrics', path: '/metrics' },
    { name: 'Members', path: '/members' },
    { name: 'Meetings', path: '/meetings' },
  ];

  return (
    <nav className="h-16 px-4 py-3 justify-between items-center flex w-full bg-[#EBEEF4]">
      {/* Logo */}
      <div className="w-10 h-10 rounded-3xl justify-center items-center gap-2.5 flex">
        <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.36925 23.0008L15.9972 29.6287L22.6251 23.0008L15.9972 16.3729L9.36925 23.0008Z" fill="#AD2576"/>
          <path d="M12.9134 19.4395C14.6071 17.4822 14.3934 14.5225 12.436 12.8288C10.4787 11.1351 7.51902 11.3488 5.82534 13.3061C4.13166 15.2634 4.34537 18.2232 6.30268 19.9168C8.25999 21.6105 11.2197 21.3968 12.9134 19.4395Z" fill="#206BDB"/>
          <path d="M15.9998 3.11578L9.3719 9.7437L22.6277 22.9995L29.2556 16.3716L15.9998 3.11578Z" fill="#9FE57D"/>
          <path d="M2.74461 3.11668C-0.914871 6.77617 -0.914871 12.7126 2.74461 16.3721L16 3.11668C12.3405 -0.542801 6.4041 -0.542801 2.74461 3.11668Z" fill="#FB5D5D"/>
          <path d="M29.2554 3.11668C25.5959 -0.542801 19.6595 -0.542801 16 3.11668C12.3405 6.77617 12.3405 12.7126 16 16.3721C19.6595 20.0316 25.5959 20.0316 29.2554 16.3721C32.9149 12.7126 32.9149 6.77617 29.2554 3.11668Z" fill="#206BDB"/>
        </svg>
      </div>

      {/* Navigation Items */}
      <div className="grow shrink basis-0 h-10 justify-center items-center gap-6 flex">
        {navItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            onClick={() => router.push(item.path)}
            className={cn(
              "px-4 py-2 rounded-full text-base font-semibold transition-all",
              pathname === item.path
                ? "bg-white text-[#151336] shadow-sm"
                : "bg-transparent text-[#4c4c4c] hover:bg-white/50"
            )}
          >
            {item.name}
          </Button>
        ))}
      </div>

      {/* Avatar */}
      <Avatar className="w-8 h-8">
        <AvatarImage 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
          alt="User avatar"
        />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Navbar;
