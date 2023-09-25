//import logo from './logo.svg'; //this is react logo 
import './App.css'; //importing files also we can rename it 
//import About from './components/About';
import Navbar from './components/Navbar'; //automatic import of component
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';


// let name="Harry";
// let name="<b>Harry</b>";
// if we want to involve external html it first shows literally as it is everything inside double quotes so to use external html we have to sanitize it first
// but this is a safety feature but not a bug but still if we want ot avoid it we can use 'react set inner html'
// this is used for not to create unrendered code but  This input would have been coming through the user as if someone had written it after that your component would be rendering So, you don't want any dangerous JavaScript to leave your page and get executed And then people have a problem

//Project name : TextUtils
function App() { //function based component library 
  const [mode, setMode] = useState('light'); //whether dark mode is enabled ot not
  const [alert, setAlert] = useState(null); //alert is object and setAlert is an object

  const showAlert = (message ,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }


  const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    // document.body.style.backgroundColor='#212529';
    // document.body.style.backgroundColor='grey';
    document.body.style.backgroundColor='#042743';
    showAlert(" Dark mode has been enabled","success");
    document.title='TextUtils - Dark Mode'; //we can use it as in title also we can make title blink by this we mostly use those to attract or show notifications like in facebook - instagram we get that we have new notif by this
    setInterval(()=>{
      document.title='TextUtils is amazing mode'; //give attention to that 2 titles or msgs should never overlap
    },2000);
     setInterval(()=>{
      document.title='Install TextUtils Now!!';
    },1500);

  }

  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has beeen enabled","success");
    document.title='TextUtils - Light Mode';
  }
  }
  return (
  <>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/>   */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
{/* <Alert alert="This is an alert!"/> */}
<Alert alert={alert}/>
<div className='container my-3'>
<TextForm showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode}/>
{/* <About/> */}

</div>
 {/* when we remove given values then default values appear whatever we had set up */}
 {/* this line makes component as complete as details make an empty form as complete */}
 {/* If I write title=textutils something like this So basically I am passing props for I want to pass it like a variable I want to use this component But keep some things which changes according to me in this component*/}
</> //add this jsx fragment if you want to add tag externally
); // we use parenthesis as JS use semi-colon at end of every line which would mess up jsx format it is by default though
} 

export default App;


//1) we use jsx so that we would be able to give unified form to all files and access them on one stage
//2) jsx use bootstrap mostly for it's own modification in same way using html tags and embedding JS keywords and we have to replace words in camel case too
//3) only one tag which is div is returned here if we write something odd then errors like we have to wrap all in one tag or asks for using jsx fragment
//4) like we want to insert heading then use <> and </> this is valid syntax check it out
//5) babel compiles it in proper JavaScript
//6) in request-response cycle--> javascript,html and css is different for each page here in multipage application but in single page application whole bundle of javascript,html and css is delivered and javascript takes control with the help of Api we will populate website and we can save bandwidth and performance is increased
//7) node modules folder is not given to anyone when we give someone an application as reciever can download it at any time so we put 'node-modules' folder in gitignore
//8) bootstrap is framework of CSS to insert UI components in our app and responsive by default
//9) 2 important things in the starter template so what is it? One thing is this, bootstrap bundle with proper we have to add this script where shall we add the script look, we have this understanding now. We have all our public files inside the public folder and one of them is the index.
//10) writing this JSX fragment has no corresponding tag --> errors are coming from Any such tag will be like this hr tag it is not closing so, any such tag which is not closing you will create it like this That is, opened from here it will be closed from here in this way similarly, if an img tag is attached which has no closing tag the img has no closing tag. If it is ending without / like this then here you have to end with / and in this way as well as if we talk about input You have to end the input like this too bootstrap guys don't understand this thing at all that someone will come up with this thing in react app And they don't understand everything But we have to do one thing and we have to replace the className by classNameName we have to do this thing too then I'll do ctrl+f I will replace className = with classNameName
//10.1) Also we replaced href="#" with href="/" for using react router  
//11) Keep warnings as minimal as possible don't ignore them totally
//12) 'npm run build' is used for professional aspects so this makes optimized version of our app
//13) '^' this sign in pachage.json in dependancies shows the version of dependancy
//14) also our credentials or password or secret things shouldn't be kept in public folder as it is really public on app also
//15) And start modifying in your way as you want like you can add or remove anything from bootstrap according to our liking!!*/}
//we can send anything as data or values like objects,boolean,etc. through our custom made component and it will render itself by using those values
//prop is short Of properties and we can add prop types also
//ES7 provides shortcut for codes for all components also if you are beginner don't remove comments when you download create-react-app read it at least once 
//There is no need to import react now Example if I write Imr Then I can import react but its not needed Because I am using function based component And I'm not using react in it So this is what we should know
//there is a concept of JavaScript Is of named export and Default export
//Default exports are useful for providing a single primary export and we can write anything in import file because by default it is gonna show whatever is going to export in ABC.mjs
//syntax for importing: import data from ABC.mjs './ABC.mjs' //where is data is data which is going to import or export
//syntax for exporting: export default data; (data here is variable whose value is going to display)

//named exports allow us to export multiple values from a javascript module.
//syntax for importing: import {data1,data2,data3} from ABC.mjs './ABC.mjs' //where is data is data which is going to import or export
//syntax for exporting: export data; (data here is variable whose value is going to display)
//here we can't change data variables and it must have to be accurate
//all folder or file names in src should be starting with capital letter
// we can use {Network: http://192.168.0.106:3000} this network web address to access this anywhere

//In angular js routing is by default but in react we have to install router using react-router-dom also it is used for instead of carrying whole website just replace a particular content or container as per requirement