import ActiveTheme from './components/ActiveTheme';
import AddTheme from './components/AddTheme/AddTheme';
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
  {
    name: "Everything",
    path: "everything",
    response: () => {
      return {
        body: ActiveTheme
      };
    },
  },
  {
    name: "Add Your Own",
    path: "add",
    response: () => {
      return {
        body: AddTheme
      };
    },
  },
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
