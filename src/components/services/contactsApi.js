const url = `https://648ae0fd17f1536d65e9e3fc.mockapi.io/contacts`;


export const fetchContacts = async () => {
    // url.searchParams.append('sortBy', 'title');
    return await fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.warn(error);
    });
}

export const addContact = async (newContact) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return await response.json();
}

export const deleteContact = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        
    });
    return await response.json();
}


// export const postContact = async (endpoint, requestBody) => {
//   const response = await fetch(`${BASE_URL}${endpoint}`, {
//       method: "POST",
//       body: JSON.stringify(requestBody),
//     headers: {
//       "Content-Type": "application/json",
//     },
    
//   });

//   return await response.json();
// };