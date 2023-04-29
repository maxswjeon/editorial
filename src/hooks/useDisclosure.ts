import { useState } from "react";

export const useDisclosure = () => {
  const [isOpen, setOpen] = useState(false);

  return {
    isOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    onToggle: () => setOpen(!isOpen),
  };
};
