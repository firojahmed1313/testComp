"use client"

import { deleteUser } from '@/app/redux/slice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DisplayUser = () => {
    const userData = useSelector((data) => data.users);
    const dispatch= useDispatch()
    console.log(userData);
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {userData?.map((user) => {
                        return (
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={user.id}>
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{user.id}</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">{user.name}</h2>
                                    <p class="mt-1">$16.00</p>
                                </div>
                                <div class="p-2 w-full">
                                    <button onClick={()=>dispatch(deleteUser(user.id))} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Delete</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
}

export default DisplayUser