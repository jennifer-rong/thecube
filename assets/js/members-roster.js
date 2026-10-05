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

  // LinkedIn profiles, keyed by roster name. People without one stay unlinked.
  var linkedin = {
    "Michael Tan": "https://www.linkedin.com/in/mtan2/",
    "Gaurav Uppal": "https://www.linkedin.com/in/gaurav-uppal-0a3922122/",
    "Isabel Senior": "https://www.linkedin.com/in/isabelsenior/",
    "Trishul Nagenalli": "https://www.linkedin.com/in/trishul-nagenalli/",
    "Jie Cai": "https://www.linkedin.com/in/jiecai1997/",
    "Suchir Bhatt": "https://www.linkedin.com/in/suchir1/",
    "Sam Chan": "https://www.linkedin.com/in/samuelpchan/",
    "Kate Chen": "https://www.linkedin.com/in/katezchen/",
    "Aayush Goradia": "https://www.linkedin.com/in/aayushgoradia/",
    "Andy Ju": "https://www.linkedin.com/in/andyjuice/",
    "Jaiveer Katariya": "https://www.linkedin.com/in/jaiveer-k-900865166/",
    "Alex Kornegay": "https://www.linkedin.com/in/alex-kornegay-4b5841150/",
    "Yash Patil": "https://www.linkedin.com/in/yash-p-2021/",
    "Charlie Todd": "https://www.linkedin.com/in/charles-todd-7143a715a/",
    "Rohan Reddy": "https://www.linkedin.com/in/rohan-reddy-583b00111/",
    "Varun Nair": "https://www.linkedin.com/in/varunnair18/",
    "Vineet Alaparthi": "https://www.linkedin.com/in/vineet-alaparthi/",
    "Justin Tandon": "https://www.linkedin.com/in/justintandon/",
    "David Elias": "https://www.linkedin.com/in/david-elias-a5444442/",
    "Aaron Chai": "https://www.linkedin.com/in/aaronschai/",
    "Raymond Chen": "https://www.linkedin.com/in/raymondhechen/",
    "Andrew Claxton": "https://www.linkedin.com/in/andrew-claxton/",
    "Donald Groh": "https://www.linkedin.com/in/donald-groh/",
    "Erik Jia": "https://www.linkedin.com/in/erikjia/",
    "Shaiv Kittur": "https://www.linkedin.com/in/shaivkittur/",
    "Ana Mees": "https://www.linkedin.com/in/anamees/",
    "Nitin Subramanian": "https://www.linkedin.com/in/nitin-subramanian-bbba26126/",
    "Michelle Tai": "https://www.linkedin.com/in/michelle-r-tai/",
    "Christine Yang": "https://www.linkedin.com/in/christinezyang/",
    "Bella Almeida": "https://www.linkedin.com/in/isabellajalmeida/",
    "Catherine McMillan": "https://www.linkedin.com/in/catherine-r-mcmillan/",
    "Thomas Williford": "https://www.linkedin.com/in/thomas-williford-742a9412b/",
    "Justin Holmes": "https://www.linkedin.com/in/justinholmes920/",
    "Ryan Chang": "https://www.linkedin.com/in/ryancwc/",
    "Kaitlyn Luo": "https://www.linkedin.com/in/kaitlyn-luo/",
    "Ashna Ram": "https://www.linkedin.com/in/ashna-ram/",
    "William Xie": "https://www.linkedin.com/in/williamxie36/",
    "Anna Xu": "https://www.linkedin.com/in/anna-xu-2023/",
    "Jane Zhang": "https://www.linkedin.com/in/jjanezhang/",
    "Mona Su": "https://www.linkedin.com/in/mona-su-255301195/",
    "Vishal Dubey": "https://www.linkedin.com/in/vishaldubey01/",
    "Will Inigo": "https://www.linkedin.com/in/william-inigo/",
    "Rob Wilds": "https://www.linkedin.com/in/robwilds/",
    "Vanessa Chen": "https://www.linkedin.com/in/vanessa-chen888/",
    "Han Zhang": "https://www.linkedin.com/in/han-zhang-0b5633159/",
    "Tim Ho": "https://www.linkedin.com/in/tim-ho781/",
    "Jared Bank": "https://www.linkedin.com/in/jared-bank-8aba6a1b8/",
    "Larry Chen": "https://www.linkedin.com/in/larry-ch3n/",
    "Judy Zhong": "https://www.linkedin.com/in/judy-zhong/",
    "Evan Shen": "https://www.linkedin.com/in/evantaoshen/",
    "Tina Xia": "https://www.linkedin.com/in/tina-xia/",
    "Leslie Dees": "https://www.linkedin.com/in/lesliedees/",
    "Emily Mittleman": "https://www.linkedin.com/in/emilymittleman/",
    "Christian Chitty": "https://www.linkedin.com/in/christianchitty/",
    "Celina You": "https://www.linkedin.com/in/celinayou/",
    "Clay Bromley": "https://www.linkedin.com/in/clayton-bromley-90bbb5187/",
    "Sonali Sanjay": "https://www.linkedin.com/in/sonalisanjay/",
    "Claire Tan": "https://www.linkedin.com/in/clclairetan/",
    "Christina Yoh": "https://www.linkedin.com/in/akira-christina-yoh/",
    "Nils Roede": "https://www.linkedin.com/in/nilsroede/",
    "Xixi Lei": "https://www.linkedin.com/in/xixi-lei-1453711b6/",
    "Ryan Hu": "https://www.linkedin.com/in/ryan-hu-3474141b3/",
    "Junwoo Kang": "https://www.linkedin.com/in/junwookang/",
    "Athena Yao": "https://www.linkedin.com/in/athenaayao/",
    "Aden Clemente": "https://www.linkedin.com/in/aden-clemente/",
    "Chris Liang": "https://www.linkedin.com/in/christina-liang609/",
    "Ayush Garg": "https://www.linkedin.com/in/ayush-garg-ag/",
    "Evelyn Shi": "https://www.linkedin.com/in/evelynxshi/",
    "Emily Leung": "https://www.linkedin.com/in/emily-leung-82279a1a9/",
    "Jason Lee": "https://www.linkedin.com/in/choonghwanlee/",
    "Kasey Park": "https://www.linkedin.com/in/kaseypark/",
    "Harry Liu": "https://www.linkedin.com/in/harry-liu-me/",
    "N Wang": "https://www.linkedin.com/in/nwang888/",
    "Richard Kim": "https://www.linkedin.com/in/richardhkim/",
    "Tyler Cheung": "https://www.linkedin.com/in/tyler-cheung-24373118b/",
    "Saathvik Boompelli": "https://www.linkedin.com/in/saathvik-boompelli-9a680b200/",
    "Aditya Gaur": "https://www.linkedin.com/in/adityagaur53/",
    "Pranay Vure": "https://www.linkedin.com/in/pranay-vure-0903641b2/",
    "Ellen Liu": "https://www.linkedin.com/in/xinrui-ellen-liu/",
    "Christian Okokhere": "https://www.linkedin.com/in/christianokokhere/",
    "Aryan Mathur": "https://www.linkedin.com/in/aryan27mathur",
    "Holly Zhuang": "https://www.linkedin.com/in/hollyzhuang/",
    "One Chowdhury": "https://www.linkedin.com/in/coffeewithone/",
    "Lasal Mapitigama": "https://www.linkedin.com/in/lasal-m-323a6a16b/",
    "Yihong Song": "https://www.linkedin.com/in/yihongs/",
    "John Xu": "https://www.linkedin.com/in/john-j-xu/",
    "John Schappert": "https://www.linkedin.com/in/john-schappert/",
    "Ayush Jain": "https://www.linkedin.com/in/ayushjain04/",
    "John Buxton": "https://www.linkedin.com/in/john-buxton",
    "Taylor Moorehead": "https://www.linkedin.com/in/taylormoorehead",
    "Kunling Tong": "https://www.linkedin.com/in/kunling-tong/",
    "Sophia Liu": "https://www.linkedin.com/in/sophia-liu-duke/",
    "Yura Heo": "https://www.linkedin.com/in/yura-heo/",
    "Aaron Hsu": "https://www.linkedin.com/in/aaron-hsu4606/",
    "Anna Liu": "https://www.linkedin.com/in/anna-liu-al/",
    "Hannah Choi": "https://www.linkedin.com/in/hannahyoonyoungchoi",
    "Bill Ssewanyana": "https://www.linkedin.com/in/billssewanyana/",
    "Nathan Shenkerman": "https://www.linkedin.com/in/nathan-shenkerman/",
    "Aubteen Pour-Biazar": "https://www.linkedin.com/in/aubteen-pour-biazar/",
    "Arvindh Manian": "https://www.linkedin.com/in/arvindh-manian/",
    "Divyansh Jain": "https://www.linkedin.com/in/divyansh-jain-b4b938182/",
    "Eleanor Taylor": "https://www.linkedin.com/in/eleanorptaylor/",
    "Peter Liu": "https://www.linkedin.com/in/peter-liu1/",
    "Andri Kadaifciu": "https://www.linkedin.com/in/andri-kadaifciu/",
    "Bilguun Zolzaya": "https://www.linkedin.com/in/bilguun-zolzaya-417870215/",
    "Brian Chen": "https://www.linkedin.com/in/brianchen27/",
    "Chloe Yang": "https://www.linkedin.com/in/chloe-yang-b0773020a/",
    "David Shenkerman": "https://www.linkedin.com/in/david-shenkerman-519627279/",
    "Dhruva Barua": "https://www.linkedin.com/in/dhruva-barua-260b83180/",
    "Evan Bulan": "https://www.linkedin.com/in/evan-bulan-b52582293/",
    "Judy He": "https://www.linkedin.com/in/judyyanqihe/",
    "Juliana Gates": "https://www.linkedin.com/in/julianagates/",
    "Kartikeye Gupta": "https://www.linkedin.com/in/kartikeye-gupta/",
    "Kaylyn Zhong": "https://www.linkedin.com/in/kaylynzhong/",
    "Michelle Li": "https://www.linkedin.com/in/michelleli3/",
    "Nikhil Pesaladinne": "https://www.linkedin.com/in/nikhil-pesaladinne-945177209/",
    "Sarah Tandon": "https://www.linkedin.com/in/sarah-tandon-bba6322a8/",
    "Ting Ting Li": "https://www.linkedin.com/in/li-ting-ting/",
    "Kayla Liang": "https://www.linkedin.com/in/kaylaliang",
    "Raphael Mukondiwa": "https://www.linkedin.com/in/raphmuk/",
    "Sarthak Agrawal": "https://linkedin.com/in/sarthakagra1",
    "Avrick Altmann": "https://www.linkedin.com/in/avrick-altmann",
    "Julia Chen": "https://www.linkedin.com/in/juliachen27",
    "Alex Boniske": "https://www.linkedin.com/in/alex-boniske",
    "Claire Chang": "https://www.linkedin.com/in/claire-chang-6aa47a2b4/",
    "Brianna Yang": "https://www.linkedin.com/in/brianna-c-yang/",
    "Paulina Vvedenskaya": "https://www.linkedin.com/in/paulina-v-a11158205/",
    "Rafael Soh": "https://www.linkedin.com/in/rafaelsoh",
    "Aiden Suganuma": "https://www.linkedin.com/in/aiden-suganuma-874a6923a",
    "Jane Shin": "https://www.linkedin.com/in/jane-shin-jaehee",
    "Brian Mason": "https://www.linkedin.com/in/brian-mason-685064241/",
    "Jonah Stein": "https://www.linkedin.com/in/jonah-stein-b62862180/",
    "Rashmi Thapa": "https://www.linkedin.com/in/rashmii-thapaa",
    "Alexis Fox": "https://www.linkedin.com/in/alexis-fox-87a8a8303/",
    "Thomas Hines": "https://www.linkedin.com/in/thethomashines/",
    "Sarthak Dhawan": "https://www.linkedin.com/in/sarthak-dh/",
    "Eileen Chen": "https://www.linkedin.com/in/eileenchenn/",
    "Tehseen Dahya": "https://www.linkedin.com/in/tehseen-dahya-jr/",
    "Alex Chindris": "https://www.linkedin.com/in/alex-chindris/",
    "Ben Tang": "https://www.linkedin.com/in/bentang8229/",
    "Cam Scoglio": "https://www.linkedin.com/in/cameronscoglio/",
    "Mohamed Cherif Braham": "https://www.linkedin.com/in/mohamedcherif-braham/",
    "Darius Kogah": "https://www.linkedin.com/in/darius-kogah/",
    "Derek Hu": "https://www.linkedin.com/in/dhu1109/",
    "Elaine Xiao": "https://www.linkedin.com/in/elainexiao/",
    "Harish Chandran": "https://www.linkedin.com/in/harish-chandran-usa/",
    "Jacob Staveteig": "https://www.linkedin.com/in/jacob-staveteig/",
    "Jennifer Rong": "https://www.linkedin.com/in/jenniferrong/",
    "Kendra Cheng": "https://www.linkedin.com/in/kendra-cheng-686482334/",
    "Kevin Jin": "https://www.linkedin.com/in/kevinjin918/",
    "Maya Puterman": "https://www.linkedin.com/in/mayaputerman/",
    "Sebastian deSouza": "https://www.linkedin.com/in/sebastian-desouza/",
    "Selin Mutlu": "https://www.linkedin.com/in/selin-s-mutlu/",
    "Sophia Lee": "https://www.linkedin.com/in/sophial25/",
    "Story Kummer": "https://www.linkedin.com/in/storykummer/"
  };

  var unavailable = new Set([
    "Yihong Song"  // old site only had a silhouette placeholder
  ]);

  // Optimized headshots are named after the person with spaces dropped
  // (aaronchai-200w.jpg); hyphens inside a surname are kept.
  function photoKey(name) {
    return name.toLowerCase().replace(/[^a-z0-9-]/g, "");
  }

  function photoAttrs(name) {
    var base = "assets/people_optimized/" + photoKey(name);
    return 'src="' + base + '-200w.jpg" srcset="' + base + '-100w.jpg 100w, ' + base + '-200w.jpg 200w, ' + base + '-400w.jpg 400w" sizes="(max-width: 560px) 43vw, 220px"';
  }

  function splitName(name) {
    var parts = name.split(" ");
    return [parts.shift(), parts.join(" ")];
  }

  Object.keys(roster).forEach(function (year) {
    var section = document.getElementById("class-" + year);
    if (!section) return;
    var grid = section.querySelector(".headshot-grid");
    grid.innerHTML = roster[year].map(function (name, index) {
      var parts = splitName(name);
      var visual = unavailable.has(name)
        ? '<div class="member-photo member-photo-placeholder" role="img" aria-label="Headshot coming soon for ' + name + '"></div>'
        : '<img class="member-photo" ' + photoAttrs(name) + ' alt="' + name + '" width="400" height="400" loading="' + (Number(year) === 2029 && index < 5 ? 'eager' : 'lazy') + '" decoding="async">';
      if (linkedin[name]) {
        visual = '<a class="member-photo-link" href="' + linkedin[name] + '" target="_blank" rel="noopener noreferrer" aria-label="' + name + ' on LinkedIn (opens in a new tab)">' + visual + '</a>';
      }
      return '<article class="member-card">' + visual +
        '<div class="member-name"><span>' + parts[0] + '</span><span>' + parts[1] + '</span></div></article>';
    }).join("");
    grid.querySelectorAll("img.member-photo").forEach(function (image) {
      image.addEventListener("error", function () {
        if (!image.dataset.retried) {
          image.dataset.retried = "true";
          var originalSource = image.getAttribute("src");
          image.removeAttribute("src");
          requestAnimationFrame(function () { image.setAttribute("src", originalSource); });
          return;
        }
        var placeholder = document.createElement("div");
        placeholder.className = "member-photo member-photo-placeholder";
        placeholder.setAttribute("role", "img");
        placeholder.setAttribute("aria-label", image.alt + " headshot coming soon");
        image.replaceWith(placeholder);
      });
    });
  });
}());
