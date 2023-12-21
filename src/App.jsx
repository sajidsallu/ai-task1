import { useState } from "react";
import "./App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GrassIcon from "@mui/icons-material/Grass";
import ExtensionIcon from "@mui/icons-material/Extension";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';

function App() {
  const [show,setShow] = useState(false)
  return (
    <>
      <div className="w-screen h-full bg-[#e3f1fe]">
        {/* TOP NAVBAR START */}
        <div className="w-full h-[13.2vh]  flex justify-between bg-[#e3f1fe]">
          <div className="logo w-[48%] sm:w-[38%]   lg:w-[22%] xl:w-[18%] h-full  flex  items-center">
            <div className="block md:hidden ml-3">
            <IconButton  onClick={()=>setShow(true)}>
              <MenuIcon/>
            </IconButton>
            </div>
            <img
              src="/imgLogo.png"
              className="w-14 h-14 sm:w-fit sm:h-full sm:mx-[16%]"
              alt=""
            />
          </div>
          <div className="h-full xl:w-[18%] flex gap-2 items-center mr-1 bg-[#e3f1fe]">
            <div className="w-11/12 xl:w-9/12 h-9 rounded bg-white  flex items-center justify-around">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTED877WUQU4h6NHyFKopaMfRXZeTqonL144Q&usqp=CAU"
                className="h-full p-1"
                alt=""
              />
              <small className="font-bold text-slate-800 text-xs pr-2">
                XYZ Enterprises Pvt.Ltd
              </small>
            </div>
            <div className="bg-white h-9 flex justify-center items-center rounded w-7">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        {/* TOP NAVBAR END */}

        <div className="h-[87vh] flex  bg-[#e3f1fe] w-full justify-between">
          {/* Side NavBar Start */}
          <div className={`${show?'fixed top-0 left-0 h-full md:h-full  w-full sm:w-[40%]':'hidden md:static'} min-h-[100vh] md:flex lg:w-[14.3%] shadow-2xl  flex-col  items-center bg-white`}>
              <div className="md:hidden">
              <IconButton onClick={()=>setShow(false)}>
                <CancelIcon/>
              </IconButton>
              </div>
            <div className="h-[26%] border border-slate-100 w-[99%] flex flex-col justify-center items-center bg-white shadow-md">
              <img
                src="/profile.jpeg"
                className="rounded-full w-16 h-16"
                alt=""
              />
              <small className="font-bold text-sm mt-1">
                Ram Mohan
                <KeyboardArrowRightIcon fontSize="small" />{" "}
              </small>
              <small className="text-xs font-semibold">
                rammohan@gmail.com
              </small>
            </div>
            <div className="h-[73%]  w-[99%] pt-2 flex flex-col z-10 shadow-xl shadow-slate-400 ml-1 justify-center ">
              <div className="w-full h-[85%] space-y-4 ">
                <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
                  <DashboardIcon className="text-blue-700 ml-1" />
                  <p>Dashboard</p>
                </div>
                <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
                  <GrassIcon className="text-blue-700 ml-1" />
                  <p>Perks</p>
                </div>
                <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
                  <ExtensionIcon className="text-blue-700 ml-1" />
                  <p>Addons</p>
                </div>
                <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
                  <ContactSupportIcon className="text-blue-700 ml-1" />
                  <p>FAQ</p>
                </div>
                <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
                  <ConnectWithoutContactIcon className="text-blue-700 ml-1" />
                  <p>Support</p>
                </div>
              </div>
              <div className=" h-10 mb-4 flex font-bold  justify-center items-start text-blue-700 bg-white">
               Logout
                <PowerSettingsNewIcon />
              </div>
            </div>
          </div>

          {/* Side NAVBAR END */}

          {/* MAIN CARD LISTING START */}
          <div className={`${show?'w-[99%] md:w-[85.1%]':'w-[99%] md:w-[85.1%]'}h-full  flex flex-col items-center justify-center  bg-white`}>
            <div className="h-full md:h-[85%] w-11/12  bg-white">
            <div className="h-[13%] w-11/12  bg-white">
              <h1 className="text-sm sm:text-base md:text-lg ml-5 font-bold ">
                Choose a plan that's just right for you !
              </h1>
              <div className="flex w-44  gap-1 border border-slate-500 float-right  p-0.5 text-xs sm:text-sm lg:text-base font-semibold   md:mr-1 text-center justify-around items-center rounded-full">
                <small className="py-1  w-1/2 text-center bg-blue-200 rounded-full ">
                  Monthly
                </small>
                <small className="py-1  w-1/2 ">Annually</small>
              </div>
            </div>
              <div className="h-[95%] md:h-[60%] xl:h-[63%] w-full  grid grid-cols-12 gap-4 md:gap-9  p-2">
                {/* CARD 1 */}
                <div className="col-span-12   md:col-span-4 xl:mx-4 flex md:flex-col justify-around shadow-lg pl-5 rounded-md bg-white">
                  <div className="flex h-full md:h-[46%]   flex-col justify-center ">
                    <span className="text-2xl font-semibold">Basic</span>
                    <del className="text-red-500 text-xs">$ 89.99/mo</del>
                    <h1 className="text-lg font-semibold">
                      $ 9.99<span className="text-sm">/mo</span>{" "}
                    </h1>
                    <span className="bg-yellow-200 rounded w-[8rem] text-center text-sm font-semibold py-0.5 mt-1">
                      Get Started <ArrowRightAltIcon />
                    </span>
                  </div>

                  <div className="w-11/12 h-[0.1px] bg-slate-300 hidden md:block"/>
                  <div className="h-full md:h-[46%] text-gray-600 flex flex-col justify-evenly">
                    <small>What you'll get :</small>
                    <div className="flex gap-x-2 text-sm">
                      <PersonOutlineOutlinedIcon fontSize="small" />
                      <p className="">Upto 25 Users</p>
                    </div>
                    <div className="flex gap-x-2 text-sm">
                      <CloudDownloadOutlinedIcon fontSize="small" />
                      <p>Upto 25gb Storage</p>
                    </div>
                    <div className="flex gap-x-2  text-sm">
                      <EmailOutlinedIcon fontSize="small" />
                      <p>Email Support</p>
                    </div>
                    <div className="ml-6">
                      <small className="font-semibold">
                        <u>EXPLORE FEATURES</u>
                      </small>
                      <ArrowRightIcon className="text-yellow-500" />
                    </div>
                  </div>
                </div>
                {/* CARD 2 */}
                <div className="col-span-12  md:col-span-4 xl:mx-4 flex md:flex-col justify-around shadow-lg pl-5 rounded-md bg-white">
                  <div className="flex h-full md:h-[46%]  flex-col justify-center ">
                    <span className="text-2xl font-semibold">Standard</span>
                    <del className="text-red-500 text-xs">$ 189.99/mo</del>
                    <h1 className="text-lg font-semibold">
                      $ 99.99<span className="text-sm">/mo</span>{" "}
                    </h1>
                    <span className="bg-red-300 rounded w-[8rem] text-center text-sm font-semibold py-0.5 mt-1">
                      Get Started <ArrowRightAltIcon />
                    </span>
                  </div>

                  <div className="w-11/12 h-[0.1px] bg-slate-300 hidden md:block"/>

                  <div className="h-full md:h-[46%] text-gray-600 flex flex-col justify-evenly">
                    <small>What you'll get :</small>
                    <div className="flex gap-x-2 text-sm">
                      <PersonOutlineOutlinedIcon fontSize="small" />
                      <p className="">Upto 50 Users</p>
                    </div>
                    <div className="flex gap-x-2 text-sm">
                      <CloudDownloadOutlinedIcon fontSize="small" />
                      <p>Upto 60gb Storage</p>
                    </div>
                    <div className="flex gap-x-2  text-sm">
                      <EmailOutlinedIcon fontSize="small" />
                      <p>Email+Chat Support</p>
                    </div>
                    <div className="ml-6">
                      <small className="font-semibold">
                        <u>EXPLORE FEATURES</u>
                      </small>
                      <ArrowRightIcon className="text-red-500" />
                    </div>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className="col-span-12  md:col-span-4 xl:mx-4 flex md:flex-col justify-around shadow-lg pl-5 rounded-md bg-white">
                  <div className="flex h-full md:h-[46%]  flex-col justify-center ">
                    <span className="text-2xl font-semibold">Basic</span>
                    <del className="text-red-500 text-xs">$ 389.99/mo</del>
                    <h1 className="text-lg font-semibold">
                      $ 199.99<span className="text-sm">/mo</span>{" "}
                    </h1>
                    <span className="bg-purple-200 rounded w-[8rem] text-center text-sm font-semibold py-0.5 mt-1">
                      Get Started <ArrowRightAltIcon />
                    </span>
                  </div>

                  <div className="w-11/12 h-[0.1px] bg-slate-300 hidden md:block"/>

                  <div className="h-full md:h-[46%] text-gray-600 flex flex-col justify-evenly">
                    <small>What you'll get :</small>
                    <div className="flex gap-x-2 text-sm">
                      <PersonOutlineOutlinedIcon fontSize="small" />
                      <p className="">Upto 25 Users</p>
                    </div>
                    <div className="flex gap-x-2 text-sm">
                      <CloudDownloadOutlinedIcon fontSize="small" />
                      <p>Upto 25gb Storage</p>
                    </div>
                    <div className="flex gap-x-2  text-sm">
                      <EmailOutlinedIcon fontSize="small" />
                      <p>Email Support</p>
                    </div>
                    <div className="ml-6">
                      <small className="font-semibold">
                        <u>EXPLORE FEATURES</u>
                      </small>
                      <ArrowRightIcon className="text-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
              {/* BOTTOM CARDS */}
              <div className="h-full lg:h-[48%]  mx-3 grid grid-cols-12 gap-4 p-2">
                {/* BOTTOM CARD 1 */}
                <div className=" col-span-12 lg:col-span-6 flex shadow-lg  rounded-md bg-white">
                  <div className="w-1/2 pl-5  h-full flex gap-1 flex-col justify-center">
                    <small className="bg-green-300 px-2 py-0.5 w-fit font-semibold text-gray-800 rounded-full">
                      Free Forever
                    </small>
                    <h1 className="text-2xl font-semibold">Free Started</h1>
                    <small className="text-xs text-gray-600 line-clamp-2">
                      The quickcest and easiest way to try Protocols with basic
                      functionalities
                    </small>
                    <span className="bg-green-300 rounded w-[8rem] block text-center text-sm font-semibold py-0.5 mt-1">
                      Get Started <ArrowRightAltIcon />
                    </span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-1 justify-center text-gray-600">
                    <small>What you'll get :</small>
                    <div className="flex gap-x-2 text-xs">
                      <PersonOutlineOutlinedIcon fontSize="inherit" />
                      <p className="">Upto 25 Users</p>
                    </div>
                    <div className="flex gap-x-2 text-xs">
                      <CloudDownloadOutlinedIcon fontSize="inherit" />
                      <p>Upto 25gb Storage</p>
                    </div>
                    <div className="flex gap-x-2  text-xs">
                      <EmailOutlinedIcon fontSize="inherit" />
                      <p>Email Support</p>
                    </div>
                    <div className="flex gap-x-1">
                      <DoneAllOutlinedIcon fontSize="inherit" />
                      <p className="text-xs overflow-scroll">
                        Voting,Accounting,Banking,Notes,
                        Investore,Director and
                        Team,Management Included
                      </p>
                    </div>
                  </div>
                </div>
                {/* BOTTOM CARD 2 */}
                <div className=" col-span-12 lg:col-span-6 flex shadow-lg  rounded-md bg-white">
                  <div className="w-1/2 pl-5  h-full flex gap-1 flex-col justify-center">
                    <small className="bg-blue-200 px-2 py-0.5 w-fit font-semibold text-gray-800 rounded-full">
                      Let's Connect
                    </small>
                    <h1 className="text-2xl font-semibold">EnterPrise Plan</h1>
                    <small className="text-xs text-gray-600 line-clamp-2">
                      The quickcest and easiest way to try Protocols with basic
                      functionalities
                    </small>
                    <span className="bg-blue-200 rounded w-[8rem] block text-center text-sm font-semibold py-0.5 mt-1">
                      Get Started <ArrowRightAltIcon />
                    </span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-2 justify-center text-gray-600">
                    <small>What you'll get :</small>
                    <div className="flex gap-x-2 text-xs">
                      <PersonOutlineOutlinedIcon fontSize="inherit" />
                      <p className="">More than 75 Users</p>
                    </div>
                    <div className="flex gap-x-1">
                      <DoneAllOutlinedIcon fontSize="inherit" />
                      <p className="text-xs">
                        Customization of all
                        <br />
                        other features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD END */}

          <div className="min-h-[100vh] w-0.5 sm:w-[2rem] justify-between bg-[#e3f1fe] flex flex-col items-end">
            <div className="border bg-white h-fit py-1.5 px-0.5 rounded-es-md rounded-ss-md">
              <NotificationsActiveIcon color="info" />
            </div>
            <div className="w-full  h-[28%] justify-around flex flex-col items-end">
                <div className="w-7 h-24 bg-white rounded-es-md rounded-ss-md"/>
                <AddIcon fontSize="medium" className="text-blue-500 bg-slate-300 rounded-full"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
