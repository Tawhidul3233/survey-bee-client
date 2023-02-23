import React, { useEffect, useState } from 'react';
import UserTable from '../UserTable/UserTable';

const UserHeader = () => {

  const [userData, setUserData] = useState([])
  const [originalData, setOriginalData] = useState([]);
  // console.log(realUser)

  useEffect(() => {
    fetch('https://survey-bee-server.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        setUserData(data)
        setOriginalData(data)
      })
  }, [])

  // const [userData, setUserData] = useState(data)
  const [search, setSearch] = useState('')

  const findUsers = (fildKey) => {
    if (fildKey === 'all') {
      setUserData(originalData)
    }
    else if (fildKey === 'paid') {
      const targetedUser = originalData?.filter(tUser => {
        return (fildKey === tUser?.userType)
      });
      return setUserData(targetedUser)
    }
    else if (fildKey === 'free') {
      const targetedUser = originalData?.filter(tUser => {
        return (fildKey === tUser?.userType)
      });
      return setUserData(targetedUser)
    }
  }


  return (
    <div>
      <header aria-label="Page Header" className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between sm:gap-4">
            <form className="relative hidden sm:block">
              <label className="sr-only" for="search"> Search </label>

              <input onChange={(e) => { setSearch(e.target.value) }} name='searchText'
                className="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />

              <button

                type="submit"
                className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span className="sr-only">Submut Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>

            <div
              className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
            >
              <div className="flex gap-4">
                <button
                  type="button"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <div
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition"
              >
                <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
                  {/* <button
                    class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 focus:text-white focus:bg-black"
                    onClick={() => setUserData(data)}
                  >
                    All
                  </button> */}
                  <button
                    class="inline-block rounded-md px-4 py-2 text-sm text-gray-500 focus:text-white focus:bg-black"
                    onClick={() => findUsers('all')}
                  >
                    All
                  </button>

                  <button
                    class="inline-block rounded-md px-4 py-2 text-sm text-gray-500  focus:text-white focus:bg-black "
                    onClick={() => findUsers('paid')}
                  >
                    Paid
                  </button>

                  <button
                    class="inline-block rounded-md px-4 py-2 text-sm text-gray-500  focus:text-white focus:bg-black"
                    onClick={() => findUsers('free')}
                  >
                    Free
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <UserTable userData={userData} search={search.toLocaleLowerCase()}> </UserTable>
      </div>
    </div>
  );
};

export default UserHeader;