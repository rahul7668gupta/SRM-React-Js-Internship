fetch("data.json").then(response => {
    return response.json();
}).then(data => {
    console.log(data.profile.basics1);
    console.log(data.details);
    profile(data.profile.basics1);
    details(data.details);
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

    var br = document.createElement("br");
    child_1.append(br);

    var mobile = document.createElement("a");
    mobile.textContent = basic_info.mobile;
    child_1.append(mobile);

    var address = document.createElement("p");
    address.textContent = basic_info.address;
    child_1.append(address);

}

var details = (detail_info) => {
    // console.log(detail_info);
    var summaryHeading = document.createElement("h2");
    summaryHeading.textContent = "Summary";
    child_2.append(summaryHeading);

    var hr1 = document.createElement("hr");
    child_2.append(hr1);

    var list = document.createElement("ul");
    detail_info.summary.map(i => {
        var listItem = document.createElement("li");
        listItem.textContent = i;
        list.append(listItem);
    })

    child_2.append(list);

    var skillHeading = document.createElement("h2");
    skillHeading.textContent = "Skills";
    child_2.append(skillHeading);
    var skill_hr = document.createElement("hr");
    child_2.append(skill_hr);

    detail_info.skills.map(i => {
        var skillType = document.createElement('h3');
        skillType.textContent = i.type;
        child_2.append(skillType);

        i.values.map(skill_value => {
            var skillValue = document.createElement("span");
            skillValue.textContent = skill_value;
            skillValue.classList.add("skill");
            child_2.append(skillValue);
        })
    })
}