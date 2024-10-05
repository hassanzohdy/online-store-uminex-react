import { trans } from "@mongez/localization";
import { modalAtom } from "design-system/atoms/model-atom";
import { Button } from "design-system/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "design-system/components/ui/dialog";
import { Input } from "design-system/components/ui/input";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { PiCopySimpleLight } from "react-icons/pi";

export default function ShareModel() {
  const data = modalAtom.useValue();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    setCopied(true);
    navigator.clipboard.writeText(data.data);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const isModalOpen = data.isOpen && data.type === "share";
  if (!isModalOpen) {
    return null;
  }

  const handleClose = () => {
    modalAtom.onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle className="text-md text-primary">
            {trans("Copy Link")}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start gap-1 w-full font-medium text-md">
          <div className="flex items-center gap-1 w-full">
            <Input readOnly className="w-full" value={data.data} />
            <Button variant={"primary"} onClick={handleCopyLink}>
              {copied && <FaCheck className="w-4 h-4" />}
              {!copied && <PiCopySimpleLight className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
