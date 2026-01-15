import "react";
import Welcome from "./Welcome";
import Quote from "./Quote";
import StudentInfo from "./StudentInfo";
import CourseCard from "./CourseCard";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <StudentInfo />
      <Welcome />
      <Quote />
      <CourseCard />
      <Footer />
    </>
  );
}

export default App;
