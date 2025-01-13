const baseURL = `http://localhost:3000`;

export async function getCities() {
    const response = await fetch(`${baseURL}/cities`, {
        method: "GET",
    });
    const data = await response.json();
    return data;
}

export async function getCity(id) {
    const response = await fetch(`${baseURL}/cities/${id}`, {
        method: "GET",
    });
    const data = await response.json();
    return data;
}

export async function createCity(newCity) {
    const response = await fetch(`${baseURL}/cities`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newCity,
    });
    const data = await response.json();
    return data;
}

export async function updateCity(updatedCity) {
    const response = await fetch(`${baseURL}/cities`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: updatedCity,
    });
    const data = await response.json();
    return data;
}

export async function deleteCity(id) {
    const response = await fetch(`${baseURL}/cities/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();
    return data;
}
