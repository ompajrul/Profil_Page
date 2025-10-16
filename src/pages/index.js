import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";





export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => setUser(data.results[0]));
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading profile...
      </div>
    );
  }
  return (
   
    <>

      <nav class="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
                  <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex shrink-0 items-center">
                <h1>EKSTRAK DATA</h1>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
                  <a href="#" aria-current="page" class="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
                  <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
            <a href="#" aria-current="page" class="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white">Dashboard</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
          </div>
        </el-disclosure>
      </nav>


      <div className="grid grid-cols-4 grid-rows-7 gap-4 m-3">
        {/* <div className="col-span-4 bg-gray-800  p-3 item-center rounded-lg text-4xl">
          <h1>PROFIL PENGGUNA</h1></div> */}

        {/* profil pengguna */}
        <div className="col-span-2 row-span-2 bg-gray-800 p-2 rounded-lg">
          <h2 className="text-2xl my-2 font-bold">FOTO PROFIL</h2>
          <div className="grid grid-cols-2 justify-start">

            <div className="grid grid-cols-[auto_1fr] gap-4 items-center">

              <img
                src={user.picture.large}
                alt="profile"
                className="rounded-lg border-4 border-indigo-500"
              />
              <div className=" items-center gap-2">
                <span className="text-xl font-bold">{user.name.first} {user.name.last}</span>

                <p className="text-xl ">{user.location.country} </p>
              </div>
            </div>
          </div>
        </div>
        {/*timezone  */}


        <div className="col-span-2 row-span-2 col-start-3">
        </div>
        {/* informasi diri */}
        <div className="col-span-4 row-span-3 bg-gray-800 rounded-lg p-2">
          <h1 className="text-2xl my-2"> INFORMASI PRIBADI</h1>
          <hr className="border-gray-600 mb-6" />
          <div className="grid grid-cols-2 gap-4 items-center gap-3">
            <div>
              <div>
                <h1 className="font-semibold">NAMA:</h1>
                <p> {user.name.first} {user.name.last}</p>
              </div>
              <div>
                <h1 className="font-semibold">ALAMAT:</h1>
                <p> {user.location.street.number} {user.location.street.name} {user.location.city} {user.location.state} {user.location.country} {user.location.postcode}</p>
              </div>
              <div>
                <h1 className="font-semibold">JENIS KELAMIN:</h1>
                <p> {user.gender}</p>
              </div>
              <div>
                <h1 className="font-semibold">WARGA NEGARA:</h1>
                <p>{user.location.country} </p>
              </div>
           
             
            </div>
            <div>
               <div>
                <h1 className="font-semibold">TANGGAL LAHIR:</h1>
                <p> {dayjs(user.dob.date).format("DD MMMM YYYY")}</p>
              </div>
              <div>
                <h1 className="font-semibold">EMAIL:</h1>
                <p> {user.email} </p>
              </div>
              <div>
                <h1 className="font-semibold">NOMER TELEPON:</h1>
                <p> {user.phone} </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div>

      </div>

    </>
  );
}
