import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { FaHistory, FaFileArchive, FaFileAlt, FaCog, FaCopy, FaColumns, FaFileExport, FaExchangeAlt } from 'react-icons/fa';

const MenuItem: React.FC<{ icon: React.ReactNode, label: string, shortcut?: string }> = ({ icon, label, shortcut }) => (
  <DropdownMenu.Item className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100">
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{label}</span>
    </div>
    {shortcut && <span className="text-gray-500">{shortcut}</span>}
  </DropdownMenu.Item>
);

const CustomDropdownMenu: React.FC = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button className="p-2 rounded-full hover:bg-gray-200">
        <DotsHorizontalIcon />
      </button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="bg-white shadow-lg rounded-md">
        <MenuItem icon={<FaHistory />} label="Version History" shortcut="Beta" />
        <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
        <MenuItem icon={<FaColumns />} label="Dashboard" />
        <MenuItem icon={<FaFileAlt />} label="New File" shortcut="⌘N" />
        <MenuItem icon={<FaExchangeAlt />} label="Switch File" />
        <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
        <MenuItem icon={<FaCopy />} label="Duplicate File" shortcut="⌘D" />
        <MenuItem icon={<FaFileArchive />} label="Archive File" />
        <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
        <MenuItem icon={<FaCog />} label="Settings" />
        <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
        <MenuItem icon={<FaFileExport />} label="Appearance" />
        <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
        <MenuItem icon={<FaCog />} label="Help" />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

export default CustomDropdownMenu;
