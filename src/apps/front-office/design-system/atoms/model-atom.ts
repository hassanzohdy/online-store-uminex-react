import { atom } from "@mongez/react-atom";

export type ModalType = "cart" | "wishlist" | "compare" | "images";

type ModalAtomType = {
  type: ModalType | null;
  isOpen: boolean;
  data: any;
};

export const modalAtom = atom<ModalAtomType>({
  key: "modal",
  default: {
    type: null,
    isOpen: false,
    data: null,
  },
  actions: {
    onOpen(type: ModalType, data?: any) {
      const modal = modalAtom.value;
      modalAtom.update({
        ...modal,
        type,
        isOpen: true,
        data,
      });
    },
    onClose() {
      modalAtom.update({
        type: null,
        isOpen: false,
        data: null,
      });
    },
  },
});
