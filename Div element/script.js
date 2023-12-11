const data = [
  {
    name: "KFC",
    cusisines: "Fast Food, Western",
    average_rating: 4.3,
    costForTwo: 500,
  },
  {
    name: "Dominos",
    cusisines: "Fast Food, Western",
    average_rating: 4.4,
    costForTwo: 580,
  },
  {
    name: "Saravana Bhavan",
    cusisines: "South Indian",
    average_rating: 4.6,
    costForTwo: 800,
  },
  {
    name: "Venkateswara",
    cusisines: "South Indian",
    average_rating: 3.6,
    costForTwo: 300,
  },
  {
    name: "Taco Bell",
    cusisines: "Snacks",
    average_rating: 4.1,
    costForTwo: 900,
  },
  {
    name: "Karthik Tiffin Center",
    cusisines: "Fast Food",
    average_rating: 4.0,
    costForTwo: 400,
  },
  {
    name: "Baskin Robbins",
    cusisines: "Ice Cream",
    average_rating: 4.8,
    costForTwo: 900,
  },
  {
    name: "Momos House",
    cusisines: "Fast Food",
    average_rating: 3.2,
    costForTwo: 220,
  },
  {
    name: "Frozen Bottle",
    cusisines: "Desserts",
    average_rating: 3.8,
    costForTwo: 1100,
  },
  {
    name: "Coal on Fire",
    cusisines: "Chinese",
    average_rating: 4.2,
    costForTwo: 800,
  },
  {
    name: "Hot Chips",
    cusisines: "North Indian",
    average_rating: 4.3,
    costForTwo: 600,
  },
];

function check(event) {
  const output = data.filter((el) => el.name.includes(event.key));
  console.log(output);
}

<input
          type="text"
          className="search"
          placeholder="Search here.."
          onKeyDown={(event) => {
            const searchData = topRating.filter((names) =>
              names.data.name.includes(event.key)
            );
            if (event.key === " ") {
              setTopRating(topRating);
            }
            setTopRating(searchData);
          }}
        />