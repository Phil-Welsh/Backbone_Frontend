import { atom } from "recoil";

// this is going to create a named export
// called userState for us to be able to import in our component files
export const userState = atom({
    key: "userState",
    default: null,
});
