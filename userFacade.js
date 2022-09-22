const url = "http://localhost:3333/api/users/"

const renderUserTr = (json) => {
    return (
        `<tr>` +
        `<td>${json.id}</td>` +
        `<td>${json.age}</td>` +
        `<td>${json.name}</td>` +
        `<td>${json.gender}</td>` +
        `<td>${json.email}</td>` +
        `</tr>`
    )
}

const renderUserDiv = (json) => {
    return (
        `${json.id}<br>` +
        `${json.age}<br>` +
        `${json.name}<br>` +
        `${json.gender}<br>` +
        `${json.email}<br>`
    )
}

function getAllUsers() {
    let allUsersRow = document.getElementById("allUserRows")

    fetch(url)
        .then(res => res.json())
        .then(users => {
            allUsersRow.innerHTML = users.map((user) => renderUserTr(user)).join("\n")
        })
}

function getUser() {
    let id = document.getElementById("userIdToGet").value
    let output = document.getElementById("userDiv")

    fetch(url + id)
        .then(res => res.json())
        .then(user => {
            console.log(user)
            output.innerHTML = renderUserDiv(user)
        })
}

function addUser() {
    let form = {
        name: document.querySelector("#addUserForm #addName").value,
        age: document.querySelector("#addUserForm #addAge").value,
        gender: document.querySelector('#addUserForm [name="addGender"]:checked').value,
        email: document.querySelector("#addUserForm #addEmail").value
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

function editUser ()   {
    let id = document.querySelector("#editUserForm #userIdToEdit").value
    let form = {
        name: document.querySelector("#editUserForm #editName").value,
        age: document.querySelector("#editUserForm #editAge").value,
        gender: document.querySelector('#editUserForm [name="editGender"]:checked').value,
        email: document.querySelector("#editUserForm #editEmail").value
    }

    fetch(url + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

function deleteUser() {
    let id = document.getElementById("userIdToDelete").value;

    fetch(url + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })
        .then(res => res.json())
        .then(res => console.log(res))
}


const userFacade = {
    getAllUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
}

export default userFacade
