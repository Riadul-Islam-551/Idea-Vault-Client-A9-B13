// "use client";
// import React, { useState } from "react";
// import IdeaCard from "./IdeaCard";
// import BulbAnimation from "./BulbAnimation";
// import { Input } from "@heroui/react";
// import { Label, ListBox, Select } from "@heroui/react";

// const IdeasContainer = ({ ideas }) => {
//   const [searchIdea, setSearchIdea] = useState("");

//   const filteredIdeas = ideas.filter((idea) =>
//     idea.title.toLowerCase().includes(searchIdea.toLowerCase()),
//   );
//   return (
//     <div>
//       <div>
//         <Input
//           aria-label="Search"
//           className="w-full bg-base-300 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-6 "
//           placeholder="Search ideas..."
//           value={searchIdea}
//           onChange={(e) => setSearchIdea(e.target.value)}
//         />
//       </div>
//       <div>
//         <Select className="w-[256px]" placeholder="All">
//           <Label>Category</Label>
//           <Select.Trigger>
//             <Select.Value />
//             <Select.Indicator />
//           </Select.Trigger>
//           <Select.Popover>
//             <ListBox>
//               <ListBox.Item id="florida" textValue="Florida">
//                 Florida
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>
//               <ListBox.Item id="delaware" textValue="Delaware">
//                 Delaware
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>
//               <ListBox.Item id="california" textValue="California">
//                 California
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>
//               <ListBox.Item id="texas" textValue="Texas">
//                 Texas
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>
//               <ListBox.Item id="new-york" textValue="New York">
//                 New York
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>
//               <ListBox.Item id="washington" textValue="Washington">
//                 Washington
//                 <ListBox.ItemIndicator />
//               </ListBox.Item>
//             </ListBox>
//           </Select.Popover>
//         </Select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
//         {filteredIdeas.length > 0 ? (
//           filteredIdeas.map((idea) => <IdeaCard key={idea._id} idea={idea} />)
//         ) : (
//           <div className="min-h-75 col-span-full my-6  flex flex-col items-center justify-center gap-4  border border-gray-300 rounded-2xl ">
//             <BulbAnimation></BulbAnimation>
//             <p className="text-center  text-gray-500">No ideas found.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IdeasContainer;

"use client";

import React, { useState } from "react";
import IdeaCard from "./IdeaCard";
import BulbAnimation from "./BulbAnimation";
import { Input } from "@heroui/react";
import { Label, ListBox, Select } from "@heroui/react";

const IdeasContainer = ({ ideas }) => {
  const [searchIdea, setSearchIdea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories dynamically from ideas
  const categories = ["All", ...new Set(ideas.map((idea) => idea.category))];

  // Filter ideas by search + category
  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch = idea.title
      .toLowerCase()
      .includes(searchIdea.toLowerCase());

    // const matchesCategory =
    //   selectedCategory === "All" || idea.category === selectedCategory;

    const matchesCategory =
      selectedCategory === "All" ||
      idea.category?.toLowerCase() === selectedCategory?.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  console.log("selectedCategory", selectedCategory);
  console.log("idea", ideas);
  return (
    <div>
      <div className="flex justify-center items-center gap-4 ">
        {/* Search Input */}
        <div className="w-full">
          <p className="mb-1">Search by Title</p>
          <Input
            aria-label="Search"
            className="w-full bg-gray-100 dark:bg-[#212121] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-6"
            placeholder="Search ideas..."
            value={searchIdea}
            onChange={(e) => setSearchIdea(e.target.value)}
          />
        </div>

        {/* Category Select */}
        <div className="w-full ">
          <p className="mb-1">Search by Category</p>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select w-full bg-gray-100 dark:bg-[#212121] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-6"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch mb-12 ">
        {filteredIdeas.length > 0 ? (
          filteredIdeas.map((idea) => <IdeaCard key={idea._id} idea={idea} />)
        ) : (
          <div className="min-h-75 col-span-full my-6 flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-2xl">
            <BulbAnimation />
            <p className="text-center text-gray-500">No ideas found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeasContainer;

// "use client";

// import React, { useState } from "react";
// import IdeaCard from "./IdeaCard";
// import BulbAnimation from "./BulbAnimation";
// import { Input } from "@heroui/react";
// import { Label, ListBox, Select } from "@heroui/react";

// const categories = ["All", "Tech", "Health", "AI", "Education"];

// const IdeasContainer = ({ ideas }) => {
//   const [searchIdea, setSearchIdea] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Filter by title + category
//   const filteredIdeas = ideas.filter((idea) => {
//     const matchesSearch = idea.title
//       .toLowerCase()
//       .includes(searchIdea.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" ? true : idea.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div>
//       {/* Search + Category Filter */}
//       <div className="flex flex-col md:flex-row gap-4 mb-8">
//         {/* Search Input */}
//         <Input
//           aria-label="Search"
//           placeholder="Search ideas..."
//           value={searchIdea}
//           onChange={(e) => setSearchIdea(e.target.value)}
//           className="w-full"
//         />

//         {/* Category Buttons */}
//         {/* <div className="flex flex-wrap gap-3">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
//                 selectedCategory === category
//                   ? "bg-orange-500 text-white border-orange-500"
//                   : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div> */}

//         <div>
//           <Select className="w-[256px]" placeholder="All">
//             <Label>State</Label>
//             <Select.Trigger>
//               <Select.Value />
//               <Select.Indicator />
//             </Select.Trigger>
//             <Select.Popover>
//               <ListBox>
//                 <ListBox.Item id="florida" textValue="Florida">
//                   Tech
//                   <ListBox.ItemIndicator />
//                 </ListBox.Item>
//                 <ListBox.Item id="delaware" textValue="Delaware">
//                   Health
//                   <ListBox.ItemIndicator />
//                 </ListBox.Item>
//                 <ListBox.Item id="california" textValue="California">
//                   AI
//                   <ListBox.ItemIndicator />
//                 </ListBox.Item>
//                 <ListBox.Item id="texas" textValue="Texas">
//                   Education
//                   <ListBox.ItemIndicator />
//                 </ListBox.Item>
//               </ListBox>
//             </Select.Popover>
//           </Select>
//         </div>
//       </div>

//       {/* Ideas Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
//         {filteredIdeas.length > 0 ? (
//           filteredIdeas.map((idea) => <IdeaCard key={idea._id} idea={idea} />)
//         ) : (
//           <div className="min-h-75 col-span-full my-6 flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-2xl">
//             <BulbAnimation />
//             <p className="text-center text-gray-500">No ideas found.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IdeasContainer;

// "use client";

// import React, { useState } from "react";
// import IdeaCard from "./IdeaCard";
// import BulbAnimation from "./BulbAnimation";
// import { Input, Select, SelectItem, ListBox } from "@heroui/react";

// const categories = ["All", "Tech", "Health", "AI", "Education"];
// const IdeasContainer = ({ ideas }) => {
//   const [searchIdea, setSearchIdea] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Filter ideas
//   const filteredIdeas = ideas.filter((idea) => {
//     const matchesSearch = idea.title
//       .toLowerCase()
//       .includes(searchIdea.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" ? true : idea.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div>
//       {/* Search + Category */}
//       <div className="flex flex-col md:flex-row gap-4 mb-8">
//         {/* Search */}
//         <Input
//           aria-label="Search"
//           placeholder="Search ideas..."
//           value={searchIdea}
//           onChange={(e) => setSearchIdea(e.target.value)}
//           className="w-full"
//         />

//         {/* Category Select */}
//         <Select
//           className="w-[256px]"
//           selectedKeys={[selectedCategory]}
//           onSelectionChange={(keys) => {
//             const value = Array.from(keys)[0];
//             setSelectedCategory(value);
//           }}
//           placeholder="Select category"
//         >
//           {categories.map((category) => (
//             <div key={category}>{category}</div>
//           ))}
//         </Select>
//       </div>

//       {/* Ideas Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
//         {filteredIdeas.length > 0 ? (
//           filteredIdeas.map((idea) => <IdeaCard key={idea._id} idea={idea} />)
//         ) : (
//           <div className="min-h-75 col-span-full my-6 flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-2xl">
//             <BulbAnimation />
//             <p className="text-center text-gray-500">No ideas found.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IdeasContainer;
