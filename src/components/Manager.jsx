import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")

        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const editForm = (id) => {
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        setform(passwordArray.filter(item => item.id === id)[0])
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) =>  item.id !== id )))
        toast('editing password', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }

    const deleteForm = (id) => {
        setPasswordArray(passwordArray.filter(i => i.id !== id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) =>  item.id !== id )))
    }

    const copyText = (text) => {
        toast('copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        navigator.clipboard.writeText(text);
    };


    const showPassword = () => {
        if (ref.current.src.includes("/eye.png")) {
            ref.current.src = "/eyecross.png"
            passwordRef.current.type = "password"
        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "/eye.png"
        }
    }

    const handleChange = (e) => {
        if (e.target.value !== null) {
            setform({ ...form, [e.target.name]: e.target.value, })
        }
    }

    const savePassword = () => {
        if (form.site && form.username && form.password) {
            const newPassword = { ...form, id: uuidv4() }
            setPasswordArray([...passwordArray, newPassword])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, newPassword]))
            toast('password saved...',{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        setform({ site: "", username: "", password: "" })
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />


            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className=" flex gap-3 flex-col items-center w-2/3 mx-auto  p">
                <div className="w-full">
                    <input onChange={handleChange} className='px-4 py-1 w-full bg-white border border-green-500 rounded-full' type="text" name="site" placeholder='Enter URL or Website name' />
                </div>

                <div className="w-full flex justify-center gap-2">
                    <input onChange={handleChange} className='px-4 py-1 w-1/2 bg-white border border-green-500 rounded-full' type="text" name="username" placeholder='Enter Username or ID' />
                    <div className="w-1/2 flex ">
                        <input ref={passwordRef} onChange={handleChange} className='px-4 py-1 bg-white border border-green-500 rounded-full min-w-full' type="password" name="password" placeholder='Enter Password' />
                        <img ref={ref} onClick={showPassword} className='relative right-10 h-6 top-1.5 cursor-pointer' width={24} src="./eyecross.png" alt="" />
                    </div>
                </div>

                <div onClick={savePassword} className="flex justify-center items-center gap-2 bg-green-400 px-7 py-1 border border-white font-bold text-lg rounded-full cursor-pointer">
                    Add
                    <lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                    >
                    </lord-icon>
                </div>


                <div className="passwords w-full overflow-auto flex flex-col">
                    <h1 className='font-bold text-black text-2xl '>Your Passwords</h1>
                    {passwordArray.length === 0 && <div className='text-center'>Your passwords will be shown here </div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-lg overflow-hidden">
                        <thead className='bg-green-700 text-white text-xl'>
                            <tr>
                                <th className=''>Site</th>
                                <th className=''>Username</th>
                                <th className=''>Password</th>
                                <th className=''>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100 py-3'>
                            {passwordArray.map(
                                (item, index) => {
                                    return (
                                        <tr key={index} className=''>
                                            <td className='text-center py-1 border border-white'>
                                                <div className="flex items-center justify-center gap-3">
                                                    <a href={item.site} target='_blank'>{item.site}</a>
                                                    <img className='cursor-pointer' onClick={() => { copyText(item.site) }} src="./copy.svg" width={24} height={24} alt="copy" />
                                                </div>
                                            </td>
                                            <td className='text-center py-1 border border-white'>
                                                <div className="flex items-center justify-center gap-3">
                                                    {item.username}
                                                    <img className='cursor-pointer' onClick={() => { copyText(item.username) }} src="./copy.svg" width={24} height={24} alt="copy" />
                                                </div>
                                            </td>
                                            <td className='text-center py-1 border border-white'>
                                                <div className="flex items-center justify-center gap-3">
                                                    {item.password}
                                                    <img className='cursor-pointer' onClick={() => { copyText(item.password) }} src="./copy.svg" width={24} height={24} alt="copy" />
                                                </div>
                                            </td>
                                            <td className='text-center py-1 border border-white'>
                                                <div className="flex items-center justify-center gap-7">
                                                    <div className="edit-svg flex items-center justify-center cursor-pointer" onClick={() => { editForm(item.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                                            trigger="hover"
                                                            style={{ "width": "25px", "height": "25px" }}>
                                                        </lord-icon>
                                                    </div>
                                                    <div className="delete-svg flex  items-center justify-center cursor-pointer" onClick={() => { deleteForm(item.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/xyfswyxf.json"
                                                            trigger="hover"
                                                            style={{ "width": "25px", "height": "25px" }}>
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                    </table>}
                </div>

            </div>


        </>
    )
}

export default Manager