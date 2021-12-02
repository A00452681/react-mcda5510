import logo from './logo.svg';
import './App.css';
import Town from './components/Town'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <h1>About Me</h1>
      <AboutMe name="Silvi"  firstParagraph="I am Silvi Dheer and my email id is silvi.dheer@smu.ca. 
      I am from Pune, India. I love cycling, exploring new places and meeting new people from 
      various multi cultural background. I also love to cook various kind of dishes.
      I have also worked as a software professional with more than 10 years of experience into Java/J2ee."
       secondParagraph="I am currently pursuing MCDA program from Saint Mary's University. 
       I joined this program because I wanted to enhance my skills in statistics and Machine Learning; 
       capturing and analyzing real time data that drives key business decisions in the organisation.
       The other reason is it is always good to acquire a higher degree in your field."/>
      <h2>My Town</h2>
      <Town name="Halifax, NS" flagUrl = "https://www.railbookers.co.uk/sites/railbookers/files/styles/hero/public/images/halifax.jpg?h=5a5fc591&itok=MeX7Wn2y"/>
    </div>
  );
}

export default App;
