import { create } from "zustand";
import { Contact, CVActions, CVState } from "../../types/CV"

export const useCVStore = create<CVState & CVActions>((set) => ({
    name: '',
    surname: '',
    jobTitle: '',
    contacts: [],
    changeName: (name: string) => set(() => {
        return { name };
    }),
    changeSurname: (surname: string) => set(() => {
        return { surname };
    }),
    changeJobTitle: (jobTitle: string) => set(() => {
        return { jobTitle };
    }),
    changeContacts: (contact: Contact) => set(() => {
        return { contacts: [contact] };
    }),
}))