(function () {
  var roster = {
    2029: ["Alex Chindris","Ben Tang","Cam Scoglio","Mohamed Cherif Braham","Darius Kogah","Derek Hu","Elaine Xiao","Harish Chandran","Jacob Staveteig","Jennifer Rong","Kendra Cheng","Kevin Jin","Maya Puterman","Sebastian deSouza","Selin Mutlu","Sophia Lee","Story Kummer"],
    2028: ["Sarthak Agrawal","Avrick Altmann","Julia Chen","Alex Boniske","Claire Chang","Brianna Yang","Paulina Vvedenskaya","Rafael Soh","Aiden Suganuma","Jane Shin","Brian Mason","Jonah Stein","Rashmi Thapa","Alexis Fox","Thomas Hines","Sarthak Dhawan","Eileen Chen","Tehseen Dahya"],
    2027: ["Andri Kadaifciu","Bilguun Zolzaya","Brian Chen","Chloe Yang","David Shenkerman","Dhruva Barua","Evan Bulan","Judy He","Juliana Gates","Kartikeye Gupta","Kaylyn Zhong","Michelle Li","Nikhil Pesaladinne","Sarah Tandon","Ting Ting Li","Kayla Liang","Raphael Mukondiwa"],
    2026: ["Lasal Mapitigama","Yihong Song","John Xu","John Schappert","Ayush Jain","John Buxton","Taylor Moorehead","Kunling Tong","Sophia Liu","Yura Heo","Aaron Hsu","Anna Liu","Hannah Choi","Bill Ssewanyana","Nathan Shenkerman","Aubteen Pour-Biazar","Arvindh Manian","Divyansh Jain","Eleanor Taylor","Peter Liu"],
    2025: ["Kasey Park","Harry Liu","N Wang","Richard Kim","Tyler Cheung","Saathvik Boompelli","Aditya Gaur","Pranay Vure","Ellen Liu","Christian Okokhere","Aryan Mathur","Holly Zhuang","One Chowdhury"],
    2024: ["Celina You","Clay Bromley","Sonali Sanjay","Claire Tan","Christina Yoh","Nils Roede","Xixi Lei","Ryan Hu","Junwoo Kang","Athena Yao","Aden Clemente","Chris Liang","Ayush Garg","Evelyn Shi","Emily Leung","Jason Lee","Chang Yan"],
    2023: ["Ryan Chang","Kaitlyn Luo","Ashna Ram","William Xie","Anna Xu","Jane Zhang","Mona Su","Vishal Dubey","Will Inigo","Rob Wilds","Vanessa Chen","Han Zhang","Tim Ho","Jared Bank","Larry Chen","Judy Zhong","Evan Shen","Tina Xia","Leslie Dees","Emily Mittleman","Christian Chitty"],
    2022: ["Vineet Alaparthi","Justin Tandon","David Elias","Aaron Chai","Raymond Chen","Andrew Claxton","Donald Groh","Erik Jia","Shaiv Kittur","Ana Mees","Maggie Pan","Nitin Subramanian","Michelle Tai","Christine Yang","Bella Almeida","Catherine McMillan","Thomas Williford","Justin Holmes"],
    2021: ["Suchir Bhatt","Sam Chan","Kate Chen","Aayush Goradia","Andy Ju","Jaiveer Katariya","Alex Kornegay","Yash Patil","Charlie Todd","Rohan Reddy","Alex Balfanz","Varun Nair"],
    2020: ["Ethan Holland","Michael Tan","Gaurav Uppal","Isabel Senior","Trishul Nagenalli","Jie Cai"]
  };

  var unavailable = new Set([
    "Juliana Gates","Kartikeye Gupta","Kayla Liang","Kaylyn Zhong","Michelle Li",
    "Nikhil Pesaladinne","Raphael Mukondiwa","Sarah Tandon","Ting Ting Li",
    "Aaron Hsu","Anna Liu","Arvindh Manian","Aubteen Pour-Biazar",
    "Yihong Song"
  ]);

  function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function splitName(name) {
    var parts = name.split(" ");
    return [parts.shift(), parts.join(" ")];
  }

  Object.keys(roster).forEach(function (year) {
    var section = document.getElementById("class-" + year);
    if (!section) return;
    var grid = section.querySelector(".headshot-grid");
    var note = section.querySelector(".class-note");
    if (note) note.textContent = roster[year].length + " members";
    grid.innerHTML = roster[year].map(function (name) {
      var parts = splitName(name);
      var visual = unavailable.has(name)
        ? '<div class="member-photo member-photo-placeholder" role="img" aria-label="Headshot coming soon for ' + name + '"></div>'
        : '<img class="member-photo" src="assets/members/' + slugify(name) + '.jpg" alt="' + name + '" width="400" height="400" loading="eager" decoding="async">';
      return '<article class="member-card">' + visual +
        '<div class="member-name"><span>' + parts[0] + '</span><span>' + parts[1] + '</span></div></article>';
    }).join("");
    grid.querySelectorAll("img.member-photo").forEach(function (image) {
      image.addEventListener("error", function () {
        var placeholder = document.createElement("div");
        placeholder.className = "member-photo member-photo-placeholder";
        placeholder.setAttribute("role", "img");
        placeholder.setAttribute("aria-label", image.alt + " headshot coming soon");
        image.replaceWith(placeholder);
      }, { once: true });
    });
  });
}());
