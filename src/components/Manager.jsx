
import { useEffect, useRef, useState } from "react"
import { IoCopy } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()


    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {

        alert("Your Passwords are saving in your device local storage , your data is not accessible by the developer : Umar Daraz!")

        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }



    }, [])




    const showPassword = () => {
        if (ref.current.src.includes('/eye.png')) {
            ref.current.src = '/hide.png'
            passwordref.current.type = "text"
        }
        else {
            ref.current.src = '/eye.png'
            passwordref.current.type = "password"

        }


    }


    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            alert("saved !")
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))

            console.log([...passwordArray, form])

            setform({ site: "", username: "", password: "" })
        }
        else {


            alert("please add valid detail")
            console.warn("add some data");

        }



    }
    const deletePassword = (id) => {

        console.log("deleting :", id)
        let c = confirm("Are you sure you want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))

        }



    }
    const editPassword = (id) => {

        console.log("editing :", id)
        setform(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))





    }


    const handleChange = (e) => {

        setform({ ...form, [e.target.name]: e.target.value })

    }

    const copyText = (text) => {
        toast.success('Copied!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
            closeButton: true
        });

        navigator.clipboard.writeText(text)
    }











    return (











        <div className='m-10 p-10'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="dark"
            />


            <div className="fixed inset-0 -z-10 w-screen h-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>



            {/* my content starts here  */}
            <div className='md:container mx-auto max-w-4xl  text-center'>

                <h1>
                    <span className='text-purple-900'>&lt;</span>
                    <span>Key</span>
                    <span className='text-purple-900'>Save / &gt;</span>


                </h1>
                <p>Your Personal Password Manager </p>
                <div className='flex flex-col p-4 gap-8 justify-center items-center' >


                    <input value={form.site} name="site" onChange={handleChange} type="text" id='' placeholder='Enter Website URL' className='border border-purple-700 w-full rounded-2xl p-2' />

                    <div className='flex flex-col md:flex-row gap-4 md:gap-8 w-full'>
                        <input value={form.username} name="username" onChange={handleChange} type="text" id='' placeholder='Enter username' className='border border-purple-700 w-full rounded-2xl p-2' />
                        <div className="relative flex w-full gap-4">
                            <input ref={passwordref} value={form.password} name="password" onChange={handleChange} type="password" id='' placeholder='Enter Password' className='border border-purple-700 w-full rounded-2xl p-2' />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} src="public/eye.png" alt="" width={20} />

                            </span>


                        </div>
                    </div>

                    <button onClick={savePassword} className="bg-purple-400 font-bold rounded-full w-fit p-2 text-white border border-black hover:bg-purple-800">Save Password


                    </button>
                </div>


                <div className="passwords ">

                    <h2 className="font-bold text-2xl py-4">Your Passwords</h2>

                    {passwordArray.length === 0 && <div>No Passwords to show </div>}
                    {passwordArray.length != 0 &&


                        <div className="w-full overflow-x-auto">
                            <table className="table-auto min-w-150 w-full rounded-md text-xs sm:text-sm">
                                <thead className="bg-purple-500 text-white">
                                    <tr>
                                        <th>Site</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-purple-300">


                                    {passwordArray.map((item, index) => (
                                        <tr key={index} >
                                            <td className=" text-center w-32 py-2 border border-white cursor-pointer"> <a href={item.site} target="blank">{item.site}</a></td>
                                            <td className="relative text-center w-32 py-2 border border-white ">{item.username}<span className="absolute right-5 top-3 cursor-pointer"><IoCopy onClick={() => copyText(item.username)} /></span></td>
                                            <td className="relative text-center w-32 py-2 border border-white ">  {"*".repeat(item.password?.length || 8)}<span className="absolute right-5 top-3 cursor-pointer"><IoCopy onClick={() => copyText(item.password)} /></span></td>
                                            <td className="mx-auto w-20 py-2 border border-white "><div className="flex gap-3 justify-center items-center"> <button onClick={() => { deletePassword(item.id) }}><MdDeleteForever className="text-lg sm:text-xl hover:text-red-600" /></button> <button onClick={() => { editPassword(item.id) }}><MdEditSquare className="text-lg sm:text-xl hover:text-blue-600" />
                                            </button></div>
                                            </td>
                                        </tr>
                                    ))}



                                </tbody>
                            </table>
                        </div>}
                </div>




            </div>
        </div>
    )
}

export default Manager
