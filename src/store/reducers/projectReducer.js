const initState = {
  projects: [
    { id: "1", title: "helping in hard times", content: "blah blah blah" },
    { id: "2", title: "natural selection in play", content: "blah blah blah" },
    { id: "3", title: "egg hunting, the new life", content: "blah blah blah" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
