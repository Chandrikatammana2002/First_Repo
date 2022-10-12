import React,{useState} from "react";
import Sidebar from "./Sidebar";
import '../styles.css';
import Example from "./Example";
const Main = () => {
  const [st,newst]=useState(false);
 
    return (

      <div>

        <div className="article">
            <p className="container">
              <p id="intro"></p>
               <h2>React useState Hook</h2>
               <p><strong>What is a Hook?</strong></p>
               <p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
               <p>There are 3 rules for hooks:</p>
               <ul>
                <li>Hooks can only be called inside React function components.</li>
                <li>Hooks can only be called at the top level of a component.</li>
                <li>Hooks cannot be conditional</li>
               </ul>
               <p> Seven Hooks in React </p>
               <ol>
                <li>useState Hook</li>
                <li>useEffect Hook</li>
                <li>useRef Hook</li>
                <li>useCallback Hook</li>
                <li>useMemo Hook</li>
                <li>useContext Hook</li>
                <li>useReducer Hook</li>
               </ol>
               <p ><strong>Note: </strong>Hooks will not work in React class components.</p>
               <p id="usestate"></p>
               <h3>useState Hook</h3>
               <p>The React <label>useState</label> Hook allows us to track state in a function component.</p>
               <p>State generally refers to data or properties that need to be tracking in an application.</p>
               <p id="import"></p>
               <p><strong>Importing useState</strong></p>
               <p className="ex">import &#123;useState&#125; from "react";</p>
               <p id="init"></p>
               <h4>Initialize useState</h4>
               <p>We initialize our state by calling useState in our function component.</p>
               <p>useState accepts an initial state and returns two values:</p>
               <ul>
                 <li>The current state.</li>
                 <li>A function that updates the state.</li>
               </ul>
               
               <p><strong>Example on Initialize useState</strong></p>
              
               <p className="ex">
                import &#123;useState&#125; from "react";<br/><br/>
                function Example() &#123; <br />
                 &nbsp; const [count, setCount] = useState(0);<br/>
                 &#125;
               </p>
               <p>The first value, count, is our current state.</p>
               <p>The second value, setCount, is the function that is used to update our state.</p>
               <p>we set the initial state to an empty string: useState(0)</p>
               <p id="prgm"></p>
               <p><strong>Example on  useState</strong></p>
                <p className="ex">
                import &#123;useState&#125; from "react";<br/><br/>
                function Example() &#123; <br />
                 &nbsp; const [count, setCount] = useState(0);<br/>
                 &nbsp;&nbsp;return (<br/>
                 &nbsp; &lt;div&gt;<br/>
                 &nbsp; &nbsp; &lt;p&gt;You clicked &lt;count&gt; times &lt;/p&gt;<br/>
                 &nbsp; &nbsp; &lt;button onClick=&#123;()=&gt;setCount(count+1)&#125;&gt;<br/>
                 &nbsp; &nbsp; &nbsp; &nbsp; Click Me <br/>
                 &nbsp; &nbsp; &lt;button/&gt;<br/>
                 &nbsp; &nbsp; );
                 <br/>&#125;<br/>
                 export default Example;
                </p>
                <button className="bu" onClick={()=>newst(true)}>Run</button><br/><br/>
                {st ? <Example /> : null} 
            </p>
           
        </div>

        <Sidebar />
      </div>
    )
};

export default Main;