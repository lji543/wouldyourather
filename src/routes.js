import ActiveTheme from './components/ActiveTheme';
// import AddQuestion from './components/AddQuestion';
// import AddTopic from './components/AddTopic';
// import Question from './components/Question';
// import Topic from './components/Topic';

import NotFound from './components/NotFound';


const routes = [
  {
    name: "Home",
    path: "",
    response: () => {
      return {
        body: ActiveTheme
      };
    },
  },
  {
    name: "Questions",
    path: "questions",
    response: () => {
      return {
        body: ActiveTheme
      };
    },
    // children: [
    //   {
    //     name: "Question",
    //     path: ":question",
    //     response: () => {
    //       return {
    //         body: Question
    //       };
    //     }
    //   },
    //   {
    //     name: "AddQuestion",
    //     path: ":addquestion",
    //     response: () => {
    //       return {
    //         body: AddQuestion
    //       };
    //     }
    //   }
    // ]
  },
  {
    name: "Topics",
    path: "topics",
    response: () => {
      return {
        body: ActiveTheme
      };
    },
  },
  // {
  //   name: "Question",
  //   path: "question",
  //   response: () => {
  //     return {
  //       body: Question
  //     };
  //   },
  //   children: [
  //     {
  //       name: "Method",
  //       path: ":method",
  //       response: () => {
  //         return {
  //           body: Method
  //         };
  //       }
  //     }
  //   ]
  // },
  {
    name: "NotFound",
    path: "(.*)",
    response: () => {
      return {
        body: NotFound
      };
    }
  }
];

export default routes;
