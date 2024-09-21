import { atom } from "@mongez/react-atom";

export type ModalType = "cart" | "wishlist" | "compare";

type ModalAtomType = {
  type: ModalType | null;
  isOpen: boolean;
};

export const modalAtom = atom<ModalAtomType>({
  key: "modal",
  default: {
    type: null,
    isOpen: false,
  },
  actions: {
    onOpen(type: ModalType) {
      const modal = modalAtom.value;
      modalAtom.update({
        ...modal,
        type,
        isOpen: true,
      });
    },
    onClose() {
      modalAtom.update({
        type: null,
        isOpen: false,
      });
    },
  },
});
