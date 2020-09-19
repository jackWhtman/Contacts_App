import React from "react";

export function ContactsApi(){
    return fetch("http://localhost:9000/contacts");
}