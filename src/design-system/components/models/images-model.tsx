import { modalAtom } from "design-system/atoms/model-atom";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "design-system/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "design-system/components/ui/dialog";
import { useEffect, useState } from "react";
import { cn } from "shared/lib/utils";
import { Image } from "shared/utils/types";

export default function ImagesModel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const data = modalAtom.useValue();

  const isModalOpen = data.isOpen && data.type === "images";
  if (!isModalOpen) {
    return null;
  }

  const handleClose = () => {
    modalAtom.onClose();
  };

  return (
    <Dialog open={data.isOpen} onOpenChange={handleClose}>
      <DialogContent className="h-full max-h-[100vh] w-full max-w-[100vw] bg-black text-white p-4 mx-auto rounded-lg">
        <DialogHeader className="flex justify-between items-center">
          <DialogTitle asChild></DialogTitle>
        </DialogHeader>

        <Carousel setApi={setApi}>
          <CarouselContent>
            {data.data.map((image: Image) => (
              <CarouselItem
                key={image.id}
                className="flex justify-center items-center">
                <img
                  src={image.url}
                  alt={image.name}
                  className="object-contain max-w-full max-h-[80vh]"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:w-14 md:h-14 text-white bg-gray-800 rounded-full flex items-center justify-center left-0 md:left-12"></CarouselPrevious>
          <CarouselNext className="md:w-14 md:h-14 text-white bg-gray-800 rounded-full flex items-center justify-center right-0 md:right-2"></CarouselNext>
        </Carousel>
        <div className="flex items-center justify-center w-full gap-1">
          {data.data.map((image: Image, index) => (
            <img
              loading="lazy"
              key={image.id}
              src={image.url}
              alt={image.name}
              className={cn(
                "max-w-[200px] max-h-[80px] rounded-lg p-1",
                current === index + 1 && "border-[1.5px] border-cyan-400",
              )}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
