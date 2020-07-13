fetch("data.json").then(response => {
    return response.json();
}).then(data => {
    console.log(data.profile);
    profile(data.profile.basics);
    details(data.profile.details);
})

var child_1 = document.querySelector(".child_1");
var child_2 = document.querySelector(".child_2");

var profile = (basic_info) => {
    console.log(basic_info);

    var name = document.createElement("h2");
    name.textContent = basic_info.name;
    child_1.append(name);

    var role = document.createElement("h4");
    role.textContent = basic_info.role;
    child_1.append(role);

    var hr = document.createElement("hr");
    child_1.append(hr);

    var email = document.createElement("a");
    email.href = "mailto:" + basic_info.email;
    email.textContent = basic_info.email;
    child_1.append(email);

    var mobile = document.createElement("a");
    mobile.textContent = basic_info.mobile;
    child_1.append(mobile);

    var address = document.createElement("p");
    address.textContent = basic_info.address;
    child_1.append(address);

}

var details = (detail_info) => {
    console.log(detail_info);
}