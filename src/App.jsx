import MyJSXPractice from "./01-JSX";
import { Rule1,Rule2,Rule3} from "./02-JSX";
import { User ,CurlyBraces} from "./03-JSX";
import { ConditionalDemo } from "./04-JSX";


function App() {
    return (
      <div>
        {/* <MyJSXPractice />
        <hr></hr>
        <Rule1/>
        <hr />
        <Rule2></Rule2>
        <hr />
        <Rule3></Rule3> */}
        <hr />
        <User></User>
        <hr />
        <CurlyBraces></CurlyBraces>
        <hr />
        <ConditionalDemo></ConditionalDemo>
      </div>
    );
  }

export default App;
