export type Contact = {
    icon: string;
    text: string;
}

export type CVState = {
    name: string;
    surname: string;
    jobTitle: string;
    contacts: Contact[];
}

export type CVActions = {
    changeName: (name: string) => void;
    changeSurname: (surname: string) => void;
    changeJobTitle: (jobTitle: string) => void;
    changeContacts: (contact: Contact) => void;
}