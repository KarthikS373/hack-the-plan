import { atom } from "recoil"
import { formType } from "../../types/event-form"

const defaultFormData: formType = {
  preDefinedQues: [
    { val: "Name", isRequired: true, id: 1 },
    { val: "Email Address", isRequired: true, id: 2 },
    { val: "Wallet Address", isRequired: true, id: 3 },
  ],
  customQues: [],
}

interface DisclosureProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}
const stepAtom = atom<number>({
  key: "stepAtom",
  default: 0,
})

const inviteOnlyAtom = atom<boolean>({
  key: "inviteOnlyAtom",
  default: false,
})

const formDetails = atom<formType>({
  key: "registerFormDetails",
  default: defaultFormData,
})
const dropDownForm = atom<any[]>({
  key: "dropdownForm",
  default: [],
})

const updateOnce = atom<boolean>({
  key: "updateOnce",
  default: false,
})
const navDisclosure = atom<DisclosureProps>({
  key: "navDisclosure",
  default: {
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
  },
})

export { stepAtom, inviteOnlyAtom, formDetails, updateOnce, dropDownForm, navDisclosure }
