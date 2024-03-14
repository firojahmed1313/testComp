"use client"

import { addUser } from '@/app/redux/slice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddUser = () => {
    const [name,setName]=useState("");
    const dispatch = useDispatch();
    const addDataName =()=>{
        console.log(name);
        dispatch(addUser(name));
    }
    return (
        <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add User</h1>
                </div>
                <div class="w-full mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 mx-auto">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" onChange={(e)=>setName(e.target.value)} id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button onClick={addDataName} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddUser