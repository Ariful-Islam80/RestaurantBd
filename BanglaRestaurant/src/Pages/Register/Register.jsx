import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')

    const handleRegister = ev => {


        ev.preventDefault();
        const email = ev.target.email.value;
        const password = ev.target.password.value;
        const name = ev.target.name.value;
        const photo = ev.target.photo.value;
        const user = { email, password, name, photo }
        console.log(user);
        // create user in firebase

        // reset error and success
        setRegisterError('')
        setRegisterSuccess('')
        if (password.length < 8) {
            setRegisterError('Password should be at least 8 characters or longer')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your Password should have at least one upper case characters.')
            return;
        } else if (!/[a-z]/.test(password)) {
            setRegisterError('Your Password should have at least one LowerCase case characters.')
            return;
        } else if (!/[!@#$%^&*()_+><:"<>:"|{,.}]/.test(password)) {
            setRegisterError('Your Password Should have at least one special characters')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                ev.target.reset()
                setRegisterSuccess('User Register Successfully')
                navigate('/logIn')

            })
            .catch(error => {
                console.error(error.code);
                setRegisterError(error.message)
            })
        // create user

    }
    return (
        <>

            <div className=" flex items-center justify-center mt-12">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-green-500 text-center">Register <span className="text-orange-500">Now</span></h1>

                    <form onSubmit={handleRegister} className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="username" name="name" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">PhotoURL</label>
                            <input type="text"  name="photo" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Create Account</button>
                        </div>
                    </form>
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        {
                            registerError && <p className="text-red-600 text-center text-xl">{registerError}</p>
                        }
                        {
                            registerSuccess && <p className="text-red-600 text-center text-xl">{registerSuccess}</p>
                        }
                        <p className="text-lg">Already have an account? <Link to="/logIn" className="text-black hover:underline"><span className="text-green-500 font-bold"> LogIn Now</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;