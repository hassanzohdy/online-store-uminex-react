import { trans } from "@mongez/localization";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiCopySimpleLight } from "react-icons/pi";

import { Button } from "design-system/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "design-system/components/ui/dialog";
import { Input } from "design-system/components/ui/input";

export type ShareModelProps = {
  link: string;
};

export default function ShareModel(props: ShareModelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    setCopied(true);
    navigator.clipboard.writeText(props.link);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-1">
          <IoShareSocialOutline className="w-4 h-4" />
          {trans("Share")}
        </div>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle className="text-md text-primary">
            {trans("Copy Link")}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start gap-1 w-full font-medium text-md">
          <div className="flex items-center gap-1 w-full">
            <Input readOnly className="w-full" value={props.link} />
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
