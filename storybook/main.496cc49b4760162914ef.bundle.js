(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{415:function(module,exports,__webpack_require__){__webpack_require__(416),__webpack_require__(573),module.exports=__webpack_require__(574)},472:function(module,exports){},501:function(module,exports){},521:function(module,exports){},574:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(44),__webpack_require__(29),__webpack_require__(24),__webpack_require__(45),__webpack_require__(35);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(152),req=__webpack_require__(876);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(575)(module))},876:function(module,exports,__webpack_require__){var map={"./index.stories.js":947};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=876},942:function(module,exports,__webpack_require__){var api=__webpack_require__(943),content=__webpack_require__(944);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(module.i,content,options),content.locals?content.locals:{});module.exports=exported},944:function(module,exports,__webpack_require__){(exports=__webpack_require__(945)(!1)).push([module.i,"@import url(https://fonts.googleapis.com/css?family=Assistant&display=swap);"]),exports.push([module.i,'.loader,.loader:before,.loader:after{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7 1.8s infinite ease-in-out;animation:load7 1.8s infinite ease-in-out}.loader{color:teal;font-size:10px;margin:1rem auto;margin-bottom:2rem;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s}.loader:before,.loader:after{content:\'\';position:absolute;top:0}.loader:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.loader:after{left:3.5em}@keyframes load7{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}#ocrcc-chatbox{font-family:"Assistant","Helvetica",sans-serif;display:flex;flex-direction:column;min-height:50vh;border:1px solid teal}#ocrcc-chatbox .message-window{background-color:#FFF8F0;flex:1 0 auto;padding:0.5rem;height:300px;max-height:100%;overflow:auto;display:flex;flex-direction:column-reverse}#ocrcc-chatbox .message .sender{font-weight:bold;color:teal}#ocrcc-chatbox .message .text{padding:0.5rem 0.75rem;margin-top:0.5rem;margin-bottom:0.5rem;width:fit-content}#ocrcc-chatbox .message.from-me{display:flex;justify-content:flex-end}#ocrcc-chatbox .message.from-me .text{background-color:teal;color:#fff;border-radius:15px 15px 0 15px;margin-left:10%}#ocrcc-chatbox .message.from-support{display:flex;justify-content:flex-start}#ocrcc-chatbox .message.from-support .text{background-color:#fff;color:#22333B;border:1px solid teal;border-radius:15px 15px 15px 0;margin-right:10%}#ocrcc-chatbox .input-window{flex:0 0 auto}#ocrcc-chatbox .input-window form{display:flex;align-items:center;margin-bottom:0;border-top:1px solid teal}#ocrcc-chatbox .input-window input[type="text"]{font-size:1rem;padding:0.5rem 1rem;border:none;flex:1 0 auto;border:none;color:#22333B;font-family:"Assistant","Helvetica",sans-serif}#ocrcc-chatbox .input-window input[type="text"]:focus{border:none}#ocrcc-chatbox .input-window input[type="submit"]{background-color:teal;height:100%;padding:0.5rem 1rem;font-size:1rem;color:#fff;font-weight:bold;border:none;font-family:"Assistant","Helvetica",sans-serif;cursor:pointer}@keyframes slideInUp{from{transform:translate3d(0, 100%, 0);display:inherit;visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideOutDown{from{transform:translate3d(0, 0, 0)}to{display:none;visibility:hidden;transform:translate3d(0, 100%, 0)}}.docked-widget{position:fixed;bottom:0px;right:10px;z-index:9999}.dock{cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;width:400px;max-width:calc(100vw - 10px);background:teal;color:#fff;font-family:"Assistant","Helvetica",sans-serif;font-size:1rem;border:none;color:#fff;font-size:1rem;line-height:1}.widget{width:400px;max-width:calc(100vw - 10px);border-bottom:none;animation-duration:0.2s;animation-fill-mode:forwards}.widget-entering{animation-name:slideInUp}.widget-entered{display:inherit;visibility:visible}.widget-exiting{animation-name:slideOutDown}.widget-exited{display:none;visibility:hidden}.widget-header{background:teal;color:#fff;padding:0.5rem 1rem;display:flex;align-items:center}.widget-header-title{display:flex;flex-grow:1}.widget-header-icon{cursor:pointer;display:flex;align-items:center;justify-content:center;background:transparent;border:none}.widget-body{background:white;padding:10px;height:150px}.widget-footer{background:green;line-height:30px;padding-left:10px}.arrow{transform:rotateX(0deg);transition:all 0.5s linear;color:#fff;font-size:1rem;line-height:1}.arrow.opened{transform:rotateX(180deg)}.arrow.closed{transform:rotateX(0deg) translateY(25%)}@media screen and (max-width: 400px){.docked-widget{right:0;left:0}.dock,.widget{max-width:100vw}}\n',""]),module.exports=exports},947:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),dist_client=__webpack_require__(152),classCallCheck=__webpack_require__(153),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__(154),createClass_default=__webpack_require__.n(createClass),possibleConstructorReturn=__webpack_require__(155),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__(156),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),assertThisInitialized=__webpack_require__(37),assertThisInitialized_default=__webpack_require__.n(assertThisInitialized),inherits=__webpack_require__(157),inherits_default=__webpack_require__.n(inherits),defineProperty=__webpack_require__(48),defineProperty_default=__webpack_require__.n(defineProperty),Transition=__webpack_require__(951),toConsumableArray=(__webpack_require__(23),__webpack_require__(92),__webpack_require__(53),__webpack_require__(414)),toConsumableArray_default=__webpack_require__.n(toConsumableArray),browser_index=(__webpack_require__(226),__webpack_require__(238)),uuidv4=__webpack_require__(158),Message=function(_ref){var message=_ref.message,user_id=_ref.user_id,fromMe=message.sender.userId===user_id;return react_default.a.createElement("div",{className:"message ".concat(fromMe?"from-me":"from-support")},react_default.a.createElement("div",{className:"text"},message.event.content.body))};Message.displayName="Message",Message.__docgenInfo={description:"",methods:[],displayName:"Message"};var components_message=Message;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/message.jsx"]={name:"Message",docgenInfo:Message.__docgenInfo,path:"src/components/message.jsx"});var MATRIX_SERVER_ADDRESS="https://matrix.rhok.space",FACILITATOR_USERNAME="@ocrcc-facilitator-demo:rhok.space",CHATROOM_NAME="Support Chat",chatbox_ref=react_default.a.createElement("div",{className:"loader"},"loading..."),_ref2=react_default.a.createElement("div",{className:"widget-header-title"},"Support Chat"),_ref3=react_default.a.createElement("input",{type:"submit",value:"Send"}),chatbox_ChatBox=function(_React$Component){function ChatBox(props){var _this;classCallCheck_default()(this,ChatBox),_this=possibleConstructorReturn_default()(this,getPrototypeOf_default()(ChatBox).call(this,props)),defineProperty_default()(assertThisInitialized_default()(_this),"leaveRoom",function(){_this.state.room_id&&_this.state.client.leave(_this.state.room_id).then(function(data){console.log("Left room",data)})}),defineProperty_default()(assertThisInitialized_default()(_this),"createRoom",function(){var currentDate=new Date,chatDate=currentDate.toLocaleDateString(),chatTime=currentDate.toLocaleTimeString();return _this.state.client.createRoom({room_alias_name:"private-support-chat-".concat(Object(uuidv4.uuid)()),invite:[FACILITATOR_USERNAME],visibility:"private",name:"".concat(chatDate," - ").concat(CHATROOM_NAME," - started at ").concat(chatTime)}).then(function(data){_this.setState({room_id:data.room_id})})}),defineProperty_default()(assertThisInitialized_default()(_this),"sendMessage",function(){var content={body:_this.state.inputValue,msgtype:"m.text"};_this.state.client.sendEvent(_this.state.room_id,"m.room.message",content,"").then(function(){_this.setState({inputValue:""}),_this.chatboxInput.current.focus()}).catch(function(err){console.log(err)})}),defineProperty_default()(assertThisInitialized_default()(_this),"handleInputChange",function(e){_this.setState({inputValue:e.currentTarget.value})}),defineProperty_default()(assertThisInitialized_default()(_this),"handleSubmit",function(e){return e.preventDefault(),_this.state.inputValue?_this.state.room_id?void _this.sendMessage():_this.createRoom().then(_this.sendMessage):null});var client=browser_index.createClient(MATRIX_SERVER_ADDRESS);return _this.state={client:client,ready:!1,rooms:{chunk:[]},access_token:null,user_id:null,messages:[],inputValue:""},_this.chatboxInput=react_default.a.createRef(),_this}return inherits_default()(ChatBox,_React$Component),createClass_default()(ChatBox,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;this.state.client.registerRequest({}).then(function(data){console.log("Empty registration request to get session",data)}).catch(function(err){var username=Object(uuidv4.uuid)(),password=Object(uuidv4.uuid)();_this2.state.client.registerRequest({auth:{session:err.data.session,type:"m.login.dummy"},inhibit_login:!1,password:password,username:username,x_show_msisdn:!0}).then(function(data){console.log("Registered user",data),_this2.setState({access_token:data.access_token,user_id:data.user_id,username:username,client:browser_index.createClient({baseUrl:MATRIX_SERVER_ADDRESS,accessToken:data.access_token,userId:data.user_id})}),_this2.state.client.setDisplayName("Anonymous")}).catch(function(err){console.log("Registration error",err)})})}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){var _this3=this;prevState.client!==this.state.client&&(this.state.client.startClient(),this.state.client.once("sync",function(state){"PREPARED"===state&&_this3.setState({ready:!0})}),this.state.client.on("Room.timeline",function(event){if("m.room.message"===event.getType()){var messages=toConsumableArray_default()(_this3.state.messages);messages.push(event),_this3.setState({messages:messages})}})),"entered"!==prevProps.status&&"entered"===this.props.status&&this.chatboxInput.current.focus()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.leaveRoom()}},{key:"render",value:function render(){var _this$state=this.state,ready=_this$state.ready,messages=_this$state.messages,inputValue=_this$state.inputValue,user_id=_this$state.user_id,_this$props=this.props,opened=_this$props.opened,handleToggleOpen=_this$props.handleToggleOpen;return ready?react_default.a.createElement("div",{id:"ocrcc-chatbox"},react_default.a.createElement("div",{className:"widget-header"},_ref2,react_default.a.createElement("button",{type:"button",className:"widget-header-icon",onClick:handleToggleOpen,onKeyPress:handleToggleOpen},react_default.a.createElement("span",{className:"arrow ".concat(opened?"opened":"closed")},"⌃"))),react_default.a.createElement("div",{className:"message-window"},react_default.a.createElement("div",{className:"messages"},messages.map(function(message){return react_default.a.createElement(components_message,{key:message.event.event_id,message:message,user_id:user_id})}))),react_default.a.createElement("div",{className:"input-window"},react_default.a.createElement("form",{onSubmit:this.handleSubmit},react_default.a.createElement("input",{type:"text",onChange:this.handleInputChange,value:inputValue,autoFocus:!0,ref:this.chatboxInput}),_ref3))):chatbox_ref}}]),ChatBox}(react_default.a.Component);chatbox_ChatBox.displayName="ChatBox",chatbox_ChatBox.propTypes={},chatbox_ChatBox.defaultProps={},chatbox_ChatBox.__docgenInfo={description:"",methods:[{name:"leaveRoom",docblock:null,modifiers:[],params:[],returns:null},{name:"createRoom",docblock:null,modifiers:[],params:[],returns:null},{name:"sendMessage",docblock:null,modifiers:[],params:[],returns:null},{name:"handleInputChange",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleSubmit",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"ChatBox"};var chatbox=chatbox_ChatBox;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/chatbox.jsx"]={name:"ChatBox",docgenInfo:chatbox_ChatBox.__docgenInfo,path:"src/components/chatbox.jsx"});__webpack_require__(942);var widget_ref=react_default.a.createElement("span",null,"Open support chat"),widget_Widget=function(_Component){function Widget(props){var _this;return classCallCheck_default()(this,Widget),_this=possibleConstructorReturn_default()(this,getPrototypeOf_default()(Widget).call(this,props)),defineProperty_default()(assertThisInitialized_default()(_this),"handleToggleOpen",function(){_this.setState(function(prev){var showDock=prev.showDock;return prev.opened||(showDock=!1),{showDock:showDock,opened:!prev.opened}})}),defineProperty_default()(assertThisInitialized_default()(_this),"handleWidgetExit",function(){_this.setState({showDock:!0})}),_this.state={opened:!1,showDock:!0},_this}return inherits_default()(Widget,_Component),createClass_default()(Widget,[{key:"render",value:function render(){var _this2=this,_this$state=this.state,opened=_this$state.opened,showDock=_this$state.showDock;return react_default.a.createElement("div",{className:"docked-widget"},react_default.a.createElement(Transition.a,{in:opened,timeout:250,onExited:this.handleWidgetExit},function(status){return react_default.a.createElement("div",{className:"widget widget-".concat(status)},react_default.a.createElement(chatbox,{handleToggleOpen:_this2.handleToggleOpen,opened:opened,status:status}))}),showDock&&react_default.a.createElement("button",{type:"button",className:"dock",onClick:this.handleToggleOpen,onKeyPress:this.handleToggleOpen},widget_ref,react_default.a.createElement("span",{className:"arrow ".concat(opened?"opened":"closed")},"⌃")))}}]),Widget}(react.Component);widget_Widget.displayName="Widget",widget_Widget.propTypes={},widget_Widget.defaultProps={},widget_Widget.__docgenInfo={description:"",methods:[{name:"handleToggleOpen",docblock:null,modifiers:[],params:[],returns:null},{name:"handleWidgetExit",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Widget"};var components_widget=widget_Widget;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/widget.js"]={name:"Widget",docgenInfo:widget_Widget.__docgenInfo,path:"src/components/widget.js"});var index_stories_ref=react_default.a.createElement(components_widget,null);Object(dist_client.storiesOf)("Widget").add("default",function(){return index_stories_ref})}},[[415,1,2]]]);
//# sourceMappingURL=main.496cc49b4760162914ef.bundle.js.map