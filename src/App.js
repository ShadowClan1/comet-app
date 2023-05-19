import logo from './logo.svg';
import './App.css';
import { CometChat } from "@cometchat-pro/chat";
import {CometChatUI} from './cometchat-pro-react-ui-kit/CometChatWorkspace/src/components'

const appID = "239513fc89ba54ac";
const authKey = "747d54375ea0050aaffdd3fc0a5533251a60facf";
const region = "us";
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  } 
);

const uid = 'user1'
const name = 'krishna'
//create user
// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//     user => {
//         console.log("user created", user);
//     },error => {
//         console.log("error", error);
//     }
// )

CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user });    
  },
  error => {
    console.log("Login failed with exception:", { error });    
  }
);




function App() {
  return (
    <div className="" style={{width : '100vw' , height : '100vh'}}>
    <CometChatUI />
    </div>
  );
}

export default App;
