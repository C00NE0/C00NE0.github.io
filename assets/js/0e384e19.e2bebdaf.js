"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={},o="Neor_mini Ackerman Mobile Base",l={unversionedId:"intro",id:"intro",title:"Neor_mini Ackerman Mobile Base",description:"\u5e73\u53f0\u8981\u6c42\uff08Platform\uff09:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},s={},p=[{value:"Contents:",id:"contents",level:2},{value:"1.Neor mini Simulation Tutorials (neor_mini \u5168\u5957\u4eff\u771f\u6559\u7a0b)",id:"1neor-mini-simulation-tutorials-neor_mini-\u5168\u5957\u4eff\u771f\u6559\u7a0b",level:4},{value:"2.Raspberry Pi camera calibration (\u6811\u8393\u6d3e\u6444\u50cf\u5934\u6821\u51c6)",id:"2raspberry-pi-camera-calibration-\u6811\u8393\u6d3e\u6444\u50cf\u5934\u6821\u51c6",level:4},{value:"3.Raspberry Pi camera recognition and ranging (\u6811\u8393\u6d3e\u5355\u76ee\u6444\u50cf\u5934\u76ee\u6807\u68c0\u6d4b\u4e0e\u6d4b\u8ddd)",id:"3raspberry-pi-camera-recognition-and-ranging-\u6811\u8393\u6d3e\u5355\u76ee\u6444\u50cf\u5934\u76ee\u6807\u68c0\u6d4b\u4e0e\u6d4b\u8ddd",level:4},{value:"4.Neor_min_ROS_Tutorials (neor_mini ROS \u5165\u95e8\u53ca\u8fdb\u9636\u6559\u7a0b)",id:"4neor_min_ros_tutorials-neor_mini-ros-\u5165\u95e8\u53ca\u8fdb\u9636\u6559\u7a0b",level:4},{value:"Chapter 1: Make a indoor autonomous mobile robot",id:"chapter-1-make-a-indoor-autonomous-mobile-robot",level:2},{value:"Corresponding WeChat article",id:"corresponding-wechat-article",level:3},{value:"if   &quot;catkin_make &quot;  error,please install the dependencey of lego_loam(See chapter 3) and lio_sam(See chapter 8). or remove  LeGO-LOAM &amp;&amp; lio_sam folder.",id:"if---catkin_make---errorplease-install-the-dependencey-of-lego_loamsee-chapter-3-and-lio_samsee-chapter-8-or-remove--lego-loam--lio_sam-folder",level:3},{value:"Chapter 2: Make a outdoor line-tracking mobile robot",id:"chapter-2-make-a-outdoor-line-tracking-mobile-robot",level:2},{value:"Corresponding WeChat article",id:"corresponding-wechat-article-1",level:3},{value:"Chapter 3: Velodyne-16 &amp;&amp; Lego_LOAM 3D Mapping",id:"chapter-3-velodyne-16--lego_loam-3d-mapping",level:2},{value:"Corresponding WeChat article",id:"corresponding-wechat-article-2",level:3},{value:"Lego_loam url:  https://github.com/RobustFieldAutonomyLab/LeGO-LOAM",id:"lego_loam-url--httpsgithubcomrobustfieldautonomylablego-loam",level:3},{value:"install gtsam(Georgia Tech Smoothing and Mapping library, 4.0.0-alpha2)",id:"install-gtsamgeorgia-tech-smoothing-and-mapping-library-400-alpha2",level:3},{value:"Chapter 4:  Simulation of Automatic Obstacle Avoidance Based on Three-channel Ultrasonic",id:"chapter-4--simulation-of-automatic-obstacle-avoidance-based-on-three-channel-ultrasonic",level:2},{value:"Corresponding WeChat article",id:"corresponding-wechat-article-3",level:3},{value:"Chapter 5:  Send the Goal to navigation through the ROS node",id:"chapter-5--send-the-goal-to-navigation-through-the-ros-node",level:2},{value:"Corresponding WeChat article",id:"corresponding-wechat-article-4",level:3},{value:"Chapter 6: Hector_mapping",id:"chapter-6-hector_mapping",level:2},{value:"Chapter 7: rf2o_laser_odometry &amp;&amp; gmapping",id:"chapter-7-rf2o_laser_odometry--gmapping",level:2},{value:"Chapter 8:  Velodyne-16 &amp;&amp; lio_sam 3D Mappig",id:"chapter-8--velodyne-16--lio_sam-3d-mappig",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"neor_mini-ackerman-mobile-base"},"Neor_mini Ackerman Mobile Base"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_U.jpeg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5e73\u53f0\u8981\u6c42\uff08Platform\uff09"),":\n",(0,i.kt)("strong",{parentName:"p"},"Ubuntu 18.04 + ros-melodic-desktop-full"),"\n",(0,i.kt)("strong",{parentName:"p"},"\u67d0\u4e9b\u7ae0\u8282\u7684\u5e94\u7528\u53ef\u80fd\u5bf9\u7535\u8111\u7684\u6027\u80fd\u8981\u6c42\u8f83\u9ad8"),"\uff08Some chapters may require a computer with sufficient computing power.\uff09"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5206\u652f\u8bf4\u660e"),"\uff1a\n",(0,i.kt)("strong",{parentName:"p"},"foxy"),": ROS2 \u7248\u672c\u7684 Gazebo \u4eff\u771f\uff0c\u5df2\u7ecf\u505a\u597d\u5bf9\u5e94\u7684ROS\u9a71\u52a8\uff0c\u53c2\u7167\u5bf9\u5e94ReadMe \u6587\u4ef6\u5373\u53ef\u8fd0\u884c\u3002\u540e\u7eed\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u4f1a\u9646\u7eed\u63a8\u51fa\u65b0\u529f\u80fd\uff1b\n",(0,i.kt)("strong",{parentName:"p"},"Melodic"),": ROS1 \u7248\u672c\u7684 Gazebo \u4eff\u771f\uff0c\u662f\u76ee\u524d\u6700\u5b8c\u6574\u3001\u76f8\u5173\u8d44\u6599\u6700\u5b8c\u5584\u7684\u5206\u652f\uff0c\u6bcf\u4e00\u4e2a chapter \u90fd\u6709\u4e00\u7bc7\u5fae\u4fe1\u63a8\u6587\u6216\u8005\u77e5\u4e4e\u535a\u5ba2\uff1b\n",(0,i.kt)("strong",{parentName:"p"},"Kinetic"),": \u591a\u5e74\u524d\u7684\u840c\u82bd\u7248\u672c\uff0c\u4e0d\u518d\u63d0\u4f9b\u652f\u6301\uff0c\u671b\u7406\u89e3\u3002"),(0,i.kt)("p",null,"\u200b    ",(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/ROS_VERSION.png",alt:null})),(0,i.kt)("p",null,"zhaoxiangli 2022.07.08"),(0,i.kt)("h2",{id:"contents"},"Contents:"),(0,i.kt)("h4",{id:"1neor-mini-simulation-tutorials-neor_mini-\u5168\u5957\u4eff\u771f\u6559\u7a0b"},"1.Neor mini Simulation Tutorials (neor_mini \u5168\u5957\u4eff\u771f\u6559\u7a0b)"),(0,i.kt)("p",null,"\u200b\t\tChapter 1: Make a indoor autonomous mobile robot."),(0,i.kt)("p",null,"\u200b\t\tChapter 2: Make a outdoor line-tracking mobile robot."),(0,i.kt)("p",null,"\u200b\t\tChapter 3: Velodyne-16 && Lego_LOAM 3D Mapping. \t\t"),(0,i.kt)("p",null,"\u200b\t    Chapter 4:  Simulation of Automatic Obstacle Avoidance Based on Three-channel Ultrasonic.\t\t\t\t"),(0,i.kt)("p",null,"\u200b\t\tChapter 5:  Send the Goal to navigation through the ROS node (C++ && Python)."),(0,i.kt)("p",null,"\u200b\t\tChapter 6: Hector_mapping "),(0,i.kt)("p",null,"\u200b\t\tChapter 7: rf2o_laser_odometry && gmapping"),(0,i.kt)("p",null,"\u200b\t\tChapter 8: Velodyne-16 && lio_sam 3D Mappig"),(0,i.kt)("p",null,"Related folders\uff08\u76f8\u5173\u76ee\u5f55\uff09:"),(0,i.kt)("p",null,"\u200b\t\t",(0,i.kt)("strong",{parentName:"p"},"mini_sim18_ws && original_neor_mini")),(0,i.kt)("p",null,"\u200b\t\t\t\t"),(0,i.kt)("h4",{id:"2raspberry-pi-camera-calibration-\u6811\u8393\u6d3e\u6444\u50cf\u5934\u6821\u51c6"},"2.Raspberry Pi camera calibration (\u6811\u8393\u6d3e\u6444\u50cf\u5934\u6821\u51c6)"),(0,i.kt)("p",null,"\u200b\tRelated folders\uff08\u76f8\u5173\u76ee\u5f55\uff09:"),(0,i.kt)("p",null,"\u200b\t\t",(0,i.kt)("strong",{parentName:"p"},"calib_camera")),(0,i.kt)("p",null,"\u200b\t"),(0,i.kt)("h4",{id:"3raspberry-pi-camera-recognition-and-ranging-\u6811\u8393\u6d3e\u5355\u76ee\u6444\u50cf\u5934\u76ee\u6807\u68c0\u6d4b\u4e0e\u6d4b\u8ddd"},"3.Raspberry Pi camera recognition and ranging (\u6811\u8393\u6d3e\u5355\u76ee\u6444\u50cf\u5934\u76ee\u6807\u68c0\u6d4b\u4e0e\u6d4b\u8ddd)"),(0,i.kt)("p",null,"\u200b\tRelated folders\uff08\u76f8\u5173\u76ee\u5f55\uff09:\t\t"),(0,i.kt)("p",null,"\u200b\t\t",(0,i.kt)("strong",{parentName:"p"},"Object",(0,i.kt)("em",{parentName:"strong"},"detection "),"&&_ Distence")),(0,i.kt)("h4",{id:"4neor_min_ros_tutorials-neor_mini-ros-\u5165\u95e8\u53ca\u8fdb\u9636\u6559\u7a0b"},"4.Neor_min_ROS_Tutorials (neor_mini ROS \u5165\u95e8\u53ca\u8fdb\u9636\u6559\u7a0b)"),(0,i.kt)("p",null,"\u200b\tRelated folders\uff08\u76f8\u5173\u76ee\u5f55\uff09:\t\t"),(0,i.kt)("p",null,"\u200b\t\t",(0,i.kt)("strong",{parentName:"p"},"Neor_min_ROS_Tutorials")),(0,i.kt)("h2",{id:"chapter-1-make-a-indoor-autonomous-mobile-robot"},"Chapter 1: Make a indoor autonomous mobile robot"),(0,i.kt)("h3",{id:"corresponding-wechat-article"},"Corresponding WeChat article"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/01_title.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_gazebo.png",alt:null})),(0,i.kt)("p",null,"Developing Environments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ubuntu 18.04 + ROS Melodic desktop full \n")),(0,i.kt)("p",null,"Explaination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mini_sim18_ws                               #   this folder is ROS Workspace, you can run launchs and look at every demo.\noriginal_neor_mini                       #    this folder is an original neor_mini urdf file, you can construction by yourself \npictures                                              #    the total process pictures\n")),(0,i.kt)("p",null,"Neor mini Simulation in Gazebo with ROS, Follow below steps:"),(0,i.kt)("p",null,"Step 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open your Terminal\ngit clone https://github.com/COONEO/neor_mini.git\ncd neor_mini/mini_sim18_ws\nrosdep install --from-paths src --ignore-src -r -y     # you need wait a moment\n\n# first see the below tips .\ncatkin_make                              # if failed,please retry again and again\n")),(0,i.kt)("h3",{id:"if---catkin_make---errorplease-install-the-dependencey-of-lego_loamsee-chapter-3-and-lio_samsee-chapter-8-or-remove--lego-loam--lio_sam-folder"},'if   "catkin_make "  error,please install the dependencey of lego_loam(See chapter 3) and lio_sam(See chapter 8). or remove  LeGO-LOAM && lio_sam folder.'),(0,i.kt)("p",null,"You can see 5 ROS packages in mini_sim18_ws/src folder,lists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"neor_mini                           # Storing the description of neor mini's appearance with urdf file\nsteer_drive_ros                # Ackermann kinematics ROS plugins\nsteer_mini_gazebo         # Storing the launch files of neor mini model visual in Gazebo\nmini_gmapping                # Storing the launch files and gmapping params files\nmini_navigation               # Storing the launch file and navigation params files\n")),(0,i.kt)("p",null,"Step 2: launch neor_mini's launch file, visualize the urdf in Rviz."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# show the neor_mini.urdf in Rviz\ncd ~/neor_mini/mini_sim18_ws\nsource devel/setup.bash\nroslaunch neor_mini display.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_rviz.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#show the neor_mini_gazebo_sensors.urdf in Rviz\ncd ~/neor_mini/mini_sim18_ws\nsource devel/setup.bash\nroslaunch neor_mini display_gazebo_sensors.launch\n")),(0,i.kt)("img",{src:"pictures/neor_mini_gazebo_sensors.png"}),(0,i.kt)("p",null,"Step 3: launch steer_mini_gazebo's launch file. visualize the urdf in Gazebo and try to control neor_mini ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#show the neor_mini_gazebo.urdf in Gazebo\ncd ~/neor_mini/mini_sim18_ws\nsource devel/setup.bash\nroslaunch steer_mini_gazebo steer_mini_sim.launch\n")),(0,i.kt)("p",null,"![](",(0,i.kt)("a",{parentName:"p",href:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/visual"},"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/visual")," neor_mini_gazebo.png)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#show the neor_mini_gazebo_sensors.urdf in Gazebo\ncd ~/neor_mini/mini_sim18_ws\nsource devel/setup.bash\nroslaunch steer_mini_gazebo steer_mini_sim_sensors.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_sensors_gazebo.png",alt:null})),(0,i.kt)("p",null,"Step 4 : Gmapping with neor_mini urdf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# launch gmapping_steer_mini_sim.launch file and construction map\ncd ~/neor_mini/mini_sim18_ws\nsource devel/setup.bash\nroslaunch mini_gmapping gmapping_steer_mini_sensors.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/gmapping_neor_mini.png",alt:null})),(0,i.kt)("p",null,"When you think the construction map is finished, Open a new terminal, you can run the below command to save the map."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/neor_mini/mini_sim18_ws/\nsource devel/setup.bash\ncd src/mini_gmapping/map\nrosrun map_server map_saver -f cooneo_office_map      # You can saved as another name\n")),(0,i.kt)("p",null,"Step 5 : Using cooneo_office_map to make a navigation demo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/neor_mini/mini_sim18_ws/\nsource devel/setup.bash\nroslaunch mini_navigation navigation_steer_mini_sensors.launch                           # start a navigation demo\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/navigation_Demo.png",alt:null})),(0,i.kt)("p",null,'When you run up the list launch file, your monitor will show two windows, one is Rviz, another is Gazebo. looking at the rviz window up toolbar, you need to click "2D Nav Goal", and select a navigation goal on the map, soon the neor_mini model car will plan a route, and arrived.'),(0,i.kt)("h2",{id:"chapter-2-make-a-outdoor-line-tracking-mobile-robot"},"Chapter 2: Make a outdoor line-tracking mobile robot"),(0,i.kt)("h3",{id:"corresponding-wechat-article-1"},"Corresponding WeChat article"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/02_title.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/new_neor_mini.png",alt:null})),(0,i.kt)("p",null,"step 1 : Copy Gazebo-world from neor_mini_linetrack/models folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a Terminal\ncp -r ~/neor_mini/mini_sim18_ws/src/neor_mini_linetrack/models/* ~/.gazebo/models/\n")),(0,i.kt)("p",null,"and you will see four new folder in your ./gazebo/models folder as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/folder_list.png",alt:null})),(0,i.kt)("p",null,"Step 2 : launch neor_mini_linetrack package launch file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a Terminal \ncd ~/neor_mini/mini_sim18_ws/\ncatkin_make                                                         # compile you all ros node in you workspace\nsource devel/setup.bash\nroslaunch neor_mini_linetrack neor_mini_linetrack_day.launch\n")),(0,i.kt)("p",null,"and you will see:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/gazebo_start_success.png",alt:null})),(0,i.kt)("p",null,"Step 3: rosrun line-tracking python node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a Terminal\ncd ~/neor_mini/mini_sim18_ws/\nsource devel/setup.bash\n\n# may need to add permission to .py file\nsudo chmod +x src/neor_mini_linetrack/scripts/line_follower_object.py       # same as hsv_color_select.py file\nrosrun neor_mini_linetrack line_follower_object.py\n")),(0,i.kt)("p",null,"and you will see four new windows ,it's like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/line-tracking_start_success.png",alt:null})),(0,i.kt)("p",null,"Congratulations!!! you will see the neor_mini urdf model running automatically using the data from the camera. "),(0,i.kt)("p",null,"Ps. select your own hsv color "),(0,i.kt)("p",null,"When your running result is different from the above, you can select the hsv color range suitable for you."),(0,i.kt)("h2",{id:"chapter-3-velodyne-16--lego_loam-3d-mapping"},"Chapter 3: Velodyne-16 && Lego_LOAM 3D Mapping"),(0,i.kt)("h3",{id:"corresponding-wechat-article-2"},"Corresponding WeChat article"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/03_title.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/face_img.png",alt:null})),(0,i.kt)("h3",{id:"lego_loam-url--httpsgithubcomrobustfieldautonomylablego-loam"},"Lego_loam url:  ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/RobustFieldAutonomyLab/LeGO-LOAM"},"https://github.com/RobustFieldAutonomyLab/LeGO-LOAM")),(0,i.kt)("h3",{id:"install-gtsamgeorgia-tech-smoothing-and-mapping-library-400-alpha2"},"install gtsam(Georgia Tech Smoothing and Mapping library, 4.0.0-alpha2)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#open a Terminal.\nwget -O ~/Downloads/gtsam.zip https://github.com/borglab/gtsam/archive/4.0.0-alpha2.zip\ncd ~/Downloads/ && unzip gtsam.zip -d ~/Downloads/\ncd ~/Downloads/gtsam-4.0.0-alpha2/\nmkdir build && cd build\ncmake ..\nsudo make install\n\n# copy the libmetis.so library into /usr/lib/ folder.   !!!!!!!\nsudo cp /usr/local/lib/libmetis.so /usr/lib\n")),(0,i.kt)("p",null,"Step 1: launch velodyne_simulator ROS package,and you will see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a Terminal\ncd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash\n\n# launch VLP-16\nroslaunch velodyne_description velodyne_16.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/velodyne_16.png",alt:null})),(0,i.kt)("p",null,"Step 2: Install the Velodyne-16 on the neor_mini"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a Terminal\ncd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash\n\n# start launch file and see neor_mini + vlp-16 in Rviz\nroslaunch neor_mini display_gazebo_sensors_VLP16.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_vlp16_rviz.png",alt:null})),(0,i.kt)("p",null,"Step 3: launch the neor_mini+vlp16 model in Gazebo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a Terminal and add the museum model world into Gazebo's model folder\ncp -r ~/neor_mini/mini_sim18_ws/src/neor_mini/models/* ~/.gazebo/models/\n\n# open a Terminal\ncd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash\n\n# start launch file and see neor_mini + vlp-16 in Gazebo\nroslaunch steer_mini_gazebo steer_mini_sim_sensors_VLP16.launch \n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_vlp16_Gazebo.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(Gazebo from: iscas_museum.world )")),(0,i.kt)("p",null,"Step 4: Record the data collected by VLP-16 in Gazebo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a Terminal\ncd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash\nroslaunch steer_mini_gazebo steer_mini_sim_sensors_VLP16.launch \n\n# open another Terminal and record VLP-16 data By rosbag\ncd ~/neor_mini/mini_sim18_ws/     \nrosbag record -a\n\n# and then, control the neor_mini traverses the iscas_museum world\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/record_data_demo.gif",alt:null})),(0,i.kt)("p",null,"Step 5: Play the Record data && Mapping by Lego_Loam"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# open a Terminal\ncd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash\n roslaunch lego_loam run.launch \n \n # open another Terminal and "cd" in your bag file folder\n cd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash\nrosbag play  ####.bag         # replace with your own or current bag file\'s name\n\n# and then,you will see mapping by Leog_loam\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/lego_loam_record_data.gif",alt:null})),(0,i.kt)("p",null,"Congratulations!!! You can run Velodyne-16 Lidar in Gazebo with neor_mini and Mapping by Lego_Loam. "),(0,i.kt)("p",null,"The Lego_loam ROS Package from The RobustFieldAutonomyLab."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"@inproceedings{legoloam2018,\n  title={LeGO-LOAM: Lightweight and Ground-Optimized Lidar Odometry and Mapping on Variable Terrain},\n  author={Shan, Tixiao and Englot, Brendan},\n  booktitle={IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},\n  pages={4758-4765},\n  year={2018},\n  organization={IEEE}\n}\n")),(0,i.kt)("h2",{id:"chapter-4--simulation-of-automatic-obstacle-avoidance-based-on-three-channel-ultrasonic"},"Chapter 4:  Simulation of Automatic Obstacle Avoidance Based on Three-channel Ultrasonic"),(0,i.kt)("h3",{id:"corresponding-wechat-article-3"},"Corresponding WeChat article"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/04_title.png",alt:null})),(0,i.kt)("p",null,"step 1: Visualization of neor_mini after adding an ultrasonic sensor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a Terminal\ncd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash            # if failed,please catkin_make all packages\n\n# launchUltrasonars sensors\nroslaunch neor_mini display_gazebo_sensors_ultrasonars.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/Display_sensor_ultrasonars.png",alt:null})),(0,i.kt)("p",null,"step 2: Start ultrasonic obstacle avoidance simulation in Gazebo (Stop step one)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open one Terminal\ncd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash            # if failed,please catkin_make all packages\n\nroslaunch steer_mini_gazebo steer_mini_sim_sensors_ultrasonars.launch \n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_ultrasonars_gazebos.png",alt:null}),"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open another Terminal\ncd ~/neor_mini/mini_sim18_ws/     \nsource devel/setup.bash            # if failed,please catkin_make all packages\n\n# launch the ultra_avoid_obstacle node\nroslaunch ultra_avoid_obstacle ultra_avoid_obstacle_node.launch \n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_ultrasonars_obstrale_avoid.gif",alt:null})),(0,i.kt)("p",null,"Congratulations!!! "),(0,i.kt)("h2",{id:"chapter-5--send-the-goal-to-navigation-through-the-ros-node"},"Chapter 5:  Send the Goal to navigation through the ROS node"),(0,i.kt)("h3",{id:"corresponding-wechat-article-4"},"Corresponding WeChat article"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/05_title.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/05_2_title.png",alt:null})),(0,i.kt)("p",null,"Step 1 : launch mini_navigation launch file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a terminal\ncd ~/neor_mini/mini_sim18_ws\ncatkin_make\nsource devel/setup.bash\nroslaunch mini_navigation navigation_steer_mini_sensors.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/navigation_Demo.png",alt:null})),(0,i.kt)("p",null,"Step 2 : rosrun the send_goals ROS node.   (",(0,i.kt)("strong",{parentName:"p"},"C++ ROS node"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# open another terminal "ctrl + shift +t" (Recommend)\nsource devel/setup.bash \nrosrun send_goals send_goals_node\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/send_goals.png",alt:null})),(0,i.kt)("p",null,"Step 3 :  rosrun the send_goals_python.py file (",(0,i.kt)("strong",{parentName:"p"},"Python ROS node"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# open another terminal "ctrl + shift +t" (Recommend)\nsource devel/setup.bash\nsudo chmod 0777 src/send_goals/scripts/send_goals_python.py\nrosrun send_goals send_goals_python.py\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/send_goals_python_pic.png",alt:null})),(0,i.kt)("p",null,"Congratulations!!! "),(0,i.kt)("h2",{id:"chapter-6-hector_mapping"},"Chapter 6: Hector_mapping"),(0,i.kt)("p",null,"Corresponding WeChat article"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/06_07_title.png",alt:null})),(0,i.kt)("p",null,"Step 1 : launch hector_mapping.launch "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# # open a terminal\ncd ~/neor_mini/mini_sim18_ws\nrosdep install --from-paths src --ignore-src -r -y     # you need wait a moment\ncatkin_make\nsource devel/setup.bash\nroslaunch mini_gmapping hector_mapping.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/hector_mapping.gif",alt:null})),(0,i.kt)("p",null,"Congratulations!!! "),(0,i.kt)("p",null,"Details paper:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"@INPROCEEDINGS{KohlbrecherMeyerStrykKlingaufFlexibleSlamSystem2011,\n  author = {S. Kohlbrecher and J. Meyer and O. von Stryk and U. Klingauf},\n  title = {A Flexible and Scalable SLAM System with Full 3D Motion Estimation},\n  year = {2011},\n  month = {November},\n  booktitle = {Proc. IEEE International Symposium on Safety, Security and Rescue Robotics (SSRR)},\n  organization = {IEEE},\n}\n")),(0,i.kt)("h2",{id:"chapter-7-rf2o_laser_odometry--gmapping"},"Chapter 7: rf2o_laser_odometry && gmapping"),(0,i.kt)("p",null,"Corresponding WeChat article"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/06_07_title.png",alt:null})),(0,i.kt)("p",null,"Step 1 : Find neor_mini_gazebo_sensors.urdf file, and replace the lidar scan frequency with 5. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'# the detiles blow: cd neor_mini/mini_sim18_ws/src/neor_mini/urdf && vim neor_mini_gazebo_sensors.urdf\n...\n<gazebo reference="laser_link">\n  <sensor type="ray" name="Top_laser_sensor">\n    <visualize>false</visualize>   \x3c!-- visual or unvisual laser ray :true or false--\x3e\n    <update_rate>40</update_rate> \x3c!-- \u9ed8\u8ba4\u662f 40\uff0c\u4fee\u6539\u4e3a 5 Hz --\x3e\n...\n')),(0,i.kt)("p",null,'Step 2 : Find the steer_mini_sim_sensors_with_other_world.launch , and replace the world file with "cooneo_rooom2.world"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'# cd neor_mini/mini_sim18_ws/src/steer_mini_gazebo/mini_gazebo/launch \n# vim steer_mini_sim_sensors_with_other_world.launch\n\x3c!--Load the surrounding environment into Gazebo--\x3e\n<include file="$(find gazebo_ros)/launch/empty_world.launch" >\n    <arg name="world_name" value="$(find neor_mini)/worlds/cooneo_room2.world"/> \n</include>\n...\n')),(0,i.kt)("p",null,"Step 3 : launch rf2o_laser_odometry and gmapping node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#open a terminal\ncd ~/neor_mini/mini_sim18_ws\nrosdep install --from-paths src --ignore-src -r -y     # you need wait a moment\ncatkin_make\nsource devel/setup.bash\nroslaunch mini_gmapping laser_odom_gmapping.launch\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/rf2o_laser_odometry_gmapping.gif",alt:null})),(0,i.kt)("p",null,"Congratulations!!! "),(0,i.kt)("p",null,"Thinks for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MAPIRlab"},"MAPIRlab"),"/",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/MAPIRlab/rf2o_laser_odometry"},"rf2o_laser_odometry")),"  !!!"),(0,i.kt)("h2",{id:"chapter-8--velodyne-16--lio_sam-3d-mappig"},"Chapter 8:  Velodyne-16 && lio_sam 3D Mappig"),(0,i.kt)("p",null,"Step 1 : install the dependence of the lio_sam\uff0cfollow as below:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\xb7")," gtsam(Georiga Tech Smoothing and Mapping library)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:borglab/gtsam-release-4.0\nsudo apt update\nsudo apt install libgtsam-dev libgtsam-unstable-dev\n")),(0,i.kt)("p",null,"or see the lio_sam git."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/TixiaoShan/LIO-SAM.git\n")),(0,i.kt)("p",null,"Step 2 : recording the vlp-16 && imu data in Gazebo By rosbag ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a new Terminal\ncd neor_mini/mini_sim18_ws/\ncatkin_make\nsource devel/setup.bash\nroslaunch steer_mini_gazebo steer_mini_sim_sensors_VLP16_lio_sam.launch\n\n# open another Terminal\nrosbag record -a\n\n# moving the neor_mini by rqt_robot_steering plugines.\n")),(0,i.kt)("p",null,"this step is same as the chapter 3 ."),(0,i.kt)("p",null,"Step 3: play your recording bag ,and run lio_sam to 3D-Mapping."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# open a new Terminal\ncd neor_mini/mini_sim18_ws/\ncatkin_make\nsource devel/setup.bash\nroslaunch lio_sam run_neor_mini.launch\n\n#open another terminal\ncd  your_bag_saved_folder\nrosbag play -r 5 yourbag_name.bag\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/lio_sam_mapping.gif",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"@inproceedings{liosam2020shan,\ntitle={LIO-SAM: Tightly-coupled Lidar Inertial Odometry via Smoothing and Mapping},\nauthor={Shan, Tixiao and Englot, Brendan and Meyers, Drew and Wang, Wei and Ratti, Carlo and Rus\nDaniela},\nbooktitle={IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},\npages={5135-5142},\nyear={2020},\norganization={IEEE}\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Thank you very much for Tixiaoshan && iscas_museum.")),(0,i.kt)("p",null,"our new Arduino Ackermann ROS CAR."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/neor_mini_arduino.jpg",alt:null}),"\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    "),(0,i.kt)("p",null,"\u200b\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2022.04.17     "),(0,i.kt)("p",null,"\u200b\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tauthor:ZhaoXiang Li && COONEO"),(0,i.kt)("p",null,"COONEO Co.,Ltd"),(0,i.kt)("p",null,"Web:",(0,i.kt)("a",{parentName:"p",href:"http://cooneo.cc"},"http://cooneo.cc")),(0,i.kt)("p",null,"E: ",(0,i.kt)("a",{parentName:"p",href:"mailto:cooneo@outlook.com"},"cooneo@outlook.com")),(0,i.kt)("p",null,'For more details,you can search "COONEO" in your WeChat.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/COONEO_wechat.jpg",alt:null})),(0,i.kt)("p",null,'For more tutorials\'video, please search "COONEO" in your Bilibili App.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/COONEO/neor_mini/raw/Melodic/pictures/bilibili.jpg",alt:null})),(0,i.kt)("h1",{id:"neor_mini"},"neor_mini"))}c.isMDXComponent=!0}}]);